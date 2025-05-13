"use client"

import { useState } from "react"
import { Eye, EyeOff, X } from "lucide-react"

const LoginPage = ({ onClose, onRegisterClick }) => {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false,
    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Login form submitted:", formData)
        // Add your login logic here
        onClose()
    }

    return (
        <div className="relative bg-gradient-to-br from-blue-900 to-black rounded-lg overflow-hidden">
            {/* Close button */}
            <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-gray-300 z-10">
                <X size={20} />
            </button>

            {/* Content */}
            <div className="p-8">
                {/* Logo */}
                <div className="flex justify-center mb-6">
                    <img
                        src="https://cdn.oneesports.vn/cdn-data/wp-content/themes/oneesports/img/trending-arrow.svg"
                        alt="ONE ESPORTS"
                        className="h-16"
                    />
                </div>

                {/* Social Login */}
                <div className="mb-6">
                    <p className="text-white text-center mb-4">Đăng nhập bằng tài khoản mạng xã hội của bạn</p>
                    <div className="flex justify-center space-x-4">
                        <button className="bg-[#3b5998] p-2 rounded-md w-12 h-12 flex items-center justify-center">
                            <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" className="w-8 h-8" />
                        </button>
                        <button className="bg-white p-2 rounded-md w-12 h-12 flex items-center justify-center">
                            <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="Google" className="w-8 h-8" />
                        </button>
                        <button className="bg-white p-2 rounded-md w-12 h-12 flex items-center justify-center">
                            <img src="https://cdn-icons-png.flaticon.com/512/0/747.png" alt="Apple" className="w-8 h-8" />
                        </button>
                    </div>
                </div>

                <p className="text-white text-center mb-4">Đăng nhập bằng email của bạn</p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email */}
                    <div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full p-3 bg-white text-gray-800 rounded"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Mật khẩu"
                            className="w-full p-3 bg-white text-gray-800 rounded"
                            required
                        />
                        <button
                            type="button"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>

                    {/* Remember Me */}
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            name="rememberMe"
                            checked={formData.rememberMe}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <label htmlFor="rememberMe" className="text-white text-sm">
                            Duy trì trạng thái đăng nhập
                        </label>
                    </div>

                    {/* Forgot Password */}
                    <div className="text-right">
                        <a href="#" className="text-blue-300 hover:text-blue-200 text-sm">
                            Bạn quên mật khẩu?
                        </a>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full p-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded transition duration-200"
                        >
                            Đăng nhập
                        </button>
                    </div>

                    {/* Register Link */}
                    <div className="text-center text-white pt-2">
                        <p>
                            Bạn chưa có tài khoản?{" "}
                            <button type="button" onClick={onRegisterClick} className="text-blue-300 hover:text-blue-200">
                                Đăng ký ngay
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
