import React, { useState } from "react";
import "./Tooltip.css"; // Import your CSS styles

function Tooltip({ children, text, position = "bottom" }) {
  const [tooltipVisible, setTooltipVisible] = useState(false);

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
          className={`hover-text ${position}`} // Apply the position class
        >
          {text} {/* Display the tooltip text */}
        </div>
      )}
    </div>
  );
}

export default Tooltip;
