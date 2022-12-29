// import React, { useState, Fragment } from "react";
// import List from "./List";

// const Search = () => {
//   const [userInput, setUserInput] = useState("");
//   const [list, setList] = useState([
//     "walk the dog",
//     "buy the milk",
//     "learn some code",
//   ]);

//   // userinput is controlled by the App component
//   const handleChange = (e) => {
//     setUserInput(e.target.value);
//   };

//   const addItem = (e) => {
//     if (userInput !== "") {
//       setList([...list, userInput]);
//       setUserInput("");
//     }
//   };

//   const removeItem = (item) => {
//     const updatedList = list.filter((listItem) => listItem !== item);
//     setList(updatedList);
//   };

//   return (
//     <Fragment>
//       <List list={list} removeItem={removeItem} />
//       <hr />
//       <form>
//         <input
//           placeholder="Something that needs to be done..."
//           value={userInput}
//           onChange={handleChange}
//         />
//         <button type="button" onClick={addItem}>
//           {"Add Item"}
//         </button>
//       </form>
//     </Fragment>
//   );
// };

// export default Search;

/**.main {
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  flex-direction: column;
  row-gap: 20px;
}

.main h1 {
  margin: 10px;
  font-size: 40px;
  color: rgb(1, 1, 59);
}

.search {
  width: 30%;
}

.list ul li {
  font-size: 20px;
  visibility: hidden;
}
 */

import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./List";
// import "./App.css";

function Search() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="main">
      <h1>Links</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <List input={inputText} />
    </div>
  );
}

export default Search;
