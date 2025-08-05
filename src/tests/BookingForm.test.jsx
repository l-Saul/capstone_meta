import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../components/BookingForm';

test('renders booking form and submits correctly', () => {
  render(<BookingForm />);

  const nameInput = screen.getByLabelText(/Name/i);
  const dateInput = screen.getByLabelText(/Date/i);
  const timeInput = screen.getByLabelText(/Time/i);
  const guestsInput = screen.getByLabelText(/Number of Guests/i);
  const submitButton = screen.getByRole('button');

  fireEvent.change(nameInput, { target: { value: 'Fihaas' } });
  fireEvent.change(dateInput, { target: { value: '2025-08-10' } });
  fireEvent.change(timeInput, { target: { value: '19:00' } });
  fireEvent.change(guestsInput, { target: { value: 4 } });

  fireEvent.click(submitButton);

  expect(screen.getByText(/Booking confirmed!/i)).toBeInTheDocument();
});
