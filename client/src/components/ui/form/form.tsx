import React, { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { Actions } from "../../../store/reducers";
import { FormField } from "./fields";
import { FormContext } from "./form-context";
import "../../../assets/styles/form.scss";

export const Form: React.FC<{
  formName: string;
  fields: any;
  onFinish?: (values: any) => void;
  onAbort?: (errors: any) => void;
}> = React.memo(({ formName, fields, children, onFinish, onAbort }) => {
  console.log("form rerender");

  const dispatch = useAppDispatch();
  const form = useAppSelector(
    (state) => state.formReducer.forms?.[formName] || {}
  );

  useEffect(() => {
    dispatch(
      Actions.form.init({ formName, fields: fields.map((x: any) => x.name) })
    );
  }, []);

  const handleSubmit = useCallback(
    (event: any) => {
      event.preventDefault();
      const items = Object.entries(form);
      console.log("items", items);

      const errors = items
        .filter(([_, value]) => value.error)
        .reduce((res, [key, value]) => ({ ...res, [key]: value.error }), {});

      if (Object.keys(errors).length > 0) {
        onAbort?.(errors);
      } else {
        const values = items.reduce(
          (res, [key, obj]) => ({ ...res, [key]: obj.value }),
          {}
        );
        onFinish?.(values);
      }
    },
    [form, onFinish, onAbort]
  );

  return (
    <FormContext.Provider value={{ value: "" }}>
      <form className="form" onSubmit={handleSubmit}>
        {fields.map(({ name, label, ...x }: any) => {
          const uniqId = `form_${formName}_${name}`;
          return (
            <div className="form-field" key={uniqId}>
              <label className="form-field_label" htmlFor={uniqId}>
                {label}
              </label>
              <FormField
                id={uniqId}
                field={name}
                form={formName}
                className="form-field_input"
                {...x}
              />
              {form?.[name]?.error && (
                <div className="form-field_error">{form?.[name].error}</div>
              )}
            </div>
          );
        })}
        {children}
      </form>
    </FormContext.Provider>
  );
});
