import HeaderText from "./HeaderText";

const styles = {
  headerRow: {
    height: "50px",
    float: "left",
    backgroundColor: "white",
    marginLeft: "0px",
    minWidth: "800px",
    maxWidth: "800px",
    direction: "column",
    display: "flex",
  },
  hash: {
    marginLeft: 0,
  },
  fileName: {
    marginLeft: 130,
  },
  countries: {
    marginLeft: 130,
  },
  status: {
    marginLeft: 70,
  },
};

function FileHeaderRow() {
  return (
    <div style={styles.headerRow}>
      <HeaderText text="Hash" style={styles.hash} />
      <HeaderText text="File name" style={styles.fileName} />
      <HeaderText text="Countries" style={styles.countries} />
      <HeaderText text="Status" style={styles.status} />
    </div>
  );
}

export default FileHeaderRow;
