import {Link} from "react-router-dom";


export default function Header(){


    return(
        <div>
            <header className="border-bottom border-light border-5 mb-5 p-2">
                <div className="container">
                    <div className="row">
                        <nav className="navbar navbar-expand-lg">
                            <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="/welcome/gtt">Logo</a>
                            <div className="collapse navbar-collapse">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/welcome/gyun">Home</Link></li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/todos">웨딩 A ~ Z 까지</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">웨딩 시작하기</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">커뮤니티</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">고객센터</Link>
                                    </li>
                                </ul>
                            </div>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">내정보</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">장바구니</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/logout">Logout</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    )
}