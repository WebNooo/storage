import React from 'react'
import { useFileDropzone } from '../../../hooks'

export const FileDropzone: React.FC = () => {
  const {
    isDrag,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleDropClick
  } = useFileDropzone()

  return isDrag
    ? (
    <div
      className="files-dropzone"
      onClick={handleDropClick}
      onDrop={handleDrop}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
    >
      This is drag and drop file zone
    </div>
      )
    : null
}
