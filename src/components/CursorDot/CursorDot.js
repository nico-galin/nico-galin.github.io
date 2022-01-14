import React, { useContext } from "react";
import "./CursorDot.css";
import useMousePosition from "../../hooks/useMousePosition";
import { MouseContext } from "../../context/mouse-context";

const CursorDot = () => {
     const { cursorType, cursorChangeHandler } = useContext(MouseContext);

     const { x, y } = useMousePosition();
     return (
       <>
         <div
           className={"dot " + cursorType}
           style={{ left: `${x}px`, top: `${y}px` }}
         >
         </div>
       </>
     );
};

export default CursorDot;