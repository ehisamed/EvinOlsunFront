import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HERO_CONSTANTS } from "../../../constants/HeroConstants";

interface FilterState {
    price: {
        "min": number, 
        "max": number
    };
    estateUsageType: string; /* BUY OR RENT (Satın almaq, Kirayə götürmək) */
    estatePurposeType: string; /* LIVING OR COMMERCIAL (Yaşayış, Ticari) */
    selectedEstateTypes: string[]; /* MULTICHECKBOX */
    roomCount: string[]; /* Array */
    address: string
}

const initialState: FilterState = {
    price: {
        min: 0,
        max: 0,
    },
    estateUsageType: HERO_CONSTANTS.filter.SWITCH.BUY, /* Satın almaq */
    estatePurposeType: HERO_CONSTANTS.filter.HOUSE_TYPE.TYPES[0], /* (Yaşayış) */
    selectedEstateTypes: [],
    roomCount: [],
    address: '',
}

const filterSclice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setPrice: (state, action: PayloadAction<{ min: number, max: number }>) => {
            state.price = action.payload
        },
        setRoomsCount: (state, action: PayloadAction<string[]>)=> {
            state.roomCount = action.payload
        },
        toggleEstateType: (state, action: PayloadAction<string>) => {
            const type = action.payload

            if(state.selectedEstateTypes.includes(type)){
                state.selectedEstateTypes = state.selectedEstateTypes.filter(item => item !== type)
            } else {
                state.selectedEstateTypes.push(type)
            }
        },
        setEstateUsageType: (state, action: PayloadAction<string>) => {
            state.estateUsageType = action.payload;
        },
        setEstatePurposeType: (state, action: PayloadAction<string>) => {
            state.estatePurposeType = action.payload;
        }
    }
});

export const { setPrice, setRoomsCount, toggleEstateType, setEstateUsageType, setEstatePurposeType } = filterSclice.actions;

export default filterSclice.reducer;