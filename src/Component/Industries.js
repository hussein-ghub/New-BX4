// import React from "react";
// import "../Style/Industries.css";

// function Industries() {
//   return (
//     <div className="Industries">
//       <h2></h2>
//       <div class="grid-container">
//         <div class="grid-item">1</div>
//         <div class="grid-item">2</div>
//         <div class="grid-item">3</div>
//         <div class="grid-item">4</div>
//         <div class="grid-item">5</div>
//         <div class="grid-item">6</div>
//         <div class="grid-item">7</div>
//         <div class="grid-item">8</div>
//         <div class="grid-item">9</div>
//       </div>
//     </div>
//   );
// }

// export default Industries;
import React from "react";
// import "../Style/style.css";

const Industries = () => {
  return (
    <div className="Roba">
      <p className="indu-title">INDUSTRIES</p>

      <div className="container nested">
        <div className="box">COMMERCIAL</div>
        <div className="box">GOVERNMENT</div>
        <div className="box">MISSION CRITICAL</div>
        <div className="box">EDUCATION</div>
        <div className="box">RESIDENTIAL</div>
        <div className="box">RETAIL</div>
        <div className="box">HEALTHCARE</div>
        <div className="box">MANUFACTURING</div>
        <div className="box">HOSPITALITY</div>
      </div>

      <div>
        <hr size="18" width="100%" color="black" />
      </div>
    </div>
  );
};

export default Industries;
