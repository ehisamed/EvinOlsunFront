import React, { useState } from 'react';
import './header.style.scss';
import TplnItemLink from './components/TplnItemButtonLink/TplnItemLink';
import TplnItemButton from './components/TplnItemButtonLink/TplnItemButton';
import LocationIc from '../../../../assets/icons/LocationIc';
import AddAdtIc from '../../../../assets/icons/AddAdtIc';
import FavoriteIc from '../../../../assets/icons/FavoriteIc';
import NotoficationIc from '../../../../assets/icons/NotoficationIc';
import UserLoginIc from '../../../../assets/icons/UserLoginIc';
import useWindowWidth from '../../../../hooks/useWindowWidth';
import MenuIc from '../../../../assets/icons/MenuIc';
import CloseIc from '../../../../assets/icons/CloseIc';
import Sidebar from './components/Sidebar/Sidebar';
import { memo } from 'react';

const TplnItemLinkCommonStyle = {
  marginLeft: 'auto'
}

const Header: React.FC = () => {
  const windowWidth = useWindowWidth();
  const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(false);

  const handleSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen)
    return sidebarIsOpen
  }

  return (
    <header className='header'>
      <div className="header-content">
        <div className="header-tpln">
          {windowWidth >= 585 && (
            <TplnItemButton
              icon={<LocationIc width={18} height={18} />}
              text='Baku'
            />
          )}
          {windowWidth <= 585 && (
            <TplnItemButton
              icon={sidebarIsOpen ? <CloseIc width={18} height={18} /> : <MenuIc width={18} height={18} />}
              changeIconOnClick={true}
              text='Baku'
              onClick={handleSidebar}
            />
          )}
          <TplnItemLink
            icon={<FavoriteIc width={18} height={18} />}
            link={'/'}
            text={''}
            commonStyles={TplnItemLinkCommonStyle}
          />
          <TplnItemLink
            icon={<NotoficationIc width={18} height={18} />}
            link={'/'}
            text={''}
            isNotification={true}
            notificationCount={5}
          />
          <TplnItemLink
            icon={<AddAdtIc width={18} height={18} />}
            minWidth={585}
            link={'/'}
            text={'Elan yerləşdir'}
          />
          <TplnItemLink
            icon={<UserLoginIc width={18} height={18} />}
            link={'/'}
            text={'Daxil ol'}
          />
        </div>
        {windowWidth <= 585 && (
          <Sidebar sidebarIsOpen={sidebarIsOpen} />
        )}
      </div>
    </header>
  );
}

export default memo(Header);