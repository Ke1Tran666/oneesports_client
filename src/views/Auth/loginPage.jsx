"use client"

import { useState } from "react"
import { Eye, EyeOff, X } from "lucide-react"
import AuthService from "../../services/auth.js"

const LoginPage = ({ onClose, onRegisterClick }) => {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false,
    })
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setMessage("")
        setLoading(true)

        try {
            await AuthService.login(formData.email, formData.password)
            window.location.reload() // hoặc redirect bằng router nếu bạn dùng Next.js/React Router
        } catch (error) {
            const resMessage =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            setMessage(resMessage)
            setLoading(false)
        }
    }

    return (
        <div className="relative bg-gradient-to-br from-blue-900 to-black rounded-lg overflow-hidden">
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

                <div className="mb-6">
                    <p className="text-white text-center mb-4">Đăng nhập bằng tài khoản mạng xã hội của bạn</p>
                    <div className="flex justify-center space-x-4">
                        {/* Social icons omitted for brevity */}
                    </div>
                </div>

                <p className="text-white text-center mb-4">Đăng nhập bằng email của bạn</p>

                <form onSubmit={handleSubmit} className="space-y-4">
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

                    <div className="text-right">
                        <a href="#" className="text-blue-300 hover:text-blue-200 text-sm">
                            Bạn quên mật khẩu?
                        </a>
                    </div>

                    {message && (
                        <div className="text-red-400 text-sm text-center">{message}</div>
                    )}

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full p-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded transition duration-200"
                        >
                            {loading ? "Đang đăng nhập..." : "Đăng nhập"}
                        </button>
                    </div>

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