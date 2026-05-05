function Nav() {
    return (
        <nav>
            <div className="navbar-left">
                <a href="#">
                    <img src="./little-lemon-app/public/Logo.svg" alt="Little Lemon Logo"></img>
                </a>
            </div>
            <div className="navbar-right">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Menu</a>
                    </li>
                    <li>
                        <a href="#">Reservations</a>
                    </li>
                    <li>
                        <a href="#">Order Online</a>
                    </li>
                    <li>
                        <a href="#">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;