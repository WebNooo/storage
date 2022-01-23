import React from "react";
import { Text } from "./text";

export const FormField: React.FC<{
  type: "text";
  field: string;
  form: string;
}> = ({ type, ...props }) => {
  switch (type) {
    case "text":
      return <Text {...props} />;
  }
};
