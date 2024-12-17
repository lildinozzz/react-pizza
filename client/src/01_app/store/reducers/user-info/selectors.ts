import { TStore } from "../../../../06_shared/types/types";

export const userInfoSelectors = {
  userInfo: (store: TStore) => store.userInfo,
};
