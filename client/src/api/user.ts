import { IApiLogin } from "../interfaces";
import { Instance } from "./instance";

export const UserApi = {
  profile: async () => {
    return await Instance.get("/user");
  },
  login: async ({ username, password }: IApiLogin) =>
    await Instance.post("/user/login", { username, password }).then(
      (res) => res.data
    ),
};
