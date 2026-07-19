import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminLayout from '../../components/layouts/AdminLayout'
const Admin = () => {
  return (
    <AdminLayout>
        <Outlet />
    </AdminLayout>
  )
}

export default Admin