import * as ActionType from "../Constant/RegionConstant";

const INIT_STATE = {
  regions: [],
};

const RegionReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_REGION_REQUEST:
      return { ...state };
    case ActionType.GET_REGION_SUCCESS:
      return GetRegionSuccessfully(state, action);
    case ActionType.ADD_REGION_REQUEST:
      return { ...state };
    case ActionType.ADD_REGION_SUCCESS:
      return AddRegionSuccessfully(state, action);
    case ActionType.UPDATE_REGION_REQUEST:
      return { ...state };
    case ActionType.UPDATE_REGION_SUCCESS:
      return UpdateRegionSuccessfully(state, action);
    case ActionType.DELETE_REGION_REQUEST:
      return { ...state };
    case ActionType.DELETE_REGION_SUCCESS:
      return DeleteRegionSuccessfully(state, action);
    default:
      return { ...state };
  }
};

const GetRegionSuccessfully = (state, action) => {
  return {
    ...state,
    regions: action.payload,
  };
};

const AddRegionSuccessfully = (state, action) => {
  return {
    ...state,
    regions: [...state.regions, action.payload],
  };
};

const UpdateRegionSuccessfully = (state, action) => {
  return {
    ...state,
    regions: [...state.regions, action.payload],
  };
};

const DeleteRegionSuccessfully = (state, action) => {
  return {
    ...state,
    regions: action.payload,
  };
};

export default RegionReducer;
