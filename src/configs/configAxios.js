import { getWithExpiry } from "../utils";

const token = getWithExpiry("token");

export const configAxios = {
  headers: { token: token },
};
