import { useState } from 'react';

const usePriceField = (initialValue = 0) => {
    const [value, setValue] = useState(initialValue);

    const handlePriceField = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const cleanedValue = value.replace(/^0+/, "");
        const numericValue = cleanedValue ? parseInt(cleanedValue) : 0;

        setValue(numericValue);
        return { [name]: numericValue };
    };

    return { value, handlePriceField };
};

export default usePriceField;
