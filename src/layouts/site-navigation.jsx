import React from 'react'

// Navigation links data - extracted for maintainability
const navLinks = [
    { id: 1, label: "FAKER", href: "#" },
    { id: 2, label: "CẨM NANG DTCL", href: "#" },
    { id: 3, label: "LCK", href: "#" },
    { id: 4, label: "ANIME", href: "#" },
    { id: 5, label: "LPL", href: "#" },
]

const SiteNavigation = () => {
    return (
        <>
            <div className="container mx-auto px-4 w-[1140px] max-w-full bg-inherit">
                <nav className="flex items-center overflow-x-auto py-2 scrollbar-hide navbar-trending">
                    <img src="https://cdn.oneesports.vn/cdn-data/wp-content/themes/oneesports/img/trending-arrow.svg" alt=''
                        className='max-h-full max-w-full h-[14px] w-[23px] object-cover bg-center' />
                    <ul className="flex items-center nav-list">
                        {navLinks.map((link) => (
                            <li key={link.id} className="nav-item">
                                <a href={link.href} className="text-xs font-medium hover:text-red-500 whitespace-nowrap uppercase px-5">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default SiteNavigation