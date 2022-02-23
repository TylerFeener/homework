import { useState } from "react";

const styles = (isHovered) => ({
  downloadButton: {
    height: "35px",
    float: "left",
    backgroundColor: isHovered ? "lightgrey" : "white",
    marginLeft: "20px",
    border: "1px solid grey",
    borderRadius: "5px",
    cursor: "pointer",
  },
});

function DownloadButton(props) {
  const { handleClick } = props;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      style={styles(isHovered).downloadButton}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      Download Selected
    </button>
  );
}

export default DownloadButton;
