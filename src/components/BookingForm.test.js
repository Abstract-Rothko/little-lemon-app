import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

const mockDispatch = jest.fn();
const mockSubmit = jest.fn();

const defaultProps = {
    availableTimes: ['17:00', '18:00', '19:00'],
    dispatch: mockDispatch,
    formData: {
        date: '2025-12-25',
        time: '17:00',
        guests: 2,
        occasion: 'Birthday',
    },
    submitForm: mockSubmit,
};

beforeEach(() => jest.clearAllMocks());

test('renders all form fields', () => {
    render(<BookingForm {...defaultProps} />);
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
});

test('renders available times as options', () => {
    render(<BookingForm {...defaultProps} />);
    expect(screen.getByRole('option', { name: '17:00' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: '19:00' })).toBeInTheDocument();
});

test('changing date dispatches UPDATE_DATE', () => {
    render(<BookingForm {...defaultProps} />);
    fireEvent.change(screen.getByLabelText(/choose date/i), {
        target: { value: '2025-12-26' }
    });
    expect(mockDispatch).toHaveBeenCalledWith({
        type: 'UPDATE_DATE',
        payload: '2025-12-26'
    });
});

test('changing time dispatches UPDATE_TIME', () => {
    render(<BookingForm {...defaultProps} />);
    fireEvent.change(screen.getByLabelText(/choose time/i), {
        target: { value: '18:00' }
    });
    expect(mockDispatch).toHaveBeenCalledWith({
        type: 'UPDATE_TIME',
        payload: '18:00'
    });
});

test('submitting calls submitForm with formData', () => {
    render(<BookingForm {...defaultProps} />);
    fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));
    expect(mockSubmit).toHaveBeenCalledWith(defaultProps.formData);
});