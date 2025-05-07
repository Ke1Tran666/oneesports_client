import React from 'react'

const SiteHeader = () => {
    return (
        <>
            <header className="border-b border-gray-800 bg-dark w-[1520px] max-w-full">
                <div className="container mx-auto px-4 w-[1350px] max-w-full">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-6">
                            <a href="/" className="flex items-center">
                                <img
                                    src="https://cdn.oneesports.vn/cdn-data/wp-content/themes/oneesports/img/oneesports-logo-white.svg"
                                    alt="ONE Esports"
                                    className="h-[64px] w-auto object-cover"
                                />
                            </a>
                            <nav className="hidden md:flex items-center space-x-6">
                                <a href="#" className="text-sm font-medium hover:text-red-500">
                                    LMHT
                                </a>
                                <a href="#" className="text-sm font-medium hover:text-red-500">
                                    LIÊN QUÂN MOBILE
                                </a>
                                <a href="#" className="text-sm font-medium hover:text-red-500">
                                    DTCL
                                </a>
                                <a href="#" className="text-sm font-medium hover:text-red-500">
                                    VALORANT
                                </a>
                                <a href="#" className="text-sm font-medium hover:text-red-500">
                                    PUBG
                                </a>
                                <a href="#" className="text-sm font-medium hover:text-red-500">
                                    THẾ GIỚI GAME
                                </a>
                                <a href="#" className="text-sm font-medium hover:text-red-500">
                                    EA SPORTS FC
                                </a>
                                <div className="relative group">
                                    <button className="flex items-center text-sm font-medium hover:text-red-500">
                                        KHÁC <span className="ml-1">▼</span>
                                    </button>
                                    <div className="absolute hidden group-hover:block bg-dark border border-gray-800 w-40 z-10">
                                        <div className="py-2">
                                            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-800">
                                                Tùy chọn 1
                                            </a>
                                            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-800">
                                                Tùy chọn 2
                                            </a>
                                            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-800">
                                                Tùy chọn 3
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div className="flex items-center space-x-4">
                            <a href="#" className="text-sm font-medium hover:text-red-500 hidden md:block">
                                SHOP
                            </a>
                            <div className="flex items-center border-l border-r border-gray-800 px-4">
                                <span className="text-sm font-medium mr-1">VN</span>
                                <span>▼</span>
                            </div>
                            <button className="bg-yellow-500 hover:bg-yellow-600 text-black text-xs font-bold px-4 py-2 rounded">
                                ĐĂNG NHẬP
                            </button>
                            <button className="p-1 hover:bg-gray-800 rounded">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                            <button className="p-1 hover:bg-gray-800 rounded md:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default SiteHeader