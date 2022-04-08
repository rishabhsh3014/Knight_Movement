import React, { useState, useEffect } from "react";
import Board from "./Board";
import { observe } from "../Game";

const pageStyle={
  // backgroundColor:"blue",
  width:1528,
  marginLeft:"-9px",
  // height:1000
};

const containerStyle = {
  textAlign:"center",
  marginLeft:"395px",
  marginTop:"27px",
  width: 700,
  height: 700,
  border: "4px solid black",
  // padding:"10px"
};
const Chessboard = () => {
  const [knightPos, setKnightPos] = useState([1, 7]);
  useEffect(() => observe(newPos => setKnightPos(newPos)), []);
  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <Board knightPosition={knightPos} />
      </div>
    </div>
  );
};
export default Chessboard;
