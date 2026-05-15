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
    expect(screen.getByLabelText(/^date$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^time$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/total guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
});

test('renders available times as options', () => {
    render(<BookingForm {...defaultProps} />);
    expect(screen.getByRole('option', { name: '17:00' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: '19:00' })).toBeInTheDocument();
});

test('changing date dispatches UPDATE_DATE', () => {
    render(<BookingForm {...defaultProps} />);
    fireEvent.change(screen.getByLabelText(/^date$/i), {
        target: { value: '2025-12-26' }
    });
    expect(mockDispatch).toHaveBeenCalledWith({
        type: 'UPDATE_DATE',
        payload: '2025-12-26'
    });
});

test('changing time dispatches UPDATE_TIME', () => {
    render(<BookingForm {...defaultProps} />);
    fireEvent.change(screen.getByLabelText(/^time$/i), {
        target: { value: '18:00' }
    });
    expect(mockDispatch).toHaveBeenCalledWith({
        type: 'UPDATE_TIME',
        payload: '18:00'
    });
});

test('submitting calls submitForm with formData', () => {
    const futureProps = {
        ...defaultProps,
        formData: { ...defaultProps.formData, date: '2027-12-25' },
    };
    render(<BookingForm {...futureProps} />);
    fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));
    expect(mockSubmit).toHaveBeenCalledWith(futureProps.formData);
});

test('shows error when date is in the past', () => {
    render(<BookingForm {...defaultProps} />);
    fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));
    expect(screen.getByText(/date cannot be in the past/i)).toBeInTheDocument();
    expect(mockSubmit).not.toHaveBeenCalled();
});

test('shows error when guests is out of range', () => {
    const props = {
        ...defaultProps,
        formData: { ...defaultProps.formData, date: '2027-12-25', guests: 15 },
    };
    render(<BookingForm {...props} />);
    fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));
    expect(screen.getByText(/between 1 and 10/i)).toBeInTheDocument();
    expect(mockSubmit).not.toHaveBeenCalled();
});

test('clears date error when date changes', () => {
    render(<BookingForm {...defaultProps} />);
    fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));
    expect(screen.getByText(/date cannot be in the past/i)).toBeInTheDocument();
    fireEvent.change(screen.getByLabelText(/^date$/i), {
        target: { value: '2027-12-25' }
    });
    expect(screen.queryByText(/date cannot be in the past/i)).not.toBeInTheDocument();
});