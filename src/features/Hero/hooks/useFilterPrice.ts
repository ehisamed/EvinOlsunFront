import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setPrice } from "../state/filterSlice";


export const usePriceFilter = () => {
    const dispatch = useAppDispatch();
    const priceState = useAppSelector((state) => state.filter.price);
    const [data, setData] = useState({ "min": priceState.min, "max": priceState.max });

    useEffect(() => {

        if (data.min !== priceState.min || data.max !== priceState.max) {
            dispatch(setPrice(data));
        }

    }, [data, dispatch, priceState.min, priceState.max]);

    const handlePriceField = (e: React.ChangeEvent<HTMLInputElement>) => {
        let { name, value } = e.target;
        let numericValue = parseInt(value.replace(/^0+/, '')) || 0;

        if (numericValue > MAX_VALUE) numericValue = MAX_VALUE;

        setData(prev => ({
            ...prev,
            [name]: numericValue
        }));
    };

    const MAX_VALUE = 100_000_000_000;

    const formatPrice = (value: number) => {
        if (value > MAX_VALUE) value = MAX_VALUE;

        if (value >= 1_000_000_000) return (value / 1_000_000_000).toFixed(2) + ' mlrd';
        if (value >= 1_000_000) return (value / 1_000_000).toFixed(2) + ' mln';
        if (value >= 1_000) return (value / 1_000).toFixed(3) + ' min';
        return value.toString();
    };


    return {
        data,
        handlePriceField,
        formatPrice
    }
}