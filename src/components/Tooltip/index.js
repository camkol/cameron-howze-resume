import React, { useState } from "react";
import "./Tooltip.css"; // Import your CSS styles

const Tooltip = ({ children, text, position = "top" }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Update tooltip position based on mouse coordinates
    setTooltipPosition({ x: mouseX + 10, y: mouseY + 10 }); // Offset for better visibility
  };

  return (
    <div
      className="hover-container"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setTooltipVisible(true)}
      onMouseLeave={() => setTooltipVisible(false)}
    >
      {children} {/* Render the child element (e.g., button or text) */}
      {tooltipVisible && (
        <div
          className={`hover-text ${position}`} // Apply the position class
          style={{ left: tooltipPosition.x, top: tooltipPosition.y }}
        >
          {text} {/* Display the tooltip text */}
        </div>
      )}
    </div>
  );
};

export default Tooltip;