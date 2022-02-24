import { useState } from "react";
import FileTable from "./components/FileTable/FileTable";
import DownloadButton from "./components/Buttons/DownloadButton";
import SelectedItemCounter from "./components/SelectedItemCounter";
import { generateAlertText } from "./utils/generateAlertText";
import Checkbox from "@mui/material/Checkbox";
import useMediaQuery from "@mui/material/useMediaQuery";

// This is the data that was provided for the task
const fileData = [
  {
    hash: "aa7fd17b56e15198128519d616ea21aa",
    countries: ["DE"],
    path: "\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",
    status: "scheduled",
  },
  {
    hash: "872009f907ff5aaef60fbaca0dbb6fdfcb4aac8c",
    countries: ["NK"],
    path: "\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe",
    status: "available",
  },
  {
    hash: "a4add533c5edceb939c521185d65c9f8",
    countries: ["UK"],
    path: "\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll",
    status: "available",
  },
  {
    hash: "98d1f86e10ebcf9bec609f187d09fd2b",
    countries: ["US"],
    path: "\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll",
    status: "scheduled",
  },
  {
    hash: "66e1e802b0068e369d32fae6af5ed9484fcab8f1",
    countries: ["HK"],
    path: "\\Device\\HarddiskVolume1\\temp\\7za.exe",
    status: "scheduled",
  },
];

// This is how I've chosen to style this project, I can easily manipulate this CSS on the same page as the component
// that uses it, and it'll be easier for you to look through
const styles = (isLargeScreen) => ({
  miscRow: {
    display: "flex",
    direction: "row",
    marginLeft: isLargeScreen ? "100px" : "10px",
    alignItems: "center",
  },
});

function App() {
  // selectedItems holds a list of indices of the currently selected files
  const isLargeScreen = useMediaQuery("(min-width:900px)");
  const [selectedItems, setSelectedItems] = useState(new Set([]));

  // This is simply a list of the indices of items that have the status of available,
  // we use this to determine which items to select when the user clicks the main check box when it's empty
  const [allSelectableItems, setAllSelectableItems] = useState(
    fileData
      .map((fileItem, i) => (fileItem.status === "available" ? i : null))
      .filter((item) => item !== null)
  );

  // If a user clicks download, generate the alert to show them the file paths and devices
  const handleDownloadClick = () => {
    alert(
      generateAlertText(
        selectedItems,
        fileData.map((individualFileData) => individualFileData.path)
      )
    );
  };

  // The logic deciding what to do when the main checkbox is clicked
  const handleMainCheckboxClick = () => {
    if (selectedItems.size > 0) {
      setSelectedItems(new Set([]));
    } else if (selectedItems.size === 0) {
      setSelectedItems(new Set(allSelectableItems));
    }
  };

  return (
    <div>
      {/** This row simply contains the main checkbox, the number of items selected, and the download button */}
      <div style={styles(isLargeScreen).miscRow}>
        <Checkbox
          checked={selectedItems.size === allSelectableItems.length}
          indeterminate={
            selectedItems.size !== allSelectableItems.length &&
            selectedItems.size < fileData.length &&
            selectedItems.size > 0
          }
          onChange={handleMainCheckboxClick}
          size="small"
        />
        <SelectedItemCounter count={selectedItems.size} />
        <DownloadButton
          handleClick={handleDownloadClick}
          disabled={selectedItems.size === 0}
        />
      </div>
      {/** FileTable is the parent component of the whole table */}
      <FileTable
        data={fileData}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        isLargeScreen={isLargeScreen}
      />
    </div>
  );
}

export default App;
