import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  accountType?: "Option1" | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
