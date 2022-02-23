import { useState } from "react";
import FileTable from "./components/FileTable";
import DownloadButton from "./components/DownloadButton";
import SelectedItemCounter from "./components/SelectedItemCounter";
import generateAlertText from "./utils/generateAlertText";
import Checkbox from "@mui/material/Checkbox";

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

const styles = {
  miscRow: {
    display: "flex",
    direction: "row",
    marginLeft: "100px",
    alignItems: "center",
  },
};

function App() {
  // selectedItems holds a list of indices of the currently selected files
  const [selectedItems, setSelectedItems] = useState(new Set([]));

  const handleDownloadClick = () => {
    alert(
      generateAlertText(
        selectedItems,
        fileData.map((individualFileData) => individualFileData.path)
      )
    );
  };

  return (
    <div>
      <div style={styles.miscRow}>
        <Checkbox
          checked={
            selectedItems.size === fileData.length && selectedItems.size > 0
          }
          indeterminate={
            selectedItems.size < fileData.length && selectedItems.size > 0
          }
          //onChange={handleChange}
          size="small"
        />
        <SelectedItemCounter count={selectedItems.size} />
        <DownloadButton handleClick={handleDownloadClick} />
      </div>
      <FileTable
        data={fileData}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
    </div>
  );
}

export default App;
