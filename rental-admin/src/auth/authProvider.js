// src/authProvider.js

const authProvider = {

  // -------------------------------
  // 1) LOGIN METHOD
  // Checks username & password.
  // If correct → save user info in localStorage.
  // -------------------------------
  login: ({ username, password }) => {

    // Manager login
    if (username === "manager" && password === "mgr2024") {
      const user = {
        id: 1,
        username: "manager",
        fullName: "System Manager",
        role: "manager"
      };
      localStorage.setItem("auth", JSON.stringify(user));
      return Promise.resolve();
    }

    // Staff login
    if (username === "staff" && password === "staff2024") {
      const user = {
        id: 2,
        username: "staff",
        fullName: "Staff Member",
        role: "staff"
      };
      localStorage.setItem("auth", JSON.stringify(user));
      return Promise.resolve();
    }

    // Wrong username/password
    return Promise.reject("Invalid username or password");
  },

  // -------------------------------
  // 2) LOGOUT METHOD
  // Clears the saved user.
  // -------------------------------
  logout: () => {
    localStorage.removeItem("auth");
    return Promise.resolve();
  },

  // -------------------------------
  // 3) CHECK AUTH METHOD
  // React-Admin calls this to
  // check if user is logged in.
  // -------------------------------
  checkAuth: () => {
    const auth = localStorage.getItem("auth");

    if (auth) {
      return Promise.resolve();
    }

    return Promise.reject();
  },

  // -------------------------------
  // 4) CHECK ERROR METHOD
  // We simply tell RA to ignore errors.
  // -------------------------------
  checkError: () => {
    return Promise.resolve();
  },

  // -------------------------------
  // 5) GET PERMISSIONS METHOD
  // Used for role-based access:
  // returns "manager" OR "staff".
  // -------------------------------
  getPermissions: () => {
    const auth = localStorage.getItem("auth");

    if (!auth) {
      return Promise.resolve();
    }

    const user = JSON.parse(auth);
    return Promise.resolve(user.role);
  },

  // -------------------------------
  // 6) GET IDENTITY METHOD
  // React-Admin uses this to show
  // user info in the UI.
  // Returns: { id, fullName, username }
  // -------------------------------
  getIdentity: () => {
    const auth = localStorage.getItem("auth");

    if (!auth) {
      return Promise.resolve({});
    }

    const user = JSON.parse(auth);
    return Promise.resolve({
      id: user.id,
      fullName: user.fullName,
      username: user.username
    });
  }

};

export default authProvider;
