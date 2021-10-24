import { render, screen } from '@testing-library/react';
import { LoadScreen } from '../../../../lib/components/UI/LoadScreen/LoadScreen';

test('Renders loading message', () => {
    render(<LoadScreen />);
    const linkElement = screen.getByText(/Loading/i);
    expect(linkElement).toBeInTheDocument();
  });