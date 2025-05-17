import React, { memo } from 'react'
import './selectHousePurposeType.scss'

type Props = {
    selectedAppBar: string | null;
    onAppBarChange: (item: string) => void;
    appBarTabs: string[];
}

const SelectHousePurposeType: React.FC<Props> = ({ selectedAppBar, appBarTabs, onAppBarChange}) => {
    return (
        <div className={`tablet-filter-appbar`}>
            {appBarTabs.map((item, index) => {
                return (
                    <div
                        className={`tablet-filter-appbar__tab ${selectedAppBar === item ? 'tablet-filter-appbar__tab--active' : null}`}
                        key={index}
                        onClick={() => onAppBarChange(item)}
                    >
                        {item}
                    </div>
                );
            })}
        </div>
    )
}

export default memo(SelectHousePurposeType)