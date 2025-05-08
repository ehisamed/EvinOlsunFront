import React, { memo } from 'react'
import './tabletAppBar.scss'

type TabletAppBarProps = {
    selectedAppBar: string | null;
    onAppBarChange: (item: string) => void;
    appBarTabs: string[];
}

const TabletAppBar: React.FC<TabletAppBarProps> = ({ selectedAppBar, appBarTabs, onAppBarChange}) => {
    return (
        <div className={`tablet-filter-appbar`}>
            {appBarTabs.map((item, index) => {
                return (
                    <div
                        className={`appbar-tab ${selectedAppBar === item ? 'active-appbar-tab' : null}`}
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

export default memo(TabletAppBar)