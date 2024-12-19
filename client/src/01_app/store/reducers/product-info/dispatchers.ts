import { bindActions } from "../../../../06_shared/utils/bindActions";
import { actions } from "./reducer";

export const { setCurrentCartCounter } = bindActions(actions);
