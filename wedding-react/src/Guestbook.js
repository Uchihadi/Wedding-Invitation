import "./App.css";

function Guestbook () {
    return (
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
            <option value="hadir" >Attending</option>
            <option value="tidak_hadir">Won't be Attending</option>
          </select>

          <div className="btn">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
    )
}

export default Guestbook;