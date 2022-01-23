import React from "react";
import { useAppDispatch } from "../../../../hooks";
import { Actions } from "../../../../store/reducers";

export const ProfilePage: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();

  return (
    <>
      PROFILE PAGE <br />
      <button
        onClick={() => {
          dispatch(Actions.user.setAuth(false));
        }}
      >
        Exit
      </button>
    </>
  );
});
