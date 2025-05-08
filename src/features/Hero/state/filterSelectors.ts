import { createSelector } from "reselect";
import { RootState } from "../../../redux/store";

const selectFilter = (state: RootState) => state.filter;

export const selectPrice = createSelector(
    [selectFilter],
    (filter) => filter.price
);

export const selectEstateUsageType = createSelector(
    [selectFilter],
    (filter) => filter.estateUsageType
);

export const selectEstatePurposeType = createSelector(
    [selectFilter],
    (filter) => filter.estatePurposeType
);

export const selectSelectedEstateTypes = createSelector(
    [selectFilter],
    (filter) => filter.selectedEstateTypes
);

export const selectRoomCount = createSelector(
    [selectFilter],
    (filter) => filter.roomCount
);

export const selectAddress = createSelector(
    [selectFilter],
    (filter) => filter.address
);
