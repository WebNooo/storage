import React, { useCallback } from "react";
import { Form } from "../../..";
import { LOGIN } from "../../../../constants/form";
import { useAppDispatch } from "../../../../hooks";
import { Actions } from "../../../../store/reducers";

export const LoginPage: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();

  const handleFinish = useCallback((values: any) => {
    console.log("SEND LOGIN", values);
  }, []);

  const handleAbort = useCallback((errors: any) => {
    console.log("ABORT LOGIN", errors);
  }, []);

  return (
    <>
      <Form onFinish={handleFinish} onAbort={handleAbort} {...LOGIN}>
        <button
        // onClick={() => {
        //   dispatch(Actions.user.setAuth(true));
        // }}
        >
          Login
        </button>
      </Form>
    </>
  );
});
