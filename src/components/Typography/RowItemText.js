import { shortenString } from "../../utils/stringFormatter";
import Tooltip from "@mui/material/Tooltip";

const FileRowText = (props) => {
  const {
    content,
    maxTextLength,
    cutOffSide,
    isLargeScreen,
    columnWidth,
    customStyles,
  } = props;

  /** If the content is a string, simply display it. If it's another type, assume it's a list and join it by commas.
   *   This should be changed to ensure we receive an expected data type and to give the user feedback otherwise.
   */
  const formattedContent =
    typeof content === "string"
      ? shortenString(
          content,
          isLargeScreen ? maxTextLength : maxTextLength / 2.7,
          cutOffSide
        )
      : content.join(", ");

  return (
    <Tooltip title={content}>
      <p
        style={{
          minWidth: columnWidth,
          maxWidth: columnWidth,
          fontFamily: "helvetica",
          ...customStyles,
        }}
      >
        {formattedContent}
      </p>
    </Tooltip>
  );
};

export default FileRowText;
