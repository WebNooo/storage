import React from "react";
import * as icons from "./icons";
import { IconPropsType } from "../../../interfaces";

export const Icon: React.FC<IconPropsType> = React.memo(
  ({ name, color = "white", size = 16, className }) => {
    const IconComponent =
      Object.keys(icons).includes(name) && name !== ""
        ? icons?.[name]
        : icons.Error;

    return (
      <IconComponent
        className={className}
        style={{ fill: color, width: size, height: size }}
      />
    );
  }
);
