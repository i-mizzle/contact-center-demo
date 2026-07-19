import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const SettingsLayout = ({children}) => {
    const location = useLocation();
    const currentRoute = location.pathname;

    return (
        <div>
            <div className='h-12.5 w-full flex items-center'>
                <Link to="/admin/settings/profile"  className={`font-medium text-sm nav-button px-3 py-3 ${currentRoute.includes('admin/settings/profile') ? 'border-b-2 border-stone-500 dark:border-stone-600' : 'border-b border-stone-300 dark:border-stone-800'}`}>User Profile</Link>

                {/* <Link to="/admin/settings/security"  className={`font-medium text-sm nav-button px-3 py-3 ${currentRoute.includes('admin/settings/security') ? 'border-b-2 border-stone-500 dark:border-stone-600' : 'border-b border-stone-300 dark:border-stone-800'}`}>Security</Link> */}

                <Link to="/admin/settings/users"  className={`font-medium text-sm nav-button px-3 py-3 ${currentRoute.includes('admin/settings/users') ? 'border-b-2 border-stone-500 dark:border-stone-600' : 'border-b border-stone-300 dark:border-stone-800'}`}>System Users</Link>

                {/* <Link to="/admin/settings/system-users"  className={`font-medium text-sm nav-button px-3 py-3 ${currentRoute.includes('admin/settings/system-users') ? 'border-b-2 border-stone-500 dark:border-stone-900' : 'border-b border-stone-300 text-stone-600'}`}>System Users</Link> */}

                {/* <Link to="/admin/settings/audit-logs"  className={`font-medium text-sm nav-button px-3 py-3 ${currentRoute.includes('admin/settings/audit-logs') ? 'border-b-2 border-stone-300 dark:border-stone-900' : 'border-b border-stone-300 text-stone-600'}`}>Audit Logs</Link> */}
                
            </div>
            <div className={`mt-0 min-h-screen w-full pt-5`}>
                <main>{children}</main>
            </div>
        </div>
    )
}

export default SettingsLayout   