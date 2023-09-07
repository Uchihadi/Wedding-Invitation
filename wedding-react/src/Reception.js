import "./App.css";

function Reception () {
    return (
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
      <img 
      className="bouquet2"
      src="https://cdn.pixabay.com/photo/2016/06/27/14/42/flowers-1482644_960_720.png"
      alt=""
        />
    </section>
    
    )
}

export default Reception;