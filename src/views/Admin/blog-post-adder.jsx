"use client"

import { useState, useEffect } from "react"

function BlogPostAdder() {
    // State for form inputs
    const [title, setTitle] = useState("")
    const [slug, setSlug] = useState("")
    const [excerpt, setExcerpt] = useState("")
    const [content, setContent] = useState("")
    const [thumbnailUrl, setThumbnailUrl] = useState("")
    const [status, setStatus] = useState("published")
    const [categoryId, setCategoryId] = useState("")
    const [staffId, setStaffId] = useState("")

    // State for API data
    const [categories, setCategories] = useState([])
    const [authors, setAuthors] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState({ text: "", type: "" })

    // Generate slug from title
    useEffect(() => {
        const generatedSlug = title
            .toLowerCase()
            .replace(/[^\w\s]/gi, "")
            .replace(/\s+/g, "-")

        setSlug(generatedSlug)
    }, [title])

    // Fetch categories and authors on component mount
    useEffect(() => {
        // Mock data for categories and authors
        // In a real application, you would fetch these from your API
        setCategories([
            { categoryId: 1, name: "Tin tức" },
            { categoryId: 2, name: "Kinh tế" },
            { categoryId: 3, name: "Công nghệ" },
            { categoryId: 4, name: "Thể thao" },
        ])

        setAuthors([
            { staffId: 1, name: "Nguyễn Văn A" },
            { staffId: 2, name: "Trần Thị B" },
            { staffId: 3, name: "Lê Văn C" },
        ])
    }, [])

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setMessage({ text: "", type: "" })

        try {
            // Create article object matching the API structure
            const articleData = {
                title,
                slug,
                excerpt,
                content,
                thumbnailUrl,
                publishedAt: new Date().toISOString(),
                status,
                viewCount: 0,
                author: {
                    staffId: Number.parseInt(staffId),
                },
                category: {
                    categoryId: Number.parseInt(categoryId),
                },
            }

            // Send POST request to API
            const response = await fetch("http://localhost:8080/api/articles", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(articleData),
            })

            if (!response.ok) {
                throw new Error(`API error: ${response.status}`)
            }

            // eslint-disable-next-line no-unused-vars
            const data = await response.json()

            // Reset form fields on success
            setTitle("")
            setSlug("")
            setExcerpt("")
            setContent("")
            setThumbnailUrl("")
            setStatus("published")
            setCategoryId("")
            setStaffId("")

            setMessage({
                text: "Bài viết đã được tạo thành công!",
                type: "success",
            })
        } catch (error) {
            console.error("Error creating article:", error)
            setMessage({
                text: `Lỗi khi tạo bài viết: ${error.message}`,
                type: "error",
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="max-w-4xl mx-auto p-6 mt-20">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Thêm Bài Viết Mới</h1>

            {message.text && (
                <div
                    className={`p-4 mb-6 rounded-md ${message.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                >
                    {message.text}
                </div>
            )}

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col-span-2">
                            <label htmlFor="title" className="block font-medium mb-1 text-gray-700">
                                Tiêu đề:
                            </label>
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div className="col-span-2">
                            <label htmlFor="slug" className="block font-medium mb-1 text-gray-700">
                                Slug:
                            </label>
                            <input
                                type="text"
                                id="slug"
                                value={slug}
                                onChange={(e) => setSlug(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <p className="text-sm text-gray-500 mt-1">Tự động tạo từ tiêu đề, có thể chỉnh sửa.</p>
                        </div>

                        <div className="col-span-2">
                            <label htmlFor="excerpt" className="block font-medium mb-1 text-gray-700">
                                Tóm tắt:
                            </label>
                            <textarea
                                id="excerpt"
                                value={excerpt}
                                onChange={(e) => setExcerpt(e.target.value)}
                                rows="2"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div className="col-span-2">
                            <label htmlFor="content" className="block font-medium mb-1 text-gray-700">
                                Nội dung:
                            </label>
                            <textarea
                                id="content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                rows="8"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                                placeholder="<p>Nội dung HTML của bài viết...</p>"
                            />
                        </div>

                        <div className="col-span-2">
                            <label htmlFor="thumbnailUrl" className="block font-medium mb-1 text-gray-700">
                                URL Hình ảnh:
                            </label>
                            <input
                                type="url"
                                id="thumbnailUrl"
                                value={thumbnailUrl}
                                onChange={(e) => setThumbnailUrl(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="https://example.com/images/thumbnail.jpg"
                                required
                            />
                            {thumbnailUrl && (
                                <div className="mt-2">
                                    <p className="text-sm text-gray-600 mb-1">Xem trước:</p>
                                    <img
                                        src={thumbnailUrl || "/placeholder.svg"}
                                        alt="Xem trước hình ảnh"
                                        className="h-40 object-cover rounded-md border border-gray-200"
                                        onError={(e) => {
                                            e.target.onerror = null
                                            e.target.src = "/placeholder.svg?height=160&width=320"
                                        }}
                                    />
                                </div>
                            )}
                        </div>

                        <div>
                            <label htmlFor="category" className="block font-medium mb-1 text-gray-700">
                                Danh mục:
                            </label>
                            <select
                                id="category"
                                value={categoryId}
                                onChange={(e) => setCategoryId(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            >
                                <option value="">-- Chọn danh mục --</option>
                                {categories.map((category) => (
                                    <option key={category.categoryId} value={category.categoryId}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="author" className="block font-medium mb-1 text-gray-700">
                                Tác giả:
                            </label>
                            <select
                                id="author"
                                value={staffId}
                                onChange={(e) => setStaffId(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            >
                                <option value="">-- Chọn tác giả --</option>
                                {authors.map((author) => (
                                    <option key={author.staffId} value={author.staffId}>
                                        {author.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="status" className="block font-medium mb-1 text-gray-700">
                                Trạng thái:
                            </label>
                            <select
                                id="status"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            >
                                <option value="published">Đã xuất bản</option>
                                <option value="draft">Bản nháp</option>
                                <option value="pending">Chờ duyệt</option>
                            </select>
                        </div>

                        <div className="col-span-2">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`w-full bg-blue-500 text-white px-4 py-3 rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
                            >
                                {isLoading ? "Đang xử lý..." : "Thêm bài viết"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Lưu ý:</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Tiêu đề nên ngắn gọn, hấp dẫn và mô tả chính xác nội dung bài viết.</li>
                    <li>Slug sẽ được tự động tạo từ tiêu đề, bạn có thể chỉnh sửa nếu cần.</li>
                    <li>Tóm tắt nên có độ dài khoảng 150-200 ký tự.</li>
                    <li>Nội dung hỗ trợ định dạng HTML.</li>
                    <li>Hình ảnh nên có tỷ lệ 16:9 và kích thước tối thiểu 1200x675 pixel.</li>
                </ul>
            </div>
        </div>
    )
}

export default BlogPostAdder