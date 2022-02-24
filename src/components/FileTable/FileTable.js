import FileRow from "./FileRow";
import FileHeaderRow from "./FileHeaderRow";

const styles = (isLargeScreen) => ({
  table: {
    marginLeft: isLargeScreen ? "100px" : "10px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    direction: "row",
    width: "100px",
  },
});

const FileTable = (props) => {
  const { data, selectedItems, setSelectedItems, isLargeScreen } = props;

  // This function is used for responsive styling, we can let the individual row items determine their width
  // based on the current window size.
  const getColumnSize = (column, isLargeScreen) => {
    if (column === "hash") {
      return isLargeScreen ? "210px" : "100px";
    } else if (column === "path") {
      return isLargeScreen ? "270px" : "100px";
    } else if (column === "countries") {
      return isLargeScreen ? "100px" : "100px";
    } else if (column === "status") {
      return isLargeScreen ? "60px" : "100px";
    }
  };

  return (
    <div style={styles(isLargeScreen).table}>
      {/** This is the header of the table, containing the row titles such as hash, path, countries and status */}
      <FileHeaderRow
        isLargeScreen={isLargeScreen}
        getColumnSize={getColumnSize}
      />
      {/** For each item in the data provided, create a row with its data */}
      {data.map((fileData, i) => (
        <FileRow
          key={i}
          index={i}
          fileData={fileData}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          isLargeScreen={isLargeScreen}
          getColumnSize={getColumnSize}
        />
      ))}
    </div>
  );
}

export default FileTable;
