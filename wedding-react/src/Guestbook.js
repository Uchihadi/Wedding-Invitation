import axios from "axios";
import "./App.css";
import { useState } from 'react';

function Guestbook() {
  const [name, setName] = useState("");
  const [wishes, setWishes] = useState("");
  const [attendingValue, setAttendingValue] = useState("1");
  const [email, setEmail] = useState("");

  const attend = [
    { value: "1", text: "Attending" },
    { value: "0", text: "Not Attending" }
  ]

  const options = attend.map((option) => {
    return <option value={option.value}>{option.text}</option>
  })

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body= {
        name: name,
        wishes: wishes,
        attendingValue: attendingValue,
        email: email
      }
    
    setName ('');
    setEmail ('');
    setWishes ('');
    setAttendingValue(1);

  try {
    const {data} =await axios.post("http://localhost:5000/success",body)
    return data;
  } catch (e) {
    return e;
  }

};

return (
  <section id="buku_tamu">
    <div className="bingkai">
      <div className="line"></div>
      <h1>Guestbook</h1>
      <div className="line"></div>
    </div>
    <div className="buku_tamu_container">

      <form onSubmit={handleSubmit}>

        {/* <label> Name </label> */}
        <input required type="text" placeholder="Name" value={name}
          onChange={(e) => setName(e.target.value)} />
        
        <input required type="text" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} />

        {/* <label> Well Wishes </label> */}
        <textarea
          name="Well Wishes"
          placeholder="Please write your well wishes here!"
          cols="30" rows="8"
          value={wishes}
          onChange={(e) => setWishes(e.target.value)}
        ></textarea>

        {/* <label> Attendance </label> */}
        <select name="kehadiran" value={attendingValue} onChange={(e) => setAttendingValue(e.target.value)}>
          {options}
        </select>

        <div className="btn">
          <button type="submit"
          // style={{background : loader ? "#ccc" : " rgb(2, 2, 110) " }}
          >Submit</button>
        </div>

      </form>
    </div>
  </section>
)
}

export default Guestbook;