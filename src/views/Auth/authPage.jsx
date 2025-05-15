"use client"

import { useState } from "react"
import { Eye, EyeOff, X } from "lucide-react"
import AuthService from "../../services/auth.js"// Đảm bảo đường dẫn đúng với cấu trúc dự án

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
    const [message, setMessage] = useState("")
    const [successful, setSuccessful] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        setMessage("")
        setSuccessful(false)

        if (formData.password !== formData.confirmPassword) {
            setMessage("Mật khẩu không khớp")
            return
        }

        try {
            const response = await AuthService.register(
                formData.username,
                formData.email,
                formData.password
            )
            setMessage(response.data.message || "Đăng ký thành công!")
            setSuccessful(true)
            onClose()
        } catch (error) {
            const resMessage =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString()

            setMessage(resMessage)
            setSuccessful(false)
        }
    }

    return (
        <div className="relative bg-gradient-to-br from-blue-900 to-black rounded-lg overflow-hidden">
            {/* Close button */}
            <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-gray-300 z-10">
                <X size={20} />
            </button>

            <div className="p-8">
                <div className="flex justify-center mb-6">
                    <img
                        src="https://cdn.oneesports.vn/cdn-data/wp-content/themes/oneesports/img/oneesports-logo-white.svg"
                        alt="ONE ESPORTS"
                        className="h-16"
                    />
                </div>

                <p className="text-white text-center mb-4">Đăng ký bằng email của bạn</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full p-3 bg-white text-gray-800 rounded"
                        required
                    />

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

                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Tên đăng nhập"
                        className="w-full p-3 bg-white text-gray-800 rounded"
                        required
                    />

                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Họ và tên"
                        className="w-full p-3 bg-white text-gray-800 rounded"
                    />

                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Số điện thoại"
                        className="w-full p-3 bg-white text-gray-800 rounded"
                    />

                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full p-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded transition duration-200"
                        >
                            Đăng ký
                        </button>
                    </div>

                    <div className="text-center text-white pt-2">
                        <p>
                            Đã có tài khoản?{" "}
                            <button type="button" onClick={onLoginClick} className="text-blue-300 hover:text-blue-200">
                                Đăng nhập
                            </button>
                        </p>
                    </div>

                    {message && (
                        <div className={`text-sm mt-2 ${successful ? "text-green-400" : "text-red-400"}`}>
                            {message}
                        </div>
                    )}
                </form>
            </div>
        </div>
    )
}

export default AuthPage
