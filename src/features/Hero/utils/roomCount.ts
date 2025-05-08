import { AppDispatch } from "../../../redux/store";
import { setRoomsCount } from "../state/filterSlice";

export const handleRoomCount = (selectedTab: string, selectedTabs: string[]) => {
    return selectedTabs.includes(selectedTab)
        ? selectedTabs.filter(value => value !== selectedTab)
        : [...selectedTabs, selectedTab];
};

export const updateRoomCount = (selectedTab: string, selectedTabs: string[], dispatch: AppDispatch) => {
    const newSelected = handleRoomCount(selectedTab, selectedTabs);
    dispatch(setRoomsCount(newSelected));
    return newSelected;
};