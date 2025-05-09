import { SiteHeader, SiteNavigation } from '../layouts/import-layout.jsx'

const Pages = () => {
    return (
        <main className="min-h-screen bg-white w-auto max-w-full">
            <div className='fixed top-0 left-0 right-0 z-50 bg-white custom-shadow'>
                {/* Top Navigation */}
                <SiteHeader />

                {/* Secondary Navigation */}
                <SiteNavigation />
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8 mt-20">
                {/* Featured Article */}
                <div className="mb-12">
                    <div className="relative">
                        <a href="#">
                            <img
                                src="https://placeholder.pics/svg/800x400/DEDEDE/555555/Valorant%20Update"
                                alt="Valorant update"
                                className="w-full h-[400px] object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                                <div className="flex items-center mb-2">
                                    <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 mr-2">VALORANT</span>
                                    <span className="text-xs text-gray-300">THÁNG NĂM 2, 2023 07:08</span>
                                </div>
                                <h2 className="text-2xl font-bold">
                                    Valorant chuẩn bị chào đón nhiều thay đổi quan trọng: Tejo bị nerf, hệ thống replay ra mắt
                                </h2>
                            </div>
                        </a>
                    </div>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - News Articles */}
                    <div className="lg:col-span-2 space-y-8">
                        <article className="flex flex-col md:flex-row gap-4">
                            <div className="md:w-1/3">
                                <img
                                    src="https://placeholder.pics/svg/300x200/DEDEDE/555555/One%20Piece"
                                    alt="One Piece"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <div className="md:w-2/3">
                                <div className="flex items-center mb-2">
                                    <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 mr-2">ANIME/MANGA</span>
                                    <span className="text-xs text-gray-300">THÁNG NĂM 1, 2023 19:56</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2">One Piece: Năng lực trái ác quỷ của Imu</h3>
                                <p className="text-gray-300">One Piece đã có những hé lộ đầu tiên về trái ác quỷ của Imu.</p>
                            </div>
                        </article>

                        <article className="flex flex-col md:flex-row gap-4">
                            <div className="md:w-1/3">
                                <img
                                    src="https://placeholder.pics/svg/300x200/DEDEDE/555555/Anime%20News"
                                    alt="Anime news"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <div className="md:w-2/3">
                                <div className="flex items-center mb-2">
                                    <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 mr-2">ANIME/MANGA</span>
                                    <span className="text-xs text-gray-300">THÁNG NĂM 1, 2023 09:15</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Tin tức anime mới nhất</h3>
                                <p className="text-gray-300">Cập nhật những tin tức mới nhất về thế giới anime và manga.</p>
                            </div>
                        </article>
                    </div>

                    {/* Right Column - Featured News */}
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <h2 className="text-xl font-bold border-b border-gray-700 pb-2 mb-4">TIN NỔI BẬT</h2>

                            <div className="space-y-6">
                                <article className="flex gap-4">
                                    <div className="w-1/3">
                                        <img
                                            src="https://placeholder.pics/svg/150x100/DEDEDE/555555/Demon%20Slayer"
                                            alt="Demon Slayer"
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                    <div className="w-2/3">
                                        <span className="text-xs font-bold text-blue-600 block mb-1">ANIME/MANGA</span>
                                        <h3 className="text-sm font-bold">
                                            Xếp hạng các Đại Trụ trong Demon Slayer: Ai mạnh nhất trong Sát Quỷ Đoàn?
                                        </h3>
                                    </div>
                                </article>

                                <article className="flex gap-4">
                                    <div className="w-1/3">
                                        <img
                                            src="https://placeholder.pics/svg/150x100/DEDEDE/555555/FC%20Online"
                                            alt="FC Online"
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                    <div className="w-2/3">
                                        <span className="text-xs font-bold text-blue-600 block mb-1">EA SPORTS FC</span>
                                        <h3 className="text-sm font-bold">
                                            FC Online: Hướng dẫn chơi đội hình 4-2-2-1-1 phản công siêu nhanh
                                        </h3>
                                    </div>
                                </article>

                                <article className="flex gap-4">
                                    <div className="w-1/3">
                                        <img
                                            src="https://placeholder.pics/svg/150x100/DEDEDE/555555/FC%20Online"
                                            alt="FC Online"
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                    <div className="w-2/3">
                                        <span className="text-xs font-bold text-blue-600 block mb-1">EA SPORTS FC</span>
                                        <h3 className="text-sm font-bold">
                                            FC Online: Top 5 đội hình phổ biến nhất server Hàn Quốc trong meta 10
                                        </h3>
                                    </div>
                                </article>

                                <article className="flex gap-4">
                                    <div className="w-1/3">
                                        <img
                                            src="https://placeholder.pics/svg/150x100/DEDEDE/555555/LCK%20Cup"
                                            alt="LCK Cup"
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                    <div className="w-2/3">
                                        <span className="text-xs font-bold text-blue-600 block mb-1">LMHT</span>
                                        <h3 className="text-sm font-bold">
                                            LCK Cup 2025: HLV HLE tin rằng Zeus vẫn 'chưa bung hết sức' trong trận thua trước Gen.G
                                        </h3>
                                    </div>
                                </article>

                                <article className="flex gap-4">
                                    <div className="w-1/3">
                                        <img
                                            src="https://placeholder.pics/svg/150x100/DEDEDE/555555/LCK%202025"
                                            alt="LCK 2025"
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                    <div className="w-2/3">
                                        <span className="text-xs font-bold text-blue-600 block mb-1">LMHT</span>
                                        <h3 className="text-sm font-bold">
                                            Danh sách đầy đủ các đội tham dự LCK 2025: Đâu là ứng viên sáng giá cho chức vô địch?
                                        </h3>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default Pages