import { useState } from 'react';
import ArticleDetail from './Product/article-detail';

const Pages = () => {
    const [selectedArticle, setSelectedArticle] = useState(null);

    // Data for main featured article
    const featuredArticle = {
        id: "featured-1",
        image: "https://placeholder.pics/svg/800x400/DEDEDE/555555/Valorant%20Update",
        category: "VALORANT",
        categoryColor: "bg-yellow-500 text-black",
        date: "THÁNG NĂM 2, 2023 07:08",
        title: "Valorant chuẩn bị chào đón nhiều thay đổi quan trọng: Tejo bị nerf, hệ thống replay ra mắt",
        content: "Valorant chuẩn bị chào đón nhiều thay đổi quan trọng trong bản cập nhật sắp tới. Theo thông tin từ Riot Games, đặc vụ Tejo sẽ bị nerf đáng kể, trong khi hệ thống replay được mong đợi từ lâu cuối cùng cũng sẽ ra mắt. Bản cập nhật này dự kiến sẽ làm thay đổi meta hiện tại và mang đến trải nghiệm mới mẻ cho người chơi.",
        author: "VIẾT BỞI MINH",
        readTime: "5 phút đọc"
    };

    // Data for news articles (left column)
    const newsArticles = [
        {
            id: "news-1",
            image: "https://placeholder.pics/svg/300x200/DEDEDE/555555/One%20Piece",
            category: "ANIME/MANGA",
            categoryColor: "bg-blue-600 text-white",
            date: "THÁNG NĂM 1, 2023 19:56",
            title: "One Piece: Năng lực trái ác quỷ của Imu",
            description: "One Piece đã có những hé lộ đầu tiên về trái ác quỷ của Imu.",
            content: "Trong chương mới nhất của One Piece, tác giả Eiichiro Oda đã có những hé lộ đầu tiên về năng lực trái ác quỷ của Imu - nhân vật bí ẩn đứng đầu Chính Phủ Thế Giới. Theo đó, Imu sở hữu một trái ác quỷ hệ Logia cực kỳ mạnh, có khả năng kiểm soát thời gian và không gian. Đây được xem là một trong những năng lực mạnh nhất từng xuất hiện trong series.",
            author: "VIẾT BỞI HÙNG",
            readTime: "4 phút đọc"
        },
        {
            id: "news-2",
            image: "https://placeholder.pics/svg/300x200/DEDEDE/555555/Anime%20News",
            category: "ANIME/MANGA",
            categoryColor: "bg-blue-600 text-white",
            date: "THÁNG NĂM 1, 2023 09:15",
            title: "Tin tức anime mới nhất",
            description: "Cập nhật những tin tức mới nhất về thế giới anime và manga.",
            content: "Tuần qua, làng anime và manga đã chứng kiến nhiều sự kiện đáng chú ý. Bộ anime 'Demon Slayer' công bố sẽ có season mới vào đầu năm sau. 'Jujutsu Kaisen' tiếp tục gây sốt với những tập mới đầy kịch tính. Ngoài ra, tác giả của 'Attack on Titan' đã tiết lộ dự án mới sau khi kết thúc series đình đám của mình. Các fan hâm mộ đang rất háo hức chờ đón những thông tin chi tiết hơn về các dự án này.",
            author: "VIẾT BỞI LINH",
            readTime: "3 phút đọc"
        }
    ];

    // Data for featured news (right column)
    const featuredNews = [
        {
            id: "featured-news-1",
            image: "https://placeholder.pics/svg/150x100/DEDEDE/555555/Demon%20Slayer",
            category: "ANIME/MANGA",
            categoryColor: "text-blue-600",
            title: "Xếp hạng các Đại Trụ trong Demon Slayer: Ai mạnh nhất trong Sát Quỷ Đoàn?",
            content: "Demon Slayer (Kimetsu no Yaiba) là một trong những bộ anime/manga nổi tiếng nhất hiện nay với các nhân vật Đại Trụ vô cùng mạnh mẽ. Bài viết này sẽ xếp hạng sức mạnh của 9 Đại Trụ dựa trên khả năng chiến đấu, kinh nghiệm và thành tích đã được thể hiện trong series. Từ Giyu Tomioka với Hơi Thở của Nước đến Kyojuro Rengoku với Hơi Thở của Lửa, mỗi Đại Trụ đều có những điểm mạnh và phong cách chiến đấu riêng biệt.",
            author: "VIẾT BỞI NAM",
            readTime: "6 phút đọc"
        },
        {
            id: "featured-news-2",
            image: "https://placeholder.pics/svg/150x100/DEDEDE/555555/FC%20Online",
            category: "EA SPORTS FC",
            categoryColor: "text-green-600",
            title: "FC Online: Hướng dẫn chơi đội hình 4-2-2-1-1 phản công siêu nhanh",
            content: "EA Sports FC Online (trước đây là FIFA Online) luôn cập nhật meta mới theo mỗi mùa giải. Hiện tại, đội hình 4-2-2-1-1 đang là một trong những lựa chọn hàng đầu cho lối chơi phản công nhanh. Bài viết này sẽ hướng dẫn chi tiết cách xây dựng và vận hành đội hình này, từ việc chọn cầu thủ phù hợp đến các chiến thuật và hướng dẫn điều khiển để tối ưu hóa hiệu suất tấn công.",
            author: "VIẾT BỞI TUẤN",
            readTime: "7 phút đọc"
        },
        {
            id: "featured-news-3",
            image: "https://placeholder.pics/svg/150x100/DEDEDE/555555/FC%20Online",
            category: "EA SPORTS FC",
            categoryColor: "text-green-600",
            title: "FC Online: Top 5 đội hình phổ biến nhất server Hàn Quốc trong meta 10",
            content: "Server Hàn Quốc của EA Sports FC Online luôn đi đầu trong việc phát triển meta mới. Trong meta 10 hiện tại, có 5 đội hình đang thống trị bảng xếp hạng cao thủ. Bài viết này sẽ phân tích chi tiết từng đội hình, bao gồm sơ đồ chiến thuật, lựa chọn cầu thủ và cách vận hành. Đặc biệt, meta Hàn Quốc đang ưa chuộng lối chơi pressing cao và tấn công nhanh, khác biệt so với meta châu Âu.",
            author: "VIẾT BỞI QUÂN",
            readTime: "5 phút đọc"
        },
        {
            id: "featured-news-4",
            image: "https://placeholder.pics/svg/150x100/DEDEDE/555555/LCK%20Cup",
            category: "LMHT",
            categoryColor: "text-red-600",
            title: "LCK Cup 2025: HLV HLE tin rằng Zeus vẫn 'chưa bung hết sức' trong trận thua trước Gen.G",
            content: "Sau trận thua đáng tiếc trước Gen.G tại LCK Cup 2025, HLV của Hanwha Life Esports đã có những chia sẻ thú vị về Zeus - tuyển thủ đường trên của đội. Theo HLV, Zeus vẫn chưa thể hiện hết khả năng của mình và đang giữ lại những chiến thuật đặc biệt cho giải đấu chính thức sắp tới. Bài viết phân tích chi tiết về phong độ hiện tại của Zeus và tiềm năng của HLE trong mùa giải mới.",
            author: "VIẾT BỞI THÀNH",
            readTime: "4 phút đọc"
        },
        {
            id: "featured-news-5",
            image: "https://placeholder.pics/svg/150x100/DEDEDE/555555/LCK%202025",
            category: "LMHT",
            categoryColor: "text-red-600",
            title: "Danh sách đầy đủ các đội tham dự LCK 2025: Đâu là ứng viên sáng giá cho chức vô địch?",
            content: "LCK 2025 đang đến gần với sự tham gia của 10 đội tuyển hàng đầu Hàn Quốc. Bài viết này sẽ giới thiệu đầy đủ danh sách các đội tham dự, phân tích thay đổi về đội hình và đánh giá cơ hội vô địch của từng đội. T1 vẫn được đánh giá cao với đội hình ổn định, trong khi Gen.G và Hanwha Life Esports cũng là những ứng cử viên sáng giá sau khi có những bổ sung quan trọng trong kỳ chuyển nhượng.",
            author: "VIẾT BỞI LONG",
            readTime: "8 phút đọc"
        }
    ];

    // Handle article click
    const handleArticleClick = (article) => {
        setSelectedArticle(article);
        window.scrollTo(0, 0);
    };

    // Handle back to home
    const handleBackToHome = () => {
        setSelectedArticle(null);
    };

    // If an article is selected, show the detail page
    if (selectedArticle) {
        return <ArticleDetail article={selectedArticle} onBack={handleBackToHome} />;
    }

    return (
        <main className="min-h-screen bg-white max-w-full w-[1350px] mx-auto">
            {/* Main Content */}
            <div className="container mx-auto px-4 py-8 mt-20">
                {/* Featured Article */}
                <div className="mb-12">
                    <div className="relative cursor-pointer" onClick={() => handleArticleClick(featuredArticle)}>
                        <img
                            src={featuredArticle.image || "/placeholder.svg"}
                            alt={featuredArticle.title}
                            className="w-full h-[400px] object-cover rounded-lg"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                            <div className="flex items-center mb-2">
                                <span className={`${featuredArticle.categoryColor} text-xs font-bold px-2 py-1 mr-2 rounded`}>
                                    {featuredArticle.category}
                                </span>
                                <span className="text-xs text-gray-300">{featuredArticle.date}</span>
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-2">
                                {featuredArticle.title}
                            </h2>
                        </div>
                    </div>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - News Articles */}
                    <div className="lg:col-span-2 space-y-8">
                        {newsArticles.map((article, index) => (
                            <article
                                key={article.id}
                                className="flex flex-col md:flex-row gap-4 hover:bg-gray-50 p-2 rounded-lg transition-colors cursor-pointer"
                                onClick={() => handleArticleClick(article)}
                            >
                                <div className="md:w-1/3">
                                    <img
                                        src={article.image || "/placeholder.svg"}
                                        alt={article.title}
                                        className="w-full h-auto object-cover rounded-lg"
                                    />
                                </div>
                                <div className="md:w-2/3">
                                    <div className="flex items-center mb-2">
                                        <span className={`${article.categoryColor} text-xs font-bold px-2 py-1 mr-2 rounded`}>
                                            {article.category}
                                        </span>
                                        <span className="text-xs text-gray-500">{article.date}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                                    <p className="text-gray-500">{article.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Right Column - Featured News */}
                    <div className="lg:col-span-1">
                        <div className="mb-6 bg-gray-50 p-4 rounded-lg">
                            <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-4">TIN NỔI BẬT</h2>

                            <div className="space-y-6">
                                {featuredNews.map((news, index) => (
                                    <article
                                        key={news.id}
                                        className="flex gap-4 hover:bg-white p-2 rounded transition-colors cursor-pointer"
                                        onClick={() => handleArticleClick(news)}
                                    >
                                        <div className="w-1/3">
                                            <img
                                                src={news.image || "/placeholder.svg"}
                                                alt={news.title}
                                                className="w-full h-auto object-cover rounded"
                                            />
                                        </div>
                                        <div className="w-2/3">
                                            <span className={`text-xs font-bold ${news.categoryColor} block mb-1`}>
                                                {news.category}
                                            </span>
                                            <h3 className="text-sm font-bold">{news.title}</h3>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Pages;