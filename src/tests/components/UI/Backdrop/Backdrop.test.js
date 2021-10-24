import { render, screen } from '@testing-library/react';
import { Backdrop } from '../../../../lib/components/UI/Backdrop/Backdrop';

describe('Backdrop component props', () => {
    test('Initially renders with checkbox checked', () => {
        // Arrange
        const { container } = render(<Backdrop darkTheme={true} />);
    
        // Assert
        expect(container.firstChild.className).toEqual(expect.stringContaining("darkTheme"));
    });
});