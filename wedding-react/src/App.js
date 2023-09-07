import logo from './logo.svg';
import './App.css';
import './index.css'
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { FaShareNodes } from "react-icons/fa6";

function App() {
  return (
    <>
    <body>
      {/* NAVBAR */}
      <nav className="navbar">
      <div className="navbar_wrapper">
        <h1 className="brand">Nurhadi & Nurdiyahnah</h1>
        <menu className="navbar_menu">
          <a href="#akad">Solemnisation</a>
          <a href="#resepsi">Reception</a>
          <a href="#buku_tamu ">Guestbook</a>
          <a href="#map">Map</a>
          <a href="#gallery">Gallery</a>
        </menu>
      </div>
      </nav>

      {/* TITLE */}
      <div className="hero">
        <h2>The Wedding Of</h2>
        <h1>Nurhadi & Nurdiyahnah</h1>
        <h3>Saturday, 23 December 2023</h3>
      </div>

      {/* SOLEMNISATION */}
      <section id="akad">
      <div className="bingkai">
        <div className="line"></div>
        <h1>Solemnisation</h1>
        <div className="line"></div>
      </div>
      <div className="section_wrap wrap">
        <div className="section_container_akad container">
          <h3>Saturday, 23 December 2023</h3>
          <h3>Time: 1100</h3>
          <h4>Bijan B'Majestic, Grandlink Square, 511 Guillemard Road</h4>
          <h4>Singapore</h4>
        </div>
        <section className="akad_img"></section>
      </div>
      </section>
      <div className="bouquet_container">
        <img
          className="bouquet"
          src="https://cdn.pixabay.com/photo/2020/09/01/18/13/background-5535928_960_720.png"
          alt=""
        />
      </div>

      {/* RECEPTION */}
      <section id="resepsi">
      <div className="bingkai">
        <div className="line"></div>
        <h1>Reception</h1>
        <div className="line"></div>
      </div>
      <div className="section_wrap wrap">
        <section className="resepsi_img"></section>
        <div className="section_container_resepsi">
          <h3>Saturday, 23 December 2023</h3>
          <h3>Time: 1200</h3>
          <h4>Bijan B'Majestic, Grandlink Square, 511 Guillemard Road</h4>
          <h4>Singapore</h4>
        </div>
      </div>
    </section>
    <img 
      className="bouquet2"
      src="https://cdn.pixabay.com/photo/2016/06/27/14/42/flowers-1482644_960_720.png"
      alt=""
    />

    {/* GUEST BOOK */}
    <section id="buku_tamu">
      <div className="bingkai">
        <div className="line"></div>
        <h1>Guestbook</h1>
        <div className="line"></div>
      </div>
      <div className="buku_tamu_container">
        <form action="">
          <input required type="text" placeholder="Name" />
          <textarea
            name="Well Wishes"
            placeholder="Please write your well wishes here!"
            cols="30"
            rows="8"
          ></textarea>
          <select name="kehadiran">
            <option value="hadir">Attending</option>
            <option value="tidak_hadir">Won't be Attending</option>
          </select>

          <div className="btn">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>

    {/* GOOGLE MAP */}
    <section id="map">
      <div className="bingkai">
        <div className="line"></div>
        <h1>Map</h1>
        <div className="line"></div>
      </div>
      <div className="section_wrap wrap">
        <div className="section_container_map">
          <button className="map_list">
            <span className="material-symbols-outlined"> <FaLocationDot/> </span>
            Wedding Location
          </button>
          <button className="map_list">
            <span className="material-symbols-outlined"> <FaRegCalendarCheck/> </span>
            Save The Calendar
          </button>
          <button className="map_list">
            <span className="material-symbols-outlined"> <FaShareNodes/> </span>
            Share On Instagram
          </button>
        </div>
        <section className="map_img">
          <iframe
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJBe1nR0QEBBARewvYudV7Yww&key=AIzaSyBExIl5Az1PFZWB47BdeG2qQh_uDymbDYU"
            width="600"
            height="350"
            // style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </div>
    </section>

    {/* FOOTER */}
    <footer>
      <p>Design By</p>
      <h3>Rohmat Sidiq Mustaqim</h3>
    </footer>
    </body>
    </>
   
  );
}

export default App;
