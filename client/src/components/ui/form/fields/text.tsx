import React, { ChangeEvent } from "react";
import { useAppDispatch, useDebounce, useFormField } from "../../../../hooks";
import { Actions } from "../../../../store/reducers";

interface TextPropsType {
  multiple?: boolean;
  password?: boolean;
  field: string;
  form: string;
  placeholder?: string;
}

export const Text: React.FC<TextPropsType> = React.memo(
  ({
    field,
    form,
    multiple = false,
    password = false,
    placeholder,
    ...props
  }) => {
    console.log("text rerender", form);

    // const dispatch = useAppDispatch();
    const { handleFieldChange } = useFormField({ form, field });
    // const debounce = useDebounce((value) => {
    //   console.log(value);
    //   dispatch(Actions.form.setValue({ name: "", field: name, value }));
    // });
    const inputType = password ? "password" : "text";

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   debounce(event.target.value);
    // };

    return (
      <input
        {...props}
        type={inputType}
        multiple={multiple}
        placeholder={placeholder ? placeholder : ""}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleFieldChange(e.target.value)
        }
      />
    );
  }
);
