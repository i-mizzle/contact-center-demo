import React from 'react'
import DropdownMenu from '../elements/DropdownMenu';
import ThemeToggler from '../elements/ThemeToggler';
import { useLocation, useNavigate } from 'react-router';
import LogoutIcon from '../elements/icons/LogoutIcon';
import CogIcon from '../elements/icons/CogIcon';
import UserIcon from '../elements/icons/UserIcon';
import { userDetails } from '../../utils/utils';
import BarsIcon from '../elements/icons/BarsIcon';

const AdminHeader = ({ toggleMobileMenu }) => {

  const location = useLocation();
  const navigate = useNavigate();
  const user = userDetails()

  const UserMenuButton = () => (
    <div className="flex items-center gap-x-2 mt-0.5">
      <div className="w-10">
        <div className="w-10 h-10 rounded-full bg-stone-200 dark:bg-stone-900 flex items-center justify-center">
          <h3 className="text-md font-medium">{user.firstName.charAt(0)}{user.lastName.charAt(0)}</h3>
        </div>
      </div>
      <div className="w-full text-left pr-2 hidden md:block">
        <h3 className="text-sm font-semibold">{user.firstName} {user.lastName}</h3>
        <p className="text-xs">{user.isSuperAdmin ? 'Super Administrator' : 'Administrator'}</p>
      </div>
    </div>
  )

  const pageTitles = {
    '/admin/dashboard': 'Dashboard',
    '/admin/merchants': 'Merchants',
    '/admin/transactions/collections': 'Transactions > Collections',
    '/admin/transactions/payouts': 'Transactions > Payouts',
    '/admin/settings/profile': 'Settings > User Profile',
    '/admin/settings/users': 'Settings > Users',
    'admin/merchants': 'Merchants'
  }

  const signOut = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    navigate('/')
  }

  const menuItems = [
    // {
    //   label: <span className="flex items-center gap-x-2">
    //     <UserIcon className="w-5 h-5 text-stone-700 dark:text-light-green" />
    //     Profile
    //   </span>,
    //   action: () => {  }
    // },
    {
      label: <span className="flex items-center gap-x-2">
        <CogIcon className="w-5 h-5 text-stone-700 dark:text-light-green" />
        Settings
      </span>,
      action: () => { navigate('/admin/settings') }
    },
    {
      label: <span className="flex items-center gap-x-2">
        <LogoutIcon className="w-5 h-5 text-stone-700 dark:text-light-green" />
        Logout
      </span>,
      action: () =>  { signOut() }
    },
  ]

  return (
    <header className='sticky top-0 z-20 w-full border-b border-stone-300 bg-stone-50/95 px-8 py-3 backdrop-blur dark:border-stone-900 dark:bg-stone-950/95'>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <button
            type="button"
            className="md:hidden"
            onClick={() => {
              toggleMobileMenu();
            }}
            aria-label="Toggle mobile menu"
          >
            <BarsIcon className="w-6 h-6" />
          </button>
          <h1 className="text-sm xl:text-md font-semibold">{pageTitles[location.pathname]}</h1>
        </div>

        <div className="flex flex-row-reverse items-center gap-x-1 xl:gap-x-4">

          <DropdownMenu 
            buttonLabel={<UserMenuButton />}
            menuItems={menuItems} 
            hideChevron={false} 
          />

          <div className="w-px h-5 bg-stone-300 dark:bg-stone-900" />

          <ThemeToggler />
          
        </div>
      </div>

    </header>
  )
}

export default AdminHeader