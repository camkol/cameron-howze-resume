import React, { useState } from "react";
import "./Tooltip.css"; // Import your CSS styles

function Tooltip({ children, text }) {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  // const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  // const handleMouseMove = (event) => {
  //   const mouseX = event.clientX;
  //   const mouseY = event.clientY;

  //   // Update tooltip position based on mouse coordinates
  //   setTooltipPosition({ x: mouseX, y: mouseY }); // Offset for better visibility
  // };

  return (
    <div
      className="hover-container"
      // onMouseMove={handleMouseMove}
      onMouseEnter={() => setTooltipVisible(true)}
      onMouseLeave={() => setTooltipVisible(false)}
    >
      {children} {/* Render the child element (e.g., button or text) */}
      {tooltipVisible && (
        <div
          className={"hover-text"} // Apply the position class
          // style={{
          //   left: `${tooltipPosition.x}px`,
          //   top: `${tooltipPosition.y}px`,
          // }}
        >
          {text} {/* Display the tooltip text */}
        </div>
      )}
    </div>
  );
}

export default Tooltip;
