export const hostRequest = async (hostData) => {
  const url = `${process.env.REACT_APP_API_URL}/user/${hostData?.email}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem('aircnc-token')}`,
    },
    body: JSON.stringify(hostData),
  });
  const data = await res.json();
  return data;
};

export const getRole = async (email) => {
  const url = `${process.env.REACT_APP_API_URL}/user/${email}`;
  const res = await fetch(url, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("aircnc-token")}`,
    },
  });
  const user = await res.json();
  return user?.role;
};

// Get All Users
export const getAllUsers = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("aircnc-token")}`,
    },
  });

  const users = await response.json();

  return users;
};

export const makeHost = async (user) => {
  delete user._id;
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/user/${user?.email}`,
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem('aircnc-token')}`,
      },
      body: JSON.stringify({ ...user, role: "host" }),
    }
  );
  const users = await response.json();

  return users;
};
