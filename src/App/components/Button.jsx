import React from 'react'

export default function Button({ className, onclick, children }) {
    return (
        <button
            className={className}
            onClick={onclick} >
            {children}
        </button>
    )
}
