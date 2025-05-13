"use client"

import { useState } from "react"
import { Eye, EyeOff, X } from "lucide-react"

const AuthPage = ({ onClose, onLoginClick }) => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        username: "",
        fullName: "",
        phoneNumber: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        // Add your form submission logic here
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
                <p className="text-white text-center mb-4">Đăng ký bằng email của bạn</p>

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
                            placeholder="Mật khẩu mới"
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

                    {/* Confirm Password */}
                    <div className="relative">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Nhập lại mật khẩu mới"
                            className="w-full p-3 bg-white text-gray-800 rounded"
                            required
                        />
                        <button
                            type="button"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>

                    {/* Username */}
                    <div>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Tên đăng nhập"
                            className="w-full p-3 bg-white text-gray-800 rounded"
                            required
                        />
                    </div>

                    {/* Full Name */}
                    <div>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Họ và tên"
                            className="w-full p-3 bg-white text-gray-800 rounded"
                            required
                        />
                    </div>

                    {/* Phone Number */}
                    <div>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="Số điện thoại"
                            className="w-full p-3 bg-white text-gray-800 rounded"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full p-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded transition duration-200"
                        >
                            Đăng ký
                        </button>
                    </div>

                    {/* Login Link */}
                    <div className="text-center text-white pt-2">
                        <p>
                            Đã có tài khoản?{" "}
                            <button type="button" onClick={onLoginClick} className="text-blue-300 hover:text-blue-200">
                                Đăng nhập
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AuthPage
