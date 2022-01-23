import React from "react";
import { useFileDropZone } from "../../../hooks";

export const FileDropZone: React.FC = React.memo(() => {
  const {
    isDrag,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleDropClick,
  } = useFileDropZone();

  return isDrag ? (
    <div
      className="files-dropzone"
      onClick={handleDropClick}
      onDrop={handleDrop}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
    >
      This is drag and drop file zone
    </div>
  ) : null;
});
