import React, { useCallback, useState } from 'react';
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
import PhoneIc from '../../../../assets/icons/PhoneIc';
import PartnersIc from '../../../../assets/icons/PartnersIc';
import ModalV1 from '../../ModalV1/ModalV1';
import { images } from '../../../../assets/images/images';

const TplnItemLinkCommonStyle = {
  marginLeft: 'auto'
}

const Header: React.FC = () => {
  const windowWidth = useWindowWidth();
  const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(false);
  const [changeCityModalVisibility, setChangeCityModalVisibility] = useState<boolean>(false);

  const handleSidebar = useCallback(() => {
    setSidebarIsOpen(!sidebarIsOpen)
    return sidebarIsOpen
  }, [sidebarIsOpen]);

  return (
    <header className='header'>
      <div className="header-content">
        <div className='header-tpln-top-root'>
          <div className="header-tpln-top">
            {windowWidth <= 648 && (
              <TplnItemButton
                icon={sidebarIsOpen ? <CloseIc width={18} height={18} /> : <MenuIc width={18} height={18} />}
                onClick={handleSidebar}
                minWidth={648}
              />
            )}

            {windowWidth > 648 && (
              <TplnItemButton
                icon={<LocationIc width={18} height={18} />}
                text='Baku'
                onClick={() => setChangeCityModalVisibility(true)}
              />
            )}

            {windowWidth > 648 && (
              <TplnItemButton
                icon={<PhoneIc width={18} height={18} />}
                text='Məsləhət'
                hoverdBlock={true}
              />
            )}

            {windowWidth >= 748 && (
              <TplnItemButton
                icon={<PartnersIc width={16} height={16} />}
                text='Tərəfdaşlara'
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
        </div>
        <div className="header-tpln-bottom-root">
          <div className="header-tpln-bottom">
            {windowWidth > 648 && (
              <div className="tpln-bottom-logo">
                <a href="/">
                  <img src='' alt="LOGO" className='logo-img' />
                </a>
              </div>
            )}

            <TplnItemLink
              link={'/'}
              text={'Alqı'}
              availableHover={false}
              underline={true}
              minWidth={648}
            />

            <TplnItemLink
              link={'/'}
              text={'Kirayə'}
              availableHover={false}
              underline={true}
              minWidth={648}
            />

            <TplnItemLink
              link={'/'}
              text={'Yeni tikililər'}
              availableHover={false}
              underline={true}
              minWidth={648}
            />

            <TplnItemLink
              link={'/'}
              text={'İpoteka'}
              availableHover={false}
              underline={true}
              minWidth={648}
            />

            <TplnItemLink
              link={'/'}
              text={'Əmlak xəbərləri'}
              availableHover={false}
              underline={true}
              minWidth={648}
            />

          </div>
        </div>
        {windowWidth <= 648 && (
          <Sidebar sidebarIsOpen={sidebarIsOpen} openModal={() => setChangeCityModalVisibility(true)} />
        )}
      </div>
      <ModalV1
        isOpen={changeCityModalVisibility}
        onClose={() => setChangeCityModalVisibility(false)}
        onCloseText='Baqla'
        modalTitle='Şəhər və ya bölgə seçimi'>
        <p></p>
      </ModalV1>
    </header>
  );
}

export default memo(Header);