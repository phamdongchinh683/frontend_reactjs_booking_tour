import { getWithExpiry } from "../utils";

export const configAxios = {
  headers: { token: `${getWithExpiry("token")}` },
};
