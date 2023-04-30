import React from 'react'

export default function ButtonRounded({ className, onClick, isBorderOnly = false, ...props }) {
    return (
        <button {...props} onClick={e => onClick(e)} className={`transition-all font-fredoka ${isBorderOnly ? `border-2 border-primary text-primary bg-white hover:text-white` : `bg-primary text-white`} font-primary text-lg duration-700 shadow-lg rounded-full px-7 py-4 hover:bg-slate-400 ${className}`}>{props.children}</button>
    )
}
