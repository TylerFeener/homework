const generateAlertText = (selectedItems, filePaths) => {
  let baseAlertMessage = "";

  if (selectedItems.size > 0) {
    baseAlertMessage += `Paths of selected file${
      selectedItems.size > 1 ? "s" : ""
    }:\n\n`;

    baseAlertMessage += `${[...selectedItems]
      .map((selectedItemIndex) => filePaths[selectedItemIndex])
      .join("\n")}`;
  } else {
    baseAlertMessage = "Select items to see their paths here.";
  }

  return baseAlertMessage;
};

export default generateAlertText;
