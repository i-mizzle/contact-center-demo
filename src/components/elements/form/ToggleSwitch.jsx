import { Switch } from '@headlessui/react'

const ToggleSwitch = ({ checked = false, onChange, label = 'Toggle option' }) => {
  return (
    <Switch
      checked={checked}
      onChange={onChange}
      className={`${
        checked ? 'bg-blue-200 dark:bg-blue-700' : 'bg-gray-400 dark:bg-stone-700'
      } relative inline-flex items-center h-5 rounded-full w-10`}
    >
      <span className="sr-only">{label}</span>
      <span
        className={`transform transition ease-in-out duration-200 ${
          checked ? 'transtone-x-6 bg-yellow-500' : 'transtone-x-1 bg-gray-600 dark:bg-stone-400'
        } inline-block w-3 h-3 transform rounded-full`}
      />
    </Switch>
  )
}

export default ToggleSwitch