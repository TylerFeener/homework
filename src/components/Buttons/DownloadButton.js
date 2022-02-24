import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";

const styles = (isHovered, disabled) => ({
  downloadButton: {
    height: "35px",
    float: "left",
    backgroundColor: isHovered ? (disabled ? "#BABABA" : "lightgrey") : "white",
    marginLeft: "20px",
    border: `1px solid ${disabled ? "#BABABA" : "grey"}`,
    borderRadius: "5px",
    cursor: "pointer",
    color: disabled ? "#BABABA" : "black",
    fontFamily: "helvetica",
  },
});

function DownloadButton(props) {
  const { handleClick, disabled } = props;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Tooltip
      title={disabled ? "Select items below in order to download them." : ""}
    >
      <button
        style={styles(isHovered, disabled).downloadButton}
        onMouseEnter={() => !disabled && setIsHovered(true)}
        onMouseLeave={() => !disabled && setIsHovered(false)}
        onClick={!disabled ? handleClick : null}
      >
        Download Selected
      </button>
    </Tooltip>
  );
}

export default DownloadButton;
