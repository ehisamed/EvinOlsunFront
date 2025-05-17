import React from 'react';
import { HERO_CONSTANTS } from '../../../../../../constants/HeroConstants';
import CheckboxItem from '../../../CheckboxItem/CheckboxItem';
import './selectEstateTypeCheckbox.scss'

type Props = {
    selectedAppBar: string | null;
    selectedEstateTypes: string[];
    onCheckboxChange: (type: string) => void;
};

const SelectEstateTypeCheckbox: React.FC<Props> = ({ selectedAppBar, selectedEstateTypes, onCheckboxChange }) => {
    const types = selectedAppBar === HERO_CONSTANTS.filter.HOUSE_TYPE.TYPES[0]
        ? HERO_CONSTANTS.filter.HOUSE_TYPE.LIVING.types
        : HERO_CONSTANTS.filter.HOUSE_TYPE.COMMERCIAL.types;

    return (
        <div className="tablet-filter-multicheckbox">
            {types.map(type => (
                <CheckboxItem
                    key={type}
                    label={type}
                    checked={selectedEstateTypes.includes(type)}
                    onChange={() => onCheckboxChange(type)}
                />
            ))}
        </div>
    );
};

export default SelectEstateTypeCheckbox;
