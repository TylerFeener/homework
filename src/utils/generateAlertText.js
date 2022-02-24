// This function generates the necessary text that we display in the alert.
// We parse out the device and file path and display them separately in the alert.
export const generateAlertText = (selectedItems, filePaths) => {
  let baseAlertMessage = "";

  if (selectedItems.size > 0) {
    // Logic for the s at the end of "Selected file(s)"
    baseAlertMessage += `Selected file${
      selectedItems.size > 1 ? "s" : ""
    }:\n\n`;

    // Get the device from the path
    const getDevice = (path) => {
      const splitPath = path.split("\\");
      const device = splitPath[2];
      return device;
    };

    // Get the path after the device name
    const getFilePath = (path) => {
      const splitPath = path.split("\\");
      const filePath = splitPath.slice(3, splitPath.length).join("\\");
      return filePath;
    };

    // Get alert messages for all selected items and join them by a new line operator
    baseAlertMessage += `${[...selectedItems]
      .map(
        (selectedItemIndex) =>
          `Device: ${getDevice(
            filePaths[selectedItemIndex]
          )} - Path: \\${getFilePath(filePaths[selectedItemIndex])}`
      )
      .join("\n")}`;
  } else {
    baseAlertMessage = "Select items to see their paths here.";
  }

  return baseAlertMessage;
};
