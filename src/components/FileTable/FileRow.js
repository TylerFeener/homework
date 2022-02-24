import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import {
  shortenString,
  capitalizeFirstCharacter,
} from "../../utils/stringFormatter";
import Tooltip from "@mui/material/Tooltip";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

// As you can tell each row requires quite a lot of styling
const styles = (isHovered, isSelectable, index, isSelected, isLargeScreen) => ({
  row: {
    borderTop: index === 0 ? "1px solid lightgrey" : null,
    borderBottom: "1px solid lightgrey",
    height: "50px",
    float: "left",
    backgroundColor: isHovered
      ? !isSelectable
        ? "#FFE2E2"
        : "lightgrey"
      : isSelected
      ? "#F0F0F0"
      : "white",
    minWidth: isLargeScreen ? "800px" : "480px",
    maxWidth: isLargeScreen ? "800px" : "480px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    cursor: "pointer",
  },
  statusCircle: {
    height: "15px",
    width: "15px",
    backgroundColor: "#27CC1B",
    borderRadius: "50%",
    marginTop: "17px",
  },
  statusClockIcon: {
    marginTop: "17px",
  },
});

const FileRow = (props) => {
  const {
    index,
    fileData,
    selectedItems,
    setSelectedItems,
    isLargeScreen,
    getColumnSize,
  } = props;

  const isSelectable = fileData.status === "available";

  const [isHovered, setIsHovered] = useState(false);

  // This function decides what to do when a row is clicked
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

  const countriesString = fileData.countries.join(", ");

  return (
    <div
      style={
        styles(
          isHovered,
          isSelectable,
          index,
          selectedItems.has(index),
          isLargeScreen
        ).row
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleChange}
    >
      {/** The checkbox in each row */}
      <Checkbox
        checked={selectedItems.has(index)}
        inputProps={{ "aria-label": "controlled" }}
        size="small"
        disabled={!isSelectable}
        style={{ marginTop: 6 }}
      />
      {/** The hash */}
      <Tooltip title={fileData.hash}>
        <p
          style={{
            minWidth: getColumnSize("hash", isLargeScreen),
            maxWidth: getColumnSize("hash", isLargeScreen),
            fontFamily: "helvetica",
          }}
        >
          {shortenString(fileData.hash, isLargeScreen ? 20 : 7, "left")}
        </p>
      </Tooltip>
      {/** The path */}
      <Tooltip title={fileData.path}>
        <p
          style={{
            minWidth: getColumnSize("path", isLargeScreen),
            maxWidth: getColumnSize("path", isLargeScreen),
            fontFamily: "helvetica",
          }}
        >
          {shortenString(fileData.path, isLargeScreen ? 30 : 10, "right")}
        </p>
      </Tooltip>
      {/** The countries */}
      <Tooltip title={countriesString}>
        <p
          style={{
            minWidth: getColumnSize("countries", isLargeScreen),
            maxWidth: getColumnSize("countries", isLargeScreen),
            fontFamily: "helvetica",
          }}
        >
          {shortenString(countriesString, isLargeScreen ? 10 : 5)}
        </p>
      </Tooltip>
      {/** The status or clock icon, depending on the file status */}
      {isSelectable ? (
        <span style={styles().statusCircle}></span>
      ) : (
        <AccessTimeIcon
          style={styles().statusClockIcon}
          sx={{ fontSize: 18 }}
        />
      )}
      <p
        style={{
          minWidth: getColumnSize("status", isLargeScreen),
          maxWidth: getColumnSize("status", isLargeScreen),
          fontFamily: "helvetica",
          marginLeft: "10px",
        }}
      >
        {capitalizeFirstCharacter(fileData.status)}
      </p>
    </div>
  );
}

export default FileRow;
