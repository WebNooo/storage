import React from 'react'
import '../../../assets/styles/file-manager.scss'
import { FileRow } from './file-row'
import { useAppSelector, useFileDropzone } from '../../../hooks'
import { FileDropzone } from './file-dropzone'

export const FileManager: React.FC = () => {
  const { handleDragEnter } = useFileDropzone()
  const files = useAppSelector((state) => state.fileReducer.files)

  return (
    <div className="files" onDragEnter={handleDragEnter}>
      <FileDropzone />
      <div className="files-header">
        <div className="files-row">
          <div className="icon" />
          <div className="name">Название</div>
          <div className="size">Размер</div>
          <div className="action">Действие</div>
        </div>
      </div>
      <div className="files-body">
        {files.map((file) => (
          <FileRow key={file._id} {...file} />
        ))}
      </div>
    </div>
  )
}
