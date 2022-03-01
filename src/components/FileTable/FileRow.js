import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { capitalizeFirstCharacter } from "../../utils/stringFormatter";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { MediaContext } from "../../App";
import FileRowText from "../Typography/RowItemText";

const nameToAttributeMap = {
  hash: "Hash",
  path: "File name",
  countries: "Countries",
  status: "Status",
};

const styles = (isHovered, isSelectable, index, isSelected, isLargeScreen) => ({
  row: {
    borderTop: index === 0 ? "1px solid lightgrey" : null,
    borderBottom: "1px solid lightgrey",
    height: "3.125em",
    float: "left",
    backgroundColor: isHovered
      ? !isSelectable
        ? "white"
        : "lightgrey"
      : isSelected
      ? "#F0F0F0"
      : "white",
    minWidth: isLargeScreen ? "50em" : "30em",
    maxWidth: isLargeScreen ? "50em" : "30em",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    cursor: isSelectable ? "pointer" : null,
  },
  statusCircle: {
    height: "0.9375em",
    width: "0.9375em",
    backgroundColor: "#27CC1B",
    borderRadius: "50%",
    marginTop: "1.0625em",
  },
  statusClockIcon: {
    marginTop: "1.0625em",
  },
});

// FileRow represents an individual row in the table.
const FileRow = (props) => {
  const { index, fileData, selectedItems, setSelectedItems, getColumnSize } =
    props;

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

  // Here, we use context to provide the screen size media query result to all children.
  return (
    <MediaContext.Consumer>
      {(isLargeScreen) => (
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
            style={{ marginTop: "0.375em" }}
          />
          {/** Here, I define the specific attributes for each item in a row, then I reuse the FileRowText
           * component with custom parameters for the uniqueness of each column. If the row is for icons, I show
           * either the available icon or the clock.
           */}
          {[
            { name: "hash", cutOffSide: "left", maxTextLength: 20 },
            { name: "path", cutOffSide: "right", maxTextLength: 30 },
            { name: "countries", maxTextLength: 10 },
            {
              name: "icon",
              capitalizeFirstCharacter: true,
              customComponent: isSelectable ? (
                <span style={styles().statusCircle} key={fileData.hash}></span>
              ) : (
                <AccessTimeIcon
                  style={styles().statusClockIcon}
                  sx={{ fontSize: "1.125em" }}
                  key={fileData.hash}
                />
              ),
            },
            { name: "status", customStyles: { marginLeft: "0.625em" } },
          ].map((columnOptions, i) => {
            // If a custom component was provided, use that instead of FileRowText.
            if (columnOptions.customComponent) {
              return columnOptions.customComponent;
            } else {
              return (
                <FileRowText
                  content={
                    capitalizeFirstCharacter
                      ? capitalizeFirstCharacter(fileData[columnOptions.name])
                      : fileData[columnOptions.name]
                  }
                  isLargeScreen={isLargeScreen}
                  maxTextLength={columnOptions.maxTextLength}
                  cutOffSide={columnOptions.cutOffSide}
                  columnWidth={getColumnSize(
                    nameToAttributeMap[columnOptions.name],
                    isLargeScreen
                  )}
                  // You can pass in custom types for FileRowText to use.
                  customStyles={columnOptions.customStyles ?? {}}
                  key={columnOptions.name + i}
                />
              );
            }
          })}
        </div>
      )}
    </MediaContext.Consumer>
  );
};

export default FileRow;
