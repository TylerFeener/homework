import { useState, createContext } from "react";
import FileTable from "./components/FileTable/FileTable";
import { generateAlertText } from "./utils/generateAlertText";
import useMediaQuery from "@mui/material/useMediaQuery";
import FileTableActions from "./components/FileTable/FileTableActions";
import { fileData } from "./data/FileData";

export const MediaContext = createContext();

const App = () => {
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
    <MediaContext.Provider value={isLargeScreen}>
      <div>
        {/** This row simply contains the main checkbox, the number of items selected, and the download button */}
        <FileTableActions
          selectedItemsLength={selectedItems.size}
          allSelectableItemsLength={allSelectableItems.length}
          fileDataLength={fileData.length}
          handleMainCheckboxClick={handleMainCheckboxClick}
          handleDownloadClick={handleDownloadClick}
        />
        {/** FileTable is the parent component of the whole table */}
        <FileTable
          data={fileData}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      </div>
    </MediaContext.Provider>
  );
};

export default App;
