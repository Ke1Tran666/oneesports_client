"use client"

const Button = ({ text = "Button", onClick, type = "button", className = "" }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`bg-yellow-500 hover:bg-yellow-600 text-black text-xs font-bold px-4 py-2 rounded ${className}`}
        >
            {text}
        </button>
    )
}

export default Button
