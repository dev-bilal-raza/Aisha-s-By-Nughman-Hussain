import React from 'react'

const Button = ({ text }: { text: string }) => {
    return (
        <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-black text-white hover:bg-white hover:text-black duration-500 rounded-lg">
            {text}
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
        </button>
    )
}
export default Button