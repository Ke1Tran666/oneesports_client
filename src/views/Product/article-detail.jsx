import { Facebook, Twitter, Share2, Link, ArrowLeft } from 'lucide-react';

const ArticleDetail = ({ article, onBack }) => {
    if (!article) return null;

    // Function to handle copying the article link
    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
    };

    return (
        <div className="min-h-screen bg-white max-w-full w-[1350px] mx-auto">
            <div className="container mx-auto px-4 py-8 mt-20">
                {/* Breadcrumb */}
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center text-sm">
                        <button onClick={onBack} className="text-blue-600 hover:underline flex items-center">
                            <ArrowLeft size={16} className="mr-1" />
                            TRANG CHỦ
                        </button>
                        <span className="mx-2">›</span>
                        <span className="text-blue-600">{article.category}</span>
                    </div>
                </div>

                {/* Article Content */}
                <div className="container mx-auto px-4 py-4">
                    {/* Reading time */}
                    <div className="text-gray-500 text-sm mb-4">
                        <span className="bg-gray-100 px-2 py-1 rounded">{article.readTime || "3 phút đọc"}</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>

                    {/* Subtitle */}
                    <p className="text-xl mb-6">{article.description || `Tiền thưởng "khủng" chưa từng thấy.`}</p>

                    {/* Author and date */}
                    <div className="flex items-center mb-4">
                        <span className="text-gray-700 mr-2">{article.author || "VIẾT BỞI TY"}</span>
                        <span className="text-gray-500">{article.date}</span>
                    </div>

                    {/* Share buttons with lucide-react icons */}
                    <div className="flex items-center space-x-4 mb-6">
                        <span className="font-bold">CHIA SẺ BÀI VIẾT</span>
                        <a href="#" className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-full hover:bg-blue-700 transition-colors">
                            <Facebook size={18} />
                        </a>
                        <a href="#" className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full hover:bg-gray-800 transition-colors">
                            <Twitter size={18} />
                        </a>
                        <a href="#" className="w-8 h-8 bg-red-500 text-white flex items-center justify-center rounded-full hover:bg-red-600 transition-colors">
                            <Share2 size={18} />
                        </a>
                        <button
                            onClick={handleCopyLink}
                            className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded-full hover:bg-gray-300 transition-colors"
                        >
                            <Link size={18} />
                        </button>
                    </div>

                    {/* Featured Image */}
                    <div className="mb-8">
                        <img
                            src={article.image.replace('150x100', '800x400').replace('300x200', '800x400') || "/placeholder.svg"}
                            alt={article.title}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>

                    {/* Article Content */}
                    <div className="prose max-w-none mb-12">
                        <p className="text-lg leading-relaxed mb-6">{article.content}</p>

                        {/* Adding some dummy paragraphs to make the article look more complete */}
                        <p className="text-lg leading-relaxed mb-6">
                            Đây là một trong những sự kiện được mong đợi nhất trong cộng đồng game thủ.
                            Với sự tham gia của các đội tuyển hàng đầu từ khắp nơi trên thế giới, giải đấu
                            hứa hẹn sẽ mang đến những trận đấu đỉnh cao và gay cấn.
                        </p>

                        <p className="text-lg leading-relaxed mb-6">
                            Các chuyên gia đã đưa ra nhiều nhận định và dự đoán về kết quả của giải đấu.
                            Tuy nhiên, với sự cạnh tranh khốc liệt giữa các đội tuyển, rất khó để đưa ra
                            một dự đoán chính xác. Chúng ta hãy cùng chờ đợi và theo dõi các trận đấu để
                            biết đội nào sẽ giành chiến thắng cuối cùng.
                        </p>
                    </div>

                    {/* Tags */}
                    <div className="mb-8">
                        <span className="font-bold mr-2">Tags:</span>
                        <a href="#" className="bg-gray-200 px-3 py-1 rounded mr-2 hover:bg-gray-300">{article.category}</a>
                        <a href="#" className="bg-gray-200 px-3 py-1 rounded mr-2 hover:bg-gray-300">Esports</a>
                        <a href="#" className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">Gaming</a>
                    </div>

                    {/* Back button */}
                    <div className="mb-12">
                        <button
                            onClick={onBack}
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors flex items-center"
                        >
                            <ArrowLeft size={18} className="mr-2" />
                            Quay lại trang chủ
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ArticleDetail;