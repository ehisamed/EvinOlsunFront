import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { HERO_CONSTANTS } from "../../../constants/HeroConstants";
import { updateRoomCount } from "../utils/roomCount";
import { setRoomsCount } from "../state/filterSlice";

const useFilterRoom = () => {
    const dispatch = useAppDispatch();
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const selectedRoomCounts = useAppSelector((state) => state.filter.roomCount);

    const tabs = HERO_CONSTANTS.filter.ROOM_COUNTER.tabs;

    const toggleRoomDropdown = () => {
        setIsVisible(prevState => !prevState);
    }

    const selectRoomTab = (selectedTab: string) => {
        const newSelectedRoomCounts = updateRoomCount(selectedTab, selectedRoomCounts, dispatch);
        dispatch(setRoomsCount(newSelectedRoomCounts));
    }

    return {
        tabs,
        toggleRoomDropdown,
        selectRoomTab,
        selectedRoomCounts,
        setIsVisible,
        setRoomsCount,
        isVisible
    }
}

export default useFilterRoom