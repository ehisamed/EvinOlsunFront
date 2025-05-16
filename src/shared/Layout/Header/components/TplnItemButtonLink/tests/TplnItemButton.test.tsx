import { render, screen } from '@testing-library/react';
import TplnItemButton from '../TplnItemButton';
import useWindowWidth from '../../../../../../hooks/useWindowWidth';
import LocationIc from '../../../../../../assets/icons/LocationIc';


jest.mock('../../../../../../../hooks/useWindowWidth.tsx', () => jest.fn());

describe('TplnItemButton', () => {
    test('рендерится с текстом, когда ширина окна >= 585', () => {
      (useWindowWidth as jest.Mock).mockReturnValue(1200);

      render(<TplnItemButton text='Baki' icon={<LocationIc />}/>);
      expect(screen.getByText('Baki')).toBeInTheDocument();
    });

    test('текст текс не рендерится, когда ширина окна <= 585', () => {
        (useWindowWidth as jest.Mock).mockReturnValue(500);

        render(<TplnItemButton text="Baki" icon={<LocationIc />}/>);
        expect(screen.queryByText('Elan yerləşdir')).not.toBeInTheDocument();
    });
    
})