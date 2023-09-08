import "./App.css";

function Header () {
    return (
        <nav className="navbar">
            <div className="navbar_wrapper">
                <h1 className="brand">Nurhadi & Nurdiyahnah</h1>
                <menu className="navbar_menu">
                {/* <a href="#akad">Solemnisation</a>
                <a href="#resepsi">Reception</a> */}
                <a href="#buku_tamu ">Guestbook</a>
                <a href="#map">Map</a>
                <a href="#gallery">Gallery</a>
                </menu>
            </div>
        </nav>
    )
}

export default Header;

