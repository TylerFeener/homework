import HeaderText from "../HeaderText";

const styles = (isLargeScreen, columnWidth) => ({
  headerRow: {
    height: "50px",
    float: "left",
    backgroundColor: "white",
    marginLeft: "35px",
    minWidth: isLargeScreen ? "800px" : "500px",
    maxWidth: isLargeScreen ? "800px" : "500px",
    direction: "column",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  hash: {
    minWidth: columnWidth,
    maxWidth: columnWidth,
    fontWeight: "bold",
    fontFamily: "helvetica",
  },
  fileName: {
    minWidth: columnWidth,
    maxWidth: columnWidth,
    fontWeight: "bold",
    fontFamily: "helvetica",
  },
  countries: {
    minWidth: columnWidth,
    maxWidth: columnWidth,
    fontWeight: "bold",
    fontFamily: "helvetica",
  },
  status: {
    minWidth: columnWidth,
    maxWidth: columnWidth,
    fontWeight: "bold",
    fontFamily: "helvetica",
  },
});

function FileHeaderRow(props) {
  const { isLargeScreen, getColumnSize } = props;
  return (
    <div style={styles(isLargeScreen).headerRow}>
      {/** We reuse header text components for each header, along with responsive styling */}
      <HeaderText
        text="Hash"
        childStyle={
          styles(isLargeScreen, getColumnSize("hash", isLargeScreen)).hash
        }
      />
      <HeaderText
        text="File name"
        childStyle={
          styles(isLargeScreen, getColumnSize("path", isLargeScreen)).fileName
        }
      />
      <HeaderText
        text="Countries"
        childStyle={
          styles(isLargeScreen, getColumnSize("countries", isLargeScreen))
            .countries
        }
      />
      <HeaderText
        text="Status"
        childStyle={
          styles(isLargeScreen, getColumnSize("status", isLargeScreen)).status
        }
      />
    </div>
  );
}

export default FileHeaderRow;
