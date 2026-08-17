const {
  calculateBookingPrice,
  createBooking,
  isValidBookingRequest,
} = require('../../src/booking');

describe('Booking domain rules', () => {
  test('accepts a complete booking request', () => {
    expect(
      isValidBookingRequest({
        parentId: 'P001',
        lsaId: 'LSA001',
        date: '2026-08-18',
        time: '10:00',
      }),
    ).toBe(true);
  });

  test('rejects a booking request with missing date', () => {
    expect(
      isValidBookingRequest({
        parentId: 'P001',
        lsaId: 'LSA001',
        time: '10:00',
      }),
    ).toBe(false);
  });

  test('calculates booking price', () => {
    expect(calculateBookingPrice(500, 2)).toBe(1000);
  });

  test('creates a confirmed booking', () => {
    const booking = createBooking({
      parentId: 'P001',
      lsaId: 'LSA001',
      date: '2026-08-18',
      time: '10:00',
    });

    expect(booking.status).toBe('CONFIRMED');
  });
});
