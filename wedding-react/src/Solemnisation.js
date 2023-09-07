import "./App.css";

function Solemnisation () {
    return (
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
          {/* <h4>Singapore</h4> */}
        </div>
        <section className="akad_img"></section>
      </div>
      <div className="bouquet_container">
        <img
          className="bouquet"
          src="https://cdn.pixabay.com/photo/2020/09/01/18/13/background-5535928_960_720.png"
          alt=""
        />
      </div>
    </section>
    )
}

export default Solemnisation;