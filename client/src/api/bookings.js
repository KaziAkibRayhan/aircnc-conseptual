export const saveBooking = async (bookingData) => {
  const url = `${process.env.REACT_APP_API_URL}/bookings`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(bookingData),
  });
  const data = await res.json();
  return data;
};

export const getAllBookingsByEmail = async (email) => {
  const url = `${process.env.REACT_APP_API_URL}/bookings?email=${email}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const getAllBookings = async () => {
  const url = `${process.env.REACT_APP_API_URL}/bookings`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
