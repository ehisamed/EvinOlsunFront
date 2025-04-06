/* eslint-disable jest/valid-title */
import { render, screen } from '@testing-library/react';
import TplnItemLink from '../TplnItemLink';
import useWindowWidth from '../../../../../../../hooks/useWindowWidth';
import LocationIc from '../../../../../../../assets/icons/LocationIc';

jest.mock('../../../../../../../hooks/useWindowWidth', () => jest.fn());

describe('TplnItemLink', () => {
    test('рендерится с текстом, когда ширина окна >= 585', () => {
        (useWindowWidth as jest.Mock).mockReturnValue(1200);

        render(<TplnItemLink text="Elan yerləşdir" icon={<LocationIc />} link="/" />);
        expect(screen.getByText('Elan yerləşdir')).toBeInTheDocument();
    });

    test('текст текс не рендерится, когда ширина окна <= 585', () => {
        (useWindowWidth as jest.Mock).mockReturnValue(500);

        render(<TplnItemLink text="Elan yerləşdir" icon={<LocationIc />} link="/" />);
        expect(screen.queryByText('Elan yerləşdir')).not.toBeInTheDocument();
    });
})
