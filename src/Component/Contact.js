import React from "react";
// import "../Style/contact.css";
import { useState } from "react";
// import "../Style/navStyle.css";

function Contact() {
  const [Name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  // const [phone, setPhone] = useState("");
  // const [email, setEmail] = useState("");

  return (
    <div className="container-fluid">
      <div
        className="span fw-lighter"
        style={{ "letter-spacing": "3.3px", "font-size": "4vw" }}
      >
        CONTACT US
      </div>
      <div className="container">
        <div className="para">
          FOR ANY INQUIRIES, <br />
          PLEASE USE THE <br /> FOLLOWING CONTACT <br />
          FORM:
        </div>
        <form className="contac">
          <input
            type="text"
            className="box"
            placeholder="Name"
            required
            onChange={handleChange}
          />
          <hr className="pt-0 mt-0" />
          <h4>{Name}</h4>

          <input type="text" placeholder="Phone" className="box" required />
          <hr className="pt-0 mt-0" />

          <input type="email" placeholder="Email" className="box" required />
          <hr className="pt-0 mt-0" />

          <input
            type="text"
            placeholder="Add message here"
            className="message box"
            required
          />
          <hr className="pt-0 mt-0" />

          <button className="subbtn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
