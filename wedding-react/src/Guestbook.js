import "./App.css";
import db from "./firebase";
import { useEffect, useState } from 'react';
// import { onSnapshot, collection } from "firebase/firestore";

function Guestbook () {
  const [name, setName] = useState("");
  const [wishes, setWishes] = useState("");
  const [attendingValue, setAttendingValue] = useState("");
  const [loader, setLoader] = useState(false);

  const attend = [
    {value : "0", text: "Attending"},
    {value : "1", text: "Not Attending"}
  ]

  const options = attend.map((option) => {
    return <option value={option.value}>{option.text}</option>
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    // setLoader(true);

    db.collection('weddings').add({
      name : name,
      wishes : wishes,
      attendingValue: attendingValue
    })
    .then (() => {
      alert('Attendance have been submitted 😊');
      setLoader(false);
    })
    .catch (error => {
      alert (error.message);
      setLoader(false);
    });

    setName('');
    setWishes('');
    setAttendingValue('');
  };

  // const [wedding, setWedding] = useState ([]);

  // console.log(wedding);

  // useEffect(() => 
  //   onSnapshot(collection(db, "wedding") ,(snapshot) => 
  //     setWedding(snapshot.docs.map((doc) => doc.data()))
  //   )
  // , []);

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
          
          {/* <label> Well Wishes </label> */}
          <textarea
            name="Well Wishes"
            placeholder="Please write your well wishes here!"
            cols="30" rows="8"
            value = {wishes}
            onChange={(e) => setWishes(e.target.value)}
          ></textarea>
          
          {/* <label> Attendance </label> */}
          <select name="kehadiran" value={attendingValue} onChange={(e) => setAttendingValue(e.target.value)}>
            {options}
            {/* <option value="hadir" >Attending</option>
            <option value="tidak_hadir">Won't be Attending</option> */}
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