"use client"

import { useEffect, useState } from "react"
import { Globe, ChevronDown } from "lucide-react"
import { Button } from "../components/import-components"
import LoginPage from "../views/Auth/loginPage"
import AuthPage from "../views/Auth/authPage"

const navLinks = [
    { id: 1, label: "FAKER", href: "#" },
    { id: 2, label: "CẨM NANG DTCL", href: "#" },
    { id: 3, label: "LCK", href: "#" },
    { id: 4, label: "ANIME", href: "#" },
    { id: 5, label: "LPL", href: "#" },
]

const SiteNavigation = () => {
    return (
        <div className="container mx-auto px-4 w-[1140px] max-w-full bg-inherit">
            <nav className="flex items-center overflow-x-auto py-2 scrollbar-hide navbar-trending">
                <img
                    src="https://cdn.oneesports.vn/cdn-data/wp-content/themes/oneesports/img/trending-arrow.svg"
                    alt=""
                    className="max-h-full max-w-full h-[14px] w-[23px] object-cover bg-center"
                />
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
    )
}

const SiteHeader = () => {
    const [showShadow, setShowShadow] = useState(false)
    const [showLoginModal, setShowLoginModal] = useState(false)
    const [showRegisterModal, setShowRegisterModal] = useState(false)

    // Add scroll event listener
    useEffect(() => {
        const handleScroll = () => {
            // Show shadow when scrolled down more than 10px
            if (window.scrollY > 10) {
                setShowShadow(true)
            } else {
                setShowShadow(false)
            }
        }

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll)

        // Initial check
        handleScroll()

        // Clean up
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (showLoginModal || showRegisterModal) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }

        return () => {
            document.body.style.overflow = "auto"
        }
    }, [showLoginModal, showRegisterModal])

    const handleLoginClick = () => {
        setShowLoginModal(true)
        setShowRegisterModal(false)
    }

    const handleRegisterClick = () => {
        setShowLoginModal(false)
        setShowRegisterModal(true)
    }

    const handleCloseModal = () => {
        setShowLoginModal(false)
        setShowRegisterModal(false)
    }

    return (
        <>
            <div
                className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200 ${showShadow ? "custom-shadow" : ""}`}
            >
                <header className="text-white bg-dark w-[1520px] max-w-full">
                    <div className="container mx-auto px-4 w-[1350px] max-w-full">
                        <div className="flex items-center justify-between h-[50px]">
                            <div className="flex items-center space-x-6">
                                <a href="/" className="flex items-center">
                                    <img
                                        src="https://cdn.oneesports.vn/cdn-data/wp-content/themes/oneesports/img/oneesports-logo-white.svg"
                                        alt="ONE Esports"
                                        className="h-[64px] w-auto object-cover"
                                    />
                                </a>
                                <nav className="hidden md:flex items-center space-x-6">
                                    <a href="#" className="text-sm font-bold hover:text-red-500">
                                        LMHT
                                    </a>
                                    <a href="#" className="text-sm font-bold hover:text-red-500">
                                        LIÊN QUÂN MOBILE
                                    </a>
                                    <a href="#" className="text-sm font-bold hover:text-red-500">
                                        DTCL
                                    </a>
                                    <a href="#" className="text-sm font-bold hover:text-red-500">
                                        VALORANT
                                    </a>
                                    <a href="#" className="text-sm font-bold hover:text-red-500">
                                        PUBG
                                    </a>
                                    <a href="#" className="text-sm font-bold hover:text-red-500">
                                        THẾ GIỚI GAME
                                    </a>
                                    <a href="#" className="text-sm font-bold hover:text-red-500">
                                        EA SPORTS FC
                                    </a>
                                    <div className="relative group">
                                        <button className="flex items-center text-sm font-medium hover:text-red-500">
                                            KHÁC <ChevronDown className="h-4 w-4" />
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
                                <div className="flex items-center border-l border-r border-white px-4">
                                    <Globe className="h-4 w-4 mr-1" />
                                    <span className="text-sm font-medium mr-1">VN</span>
                                    <ChevronDown className="h-4 w-4" />
                                </div>
                                <Button text="ĐĂNG NHẬP" onClick={handleLoginClick} />
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
                <SiteNavigation />
            </div>

            {/* Login Modal */}
            {showLoginModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-sm bg-black/30">
                    <div className="w-full max-w-md">
                        <LoginPage onClose={handleCloseModal} onRegisterClick={handleRegisterClick} />
                    </div>
                </div>
            )}

            {/* Register Modal */}
            {showRegisterModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-sm bg-black/30">
                    <div className="w-full max-w-md">
                        <AuthPage onClose={handleCloseModal} onLoginClick={handleLoginClick} />
                    </div>
                </div>
            )}
        </>
    )
}

export default SiteHeader
