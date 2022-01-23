import React from "react";
import { Icon } from "../icon";

export const FileRow: React.FC<{
  name: string;
  size: number;
  type: string;
}> = React.memo(({ name, size, type }) => {
  return (
    <div className="files-row" draggable>
      <div className="icon">
        <Icon name="Folder" size={25} />
      </div>
      <div className="name">{name}</div>
      <div className="size">{size}</div>
      <div className="action">...</div>
    </div>
  );
});
