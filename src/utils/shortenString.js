const shortenString = (string, maxLength, cutoffSide) => {
  let shortenedString = "";
  if (cutoffSide === "left") {
    shortenedString += `...${string.substring(
      string.length - maxLength - 1,
      string.length - 1
    )}`;
  } else {
    shortenedString += `${string.substring(0, maxLength)}...`;
  }
  return shortenedString;
};

export default shortenString;
