import logo from './logo.svg';
import './App.css';
import './index.css';
import Navbar from './Navbar';
import Title from './Title';
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { FaShareNodes } from "react-icons/fa6";
import Solemnisation from './Solemnisation';
import Reception from './Reception';
import Guestbook from './Guestbook';

function App() {
  return (
    <>
    <body>
      <Navbar/>
      <Title/>
      <Solemnisation/>
      <Reception/>
      <Guestbook/>

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
      <h3>Nurhadi Bin Abdul Rahman</h3>
    </footer>
    </body>
    </>
   
  );
}

export default App;
