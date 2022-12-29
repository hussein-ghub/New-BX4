import React from "react";

// import "../Style/contact.css";
import { useState } from "react";
// import "../Style/navStyle.css";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

function Contact() {
  const [Name, setName] = useState("");

  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();

    const formInfo = { Name, Phone, Email, Message };
    setIsPending(true);

    fetch("http://localhost:4000/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formInfo),
    }).then(() => {
      console.log("added");
    });
    setIsPending(false);
    navigate("/");
  };

  // const handelSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     //sending user data to database to be logged in
  //     const signRes = { Name, Phone, Email, Message };
  //     signRes = await axios.post("http://localhost:4000/submit/", {
  //       name: Name,
  //       phone: Phone,

  //       email: Email,
  //       message: Message,
  //     });
  // console.log(signRes);
  //update global state with response from backend(user-info)
  // setUserData({
  //   token: signRes.data.token,
  //   user: signRes.data.user,
  // });
  // console.log(userData);

  //set localStorage with the token
  // localStorage.setItem("auth-token", signRes.data.token);

  //navigate user to homepage
  //     navigate("/");
  //   } catch (err) {
  //     console.log("problem", err.response.data.msg);
  //     alert(err.response.data.msg);
  //   }
  // };

  return (
    <div className="container-fluid marTop">
      <div
        className="contactfont indu-title"
        // style={{ "letter-spacing": "3.3px", "font-size": "4vw" }}
      >
        CONTACT US
      </div>
      <div className="container">
        <div className="para">
          FOR ANY INQUIRIES, <br />
          PLEASE USE THE <br /> FOLLOWING CONTACT <br />
          FORM:
        </div>
        <form onSubmit={handelSubmit} className="contac">
          <input
            type="text"
            className="box"
            placeholder="Name"
            value={Name}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <hr className="pt-0 mt-0" />

          <input
            type="text"
            placeholder="Phone"
            className="box"
            required
            value={Phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <hr className="pt-0 mt-0" />

          <input
            type="email"
            placeholder="Email"
            className="box"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <hr className="pt-0 mt-0" />

          <input
            type="text"
            placeholder="Add message here"
            className="message box"
            value={Message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <hr className="pt-0 mt-0" />

          {!isPending && <button className="subbtn">Submit</button>}
          {isPending && (
            <button disable className="subbtn">
              Adding...
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
