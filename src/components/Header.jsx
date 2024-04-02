export default function Header() {
    return (
        <div className="w-full h-screen bg-cover relative bg-center flex justify-center items-center bg-[url('https://pixabay.com/get/g99e2749571e75b6320c34147d775d74ad3bd6d8f64900ed82cfd180405f95adea2859bcb7c028692817a8c3b8cb883fa.jpg')]">
            {/* 나브 */}
            <nav
                id="container"
                className="w-full h-10 max-w-[1600px] absolute top-0  bg-gray-400 flex justify-between items-center"
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
