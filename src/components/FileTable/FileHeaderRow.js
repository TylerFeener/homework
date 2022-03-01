import HeaderText from "../Typography/HeaderText";
import { MediaContext } from "../../App";

const styles = (isLargeScreen, columnWidth) => ({
  headerRow: {
    height: "3.125em",
    float: "left",
    backgroundColor: "white",
    marginLeft: " 2.1875em",
    minWidth: isLargeScreen ? "80%" : "90%",
    maxWidth: isLargeScreen ? "80%" : "90%",
    direction: "column",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  Hash: {
    minWidth: columnWidth,
    maxWidth: columnWidth,
    fontWeight: "bold",
    fontFamily: "helvetica",
  },
  "File name": {
    minWidth: columnWidth,
    maxWidth: columnWidth,
    fontWeight: "bold",
    fontFamily: "helvetica",
  },
  Countries: {
    minWidth: columnWidth,
    maxWidth: columnWidth,
    fontWeight: "bold",
    fontFamily: "helvetica",
  },
  Status: {
    minWidth: columnWidth,
    maxWidth: columnWidth,
    fontWeight: "bold",
    fontFamily: "helvetica",
  },
});

// The file header row is simply the row of headers at the top of the table.
const FileHeaderRow = (props) => {
  const { getColumnSize } = props;
  return (
    <MediaContext.Consumer>
      {(isLargeScreen) => (
        <div style={styles(isLargeScreen).headerRow}>
          {/** We reuse header text components for each header, along with responsive styling */}
          {["Hash", "File name", "Countries", "Status"].map(
            (columnTitle, i) => (
              <HeaderText
                text={columnTitle}
                childStyle={
                  styles(
                    isLargeScreen,
                    getColumnSize(columnTitle, isLargeScreen)
                  )[columnTitle]
                }
                key={columnTitle + i}
              />
            )
          )}
        </div>
      )}
    </MediaContext.Consumer>
  );
};

export default FileHeaderRow;
