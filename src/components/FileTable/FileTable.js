import FileRow from "./FileRow";
import FileHeaderRow from "./FileHeaderRow";
import { MediaContext } from "../../App";

const styles = (isLargeScreen) => ({
  table: {
    marginLeft: isLargeScreen ? "6.25em" : "0.625em",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    direction: "row",
    width: "6.25em",
  },
});

const FileTable = (props) => {
  const { data, selectedItems, setSelectedItems } = props;

  // This function is used for responsive styling, we can let the individual row items determine their width
  // based on the current window size.
  const getColumnSize = (column, isLargeScreen) => {
    if (column === "Hash") {
      return isLargeScreen ? "13.125em" : "6.25em";
    } else if (column === "File name") {
      return isLargeScreen ? "16.875em" : "6.25em";
    } else if (column === "Countries") {
      return isLargeScreen ? "6.25em" : "6.25em";
    } else if (column === "Status") {
      return isLargeScreen ? "3.75em" : "6.25em";
    }
  };

  return (
    <MediaContext.Consumer>
      {(isLargeScreen) => (
        <div style={styles(isLargeScreen).table}>
          {/** This is the header of the table, containing the row titles such as hash, path, countries and status */}
          <FileHeaderRow
            isLargeScreen={isLargeScreen}
            getColumnSize={getColumnSize}
          />
          {/** For each item in the data provided, create a row with its data */}
          {data.map((fileData, i) => (
            <FileRow
              key={i + fileData.hash}
              index={i}
              fileData={fileData}
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
              isLargeScreen={isLargeScreen}
              getColumnSize={getColumnSize}
            />
          ))}
        </div>
      )}
    </MediaContext.Consumer>
  );
};

export default FileTable;
