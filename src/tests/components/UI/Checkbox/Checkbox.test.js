import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from '../../../../lib/components/UI/Checkbox/Checkbox';

describe('Checkbox component props', () => {
    test('Initially renders with checkbox checked', () => {
        // Arrange
        render(<Checkbox checked={true} />);
    
        // Assert
        const checkboxElement = screen.getByDisplayValue("on");
        expect(checkboxElement).toBeChecked();
    });
    
    test('Initially renders with checkbox unchecked', () => {
        // Arrange
        render(<Checkbox checked={false} />);
    
        // Assert
        const checkboxElement = screen.getByDisplayValue("on");
        expect(checkboxElement).not.toBeChecked();
    });

    test('Checkmark icon class is customizeable', () => {
        // Arrange
        const { container } = render(<Checkbox checkIcon="fas fa-times" />)
        
        // Assert
        expect(container.firstChild.querySelector('label span i').className).toEqual(expect.stringContaining("fas fa-times"));
    });
    
    test('Renders Checkbox label text via prop', () => {
        // Arrange
        render(<Checkbox label="Would you like to subscribe to our newsletter?"/>);
    
        // Assert
        const labelElement = screen.getByLabelText("Would you like to subscribe to our newsletter?");
        expect(labelElement).toBeInTheDocument();
    });
});

describe('Checkbox component interaction', () => {
    test('Clicking label toggles Checkbox value', () => {
        // Arrange
        render(<Checkbox label="Test Checkbox"/>);

        // Act
        const checkboxElement = screen.getByDisplayValue("on");
        userEvent.click(checkboxElement);
    
        // Assert     
        expect(checkboxElement).toBeChecked();

        // Act
        userEvent.click(checkboxElement);
    
        // Assert
        expect(checkboxElement).not.toBeChecked();
    });
});