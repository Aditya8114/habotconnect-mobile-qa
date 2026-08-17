function isValidBookingRequest(request) {
  return Boolean(
    request &&
      request.parentId &&
      request.lsaId &&
      request.date &&
      request.time,
  );
}

function calculateBookingPrice(hourlyRate, hours) {
  if (hourlyRate < 0 || hours <= 0) {
    throw new Error('Invalid booking price inputs');
  }
  return hourlyRate * hours;
}

function createBooking(request) {
  if (!isValidBookingRequest(request)) {
    throw new Error('Invalid booking request');
  }

  return {
    id: `mock-${request.parentId}-${request.lsaId}`,
    status: 'CONFIRMED',
    parentId: request.parentId,
    lsaId: request.lsaId,
    date: request.date,
    time: request.time,
  };
}

module.exports = {
  isValidBookingRequest,
  calculateBookingPrice,
  createBooking,
};
