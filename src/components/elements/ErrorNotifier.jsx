import React, { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CLEAR_ERROR } from '../../store/types';
import ErrorMessage from './ErrorMessage';
// import LoginModal from './LoginModal';

const ErrorNotifier = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const location = useLocation()
    const lastNonAuthPathRef = useRef('/admin')

    const error = useSelector(state => state?.errors?.error);
    const dismissHandler = () => {
        dispatch( {
            type: CLEAR_ERROR
        })
    }

    useEffect(() => {
        if (location.pathname !== '/') {
            lastNonAuthPathRef.current = `${location.pathname}${location.search || ''}`
        }
    }, [location.pathname, location.search])

    useEffect(() => {
        if (!error) {
            return
        }

        const timeoutId = setTimeout(() => {
            dismissHandler()
        }, 5000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [error])

    useEffect(() => {
        if (!error || error.statusCode !== 401) {
            return
        }

        localStorage.removeItem('token')
        localStorage.removeItem('user')

        const currentLocation = `${location.pathname}${location.search || ''}`
        const returnUrl = location.pathname === '/' ? lastNonAuthPathRef.current : currentLocation
        const queryString = new URLSearchParams({ returnUrl }).toString()

        navigate(`/?${queryString}`, { replace: true })
    }, [error, navigate, location.pathname, location.search])

    if (!error) return null;

    if (error.statusCode === 401) {
        return (
            <ErrorMessage message={`Your log in session has expired, please log in again to continue.`} dismissHandler={()=>{dismissHandler()}} />
        )
    }

    return (
        error && error.message ? <ErrorMessage message={error.message} dismissHandler={()=>{dismissHandler()}} /> : <ErrorMessage message="Network Error" dismissHandler={()=>{dismissHandler()}} />
    )
}

export default ErrorNotifier
