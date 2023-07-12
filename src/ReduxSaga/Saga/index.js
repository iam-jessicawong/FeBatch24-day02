import { takeEvery, all } from "redux-saga/effects";
import * as ActionRegion from "../Constant/RegionConstant";
import {
  createRegion,
  deleteRegion,
  handleRegion,
  updateRegion,
} from "./RegionSaga";

function* watchAll() {
  yield all([
    takeEvery(ActionRegion.GET_REGION_REQUEST, handleRegion),
    takeEvery(ActionRegion.ADD_REGION_REQUEST, createRegion),
    takeEvery(ActionRegion.DELETE_REGION_REQUEST, deleteRegion),
    takeEvery(ActionRegion.UPDATE_REGION_REQUEST, updateRegion),
  ]);
}

export default watchAll;
