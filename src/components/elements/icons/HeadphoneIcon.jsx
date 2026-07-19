import React from 'react'

const HeadphoneIcon = ({className}) => {
  return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="800"
        height="800"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className={className}
        // ariaLabelledby="supportIconTitle"
        color="currentColor"
        viewBox="0 0 24 24"
    >
        <path d="M21 12h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2za9 9 0 0 0-18 0v4a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H3"></path>
        <path d="M21 14v4q0 3-2 3h-5"></path>
    </svg>
  )
}

export default HeadphoneIcon