import { useCallback, useEffect } from "react";
import { useAppDispatch } from ".";
import { Actions } from "../store/reducers";

export const useFormField = ({
  form,
  field,
}: {
  form: string;
  field: string;
}) => {
  const dispatch = useAppDispatch();

  const handleFieldChange = useCallback(
    (value) => {
      dispatch(Actions.form.setValue({ form, field, value }));
    },
    [form, field]
  );

  const handleFieldBlur = useCallback(() => {}, [form, field]);
  const handleFieldClick = useCallback(() => {}, [form, field]);

  return {
    handleFieldChange,
    handleFieldBlur,
    handleFieldClick,
  };
};
