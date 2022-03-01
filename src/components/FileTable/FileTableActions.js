import Checkbox from "@mui/material/Checkbox";
import SelectedItemCounter from "../SelectedItemCounter";
import DownloadButton from "../Buttons/DownloadButton";
import { MediaContext } from "../../App";

// This is how I've chosen to style this project, I can easily manipulate this CSS on the same page as the component
// that uses it, and it'll be easier for you to look through
const styles = (isLargeScreen) => ({
  miscRow: {
    display: "flex",
    direction: "row",
    marginLeft: isLargeScreen ? "6.25em" : "0.625em",
    alignItems: "center",
  },
});

const FileTableActions = (props) => {
  const {
    selectedItemsLength,
    allSelectableItemsLength,
    fileDataLength,
    handleMainCheckboxClick,
    handleDownloadClick,
  } = props;

  return (
    <MediaContext.Consumer>
      {(isLargeScreen) => (
        <div style={styles(isLargeScreen).miscRow}>
          {/** This is the main check box which can select or deselect all items. */}
          <Checkbox
            checked={selectedItemsLength === allSelectableItemsLength}
            indeterminate={
              selectedItemsLength !== allSelectableItemsLength &&
              selectedItemsLength < fileDataLength &&
              selectedItemsLength > 0
            }
            onChange={handleMainCheckboxClick}
            size="small"
          />
          {/** This counter tells you how many items are currently selected. */}
          <SelectedItemCounter count={selectedItemsLength} />
          {/** Clicking this button will create the alert with the device and path of the file. */}
          <DownloadButton
            handleClick={handleDownloadClick}
            disabled={selectedItemsLength === 0}
          />
        </div>
      )}
    </MediaContext.Consumer>
  );
};

export default FileTableActions;
