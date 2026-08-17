const { createBooking } = require('../../src/booking');

function mockLogin(email, password) {
  return email === 'parent@test.com' && password === 'Password123'
    ? { id: 'P001', role: 'PARENT' }
    : null;
}

function mockFindLsa() {
  return { id: 'LSA001', name: 'Demo Learning Support Assistant' };
}

describe('Parent to LSA booking integration flow', () => {
  test('parent can progress from login to confirmed booking', () => {
    const parent = mockLogin('parent@test.com', 'Password123');
    expect(parent.role).toBe('PARENT');

    const lsa = mockFindLsa();
    expect(lsa.id).toBe('LSA001');

    const booking = createBooking({
      parentId: parent.id,
      lsaId: lsa.id,
      date: '2026-08-18',
      time: '10:00',
    });

    expect(booking.status).toBe('CONFIRMED');
    expect(booking.parentId).toBe(parent.id);
    expect(booking.lsaId).toBe(lsa.id);
  });
});
