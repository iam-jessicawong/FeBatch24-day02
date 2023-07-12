import { call, put } from "redux-saga/effects"; //untuk mengambil dan mengambil
import RegionApi from "../../api/RegionApi";
import {
  GetRegionSuccess,
  GetRegionFailed,
  AddRegionSuccess,
  AddRegionFailed,
  DeleteRegionSuccess,
  DeleteRegionFailed,
  UpdateRegionFailed,
  UpdateRegionSuccess,
} from "../Action/RegionAction";

function* handleRegion() {
  try {
    const result = yield call(RegionApi.list);
    yield put(GetRegionSuccess(result));
  } catch (error) {
    yield put(GetRegionFailed(error));
  }
}

function* createRegion(action) {
  const { payload } = action;
  try {
    const result = yield call(RegionApi.upload, payload);
    yield put(AddRegionSuccess(result.data));
  } catch (error) {
    yield put(AddRegionFailed(error));
  }
}

function* updateRegion(action) {
  const { payload } = action;
  try {
    const result = yield call(RegionApi.update, payload.id, payload.payload);
    yield put(UpdateRegionSuccess(result));
  } catch (error) {
    yield put(UpdateRegionFailed(error));
  }
}

function* deleteRegion(action) {
  const { payload } = action;
  try {
    const result = yield call(RegionApi.deleted(payload));
    yield put(DeleteRegionSuccess(result));
  } catch (error) {
    yield put(DeleteRegionFailed(error));
  }
}

export { handleRegion, createRegion, deleteRegion, updateRegion };
