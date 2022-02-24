// This function helps us shorten strings by choosing how long the string should be
// and which side we should shorten it on
export const shortenString = (text, maxLength, cutoffSide) => {
  let shortenedString = "";
  if (cutoffSide === "left") {
    shortenedString += `...${text.substring(
      text.length - maxLength - 1,
      text.length - 1
    )}`;
  } else {
    shortenedString +=
      text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  }
  return shortenedString;
};

// This function capitalizes the first character of a given string, this is used for the status text
export const capitalizeFirstCharacter = (text) => {
  if (text && typeof text === "string") {
    return text.substring(0, 1).toUpperCase() + text.substring(1);
  } else {
    return text;
  }
};
