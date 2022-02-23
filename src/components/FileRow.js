import { useState } from "react";
import "./FileRow.css";
import Checkbox from "@mui/material/Checkbox";
import shortenString from "../utils/shortenString";

const styles = (isHovered, isSelectable, index, isSelected) => ({
  row: {
    borderTop: index === 0 ? "1px solid lightgrey" : null,
    borderBottom: "1px solid lightgrey",
    height: "50px",
    float: "left",
    backgroundColor: isHovered
      ? !isSelectable
        ? "#EAC5C5"
        : "lightgrey"
      : isSelected
      ? "#F0F0F0"
      : "white",
    minWidth: "800px",
    maxWidth: "800px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    cursor: "pointer",
  },
  rowItem: {
    marginLeft: "30px",
  },
});

function FileRow(props) {
  const { index, fileData, selectedItems, setSelectedItems } = props;

  const isSelectable = fileData.status === "available";

  const [isHovered, setIsHovered] = useState(false);

  const handleChange = () => {
    if (isSelectable) {
      let newSelectedItems = new Set([...selectedItems]);
      newSelectedItems.delete(index);
      if (selectedItems.has(index)) {
        newSelectedItems.delete(index);
      } else {
        newSelectedItems.add(index);
      }
      setSelectedItems(newSelectedItems);
    }
  };

  return (
    <div
      style={
        styles(isHovered, isSelectable, index, selectedItems.has(index)).row
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleChange}
    >
      <Checkbox
        checked={selectedItems.has(index)}
        inputProps={{ "aria-label": "controlled" }}
        size="small"
      />
      <p className="rowItem">{shortenString(fileData.hash, 20, "left")}</p>
      <p className="rowItem">{shortenString(fileData.path, 30, "right")}</p>
      <p className="rowItem">{fileData.countries}</p>
      <p className="rowItem">{fileData.status}</p>
    </div>
  );
}

export default FileRow;
