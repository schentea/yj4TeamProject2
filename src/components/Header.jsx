export default function Header() {
    return (
        <div className="w-full h-screen bg-cover relative bg-center flex justify-center items-center bg-[url('https://pixabay.com/get/gf39b171dcbfc47b8b79834f850b9c821369ded5b7e297c5c8f05c9ec0b4a0a257ac176513de2bfc6b31394a50015155b.jpg')]">
            {/* 나브 */}
            <nav
                id="container"
                className="w-full h-10 max-w-[1400px] absolute top-0  bg-gray-400 flex justify-between items-center"
            >
                {/* 로고 */}
                <div>로고</div>
                {/* GNB 메뉴 */}
                <div>
                    <ul className="flex gap-6">
                        <li>메뉴</li>
                        <li>메뉴</li>
                        <li>메뉴</li>
                        <li>메뉴</li>
                    </ul>
                </div>
                {/* 로그인/회원가입 */}
                <div>
                    <ul className="flex gap-6">
                        <li>로그인</li>
                        <li>회원가입</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
