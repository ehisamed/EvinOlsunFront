import React, { useState, memo } from 'react';
import './sidebar.scss';
import SidebarNavItem from '../SidebarNavItem/SidebarNavItem';
import Dropdown from '../Dropdown/Dropdown';
import DropdownItem from '../Dropdown/DropdownItem';
import LocationIc from '../../../../../../assets/icons/LocationIc';

type Props = {
  city?: string;
  sidebarIsOpen?: boolean;
}

const Sidebar: React.FC<Props> = ({ city, sidebarIsOpen }) => {
  const [dropdownStates, setDropdownStates] = useState<{ [key: string]: boolean }>({
    realEstatePurchase: false,
    realEstateRental: false,
    realEstateIpotek: false
  });

  const handleDropdown = (dropdownKey: string) => {
    setDropdownStates(prevStates => ({
      ...prevStates,
      [dropdownKey]: !prevStates[dropdownKey],
    }));
  }

  return (
    <section className={`sidebar ${sidebarIsOpen ? 'sidebar-open' : ''}`}>
      <SidebarNavItem title='NewYork' icon={<LocationIc />} buttonText='Dəyiş'/>
      <Dropdown
        title='Daşınmaz əmlak alışı'
        onClick={() => handleDropdown('realEstatePurchase')}
        isOpen={dropdownStates.realEstatePurchase}
        listItems={[
          <DropdownItem key="1" title="Mənzil" navigateTo="/alqı" />,
          <DropdownItem key="2" title="Yeni tikililər" navigateTo="/satış" />,
          <DropdownItem key="3" title="Torpaq" navigateTo="/kirayə" />,
          <DropdownItem key="4" title="Ofis" navigateTo="/kirayə" />,
        ]}
      />

      <Dropdown
        title='Daşınmaz əmlakın icarəsi'
        onClick={() => handleDropdown('realEstateRental')}
        isOpen={dropdownStates.realEstateRental}
        listItems={[
          <DropdownItem key="1" title="Uzunmüddətli icarə" navigateTo="/alqı" />,
          <DropdownItem key="2" title="Qısamüddətli icarə" navigateTo="/satış" />,
          <DropdownItem key="3" title="Etibarlı kirayəyə vermək" navigateTo="/kirayə" />,
          <DropdownItem key="4" title="Elanı yerləşdirmək" navigateTo="/kirayə" />,
        ]}
      />

      <Dropdown
        title='İpoteka'
        onClick={() => handleDropdown('realEstateIpotek')}
        isOpen={dropdownStates.realEstateIpotek}
        listItems={[
          <DropdownItem key="1" title="İpoteka kalkulyatoru" navigateTo="/alqı" />,
          <DropdownItem key="2" title="Zamin ilə kredit" navigateTo="/satış" />,
          <DropdownItem key="3" title="Bütün ipoteka kreditleri" navigateTo="/kirayə" />,
        ]}
      />
      <SidebarNavItem title={'Mobil Tətbiqi yüklə'} buttonText='Yüklə'/>

      <SidebarNavItem title={'Əmlak xəbərləri'}/>

      <div className="" style={{ height: '50px'}}></div>
    </section>
  )
}

export default memo(Sidebar);