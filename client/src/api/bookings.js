export const saveBooking = async (bookingData) => {
  const url = `${process.env.REACT_APP_API_URL}/bookings`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("aircnc-token")}`,
    },
    body: JSON.stringify(bookingData),
  });
  const data = await res.json();
  return data;
};

export const getBookings = async (email) => {
  const url = `${process.env.REACT_APP_API_URL}/bookings?email=${email}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("aircnc-token")}`,
    },
  });
  const data = await res.json();
  return data;
};

export const getAllBookings = async () => {
  const url = `${process.env.REACT_APP_API_URL}/bookings`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("aircnc-token")}`,
    },
  });
  const data = await res.json();
  return data;
};

// Delete a Booking
export const deleteBooking = async (id) => {
  const url = `${process.env.REACT_APP_API_URL}/bookings/${id}`;
  const res = await fetch(url, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${localStorage.getItem("aircnc-token")}`,
    },
  });
  const data = await res.json();
  return data;
};

export const getPaymentIntent = async (price) => {
  const url = `${process.env.REACT_APP_API_URL}/create-payment-intent`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("aircnc-token")}`,
    },
    body: JSON.stringify({ price }),
  });
  const data = await res.json();
  return data;
};
