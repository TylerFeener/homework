import "./FileTable.css";
import FileRow from "./FileRow";
import FileHeaderRow from "./FileHeaderRow";

const styles = {
  table: {
    marginLeft: "100px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    direction: "row",
    width: "100px",
  },
};

function FileTable(props) {
  const { data, selectedItems, setSelectedItems } = props;

  return (
    <div style={styles.table}>
      <FileHeaderRow />
      {data.map((fileData, i) => (
        <FileRow
          key={i}
          index={i}
          fileData={fileData}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      ))}
    </div>
  );
}

export default FileTable;
