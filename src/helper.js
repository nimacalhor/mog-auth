import { VALID_USERNAMES } from "./constants";

export function isCredentialsValid(username, password = null) {
  if (!username || !password) return false;
  return VALID_USERNAMES.includes(username.trim());
}

export function isAdmin(username) {
  return username.trim().toLowerCase() === "ADMIN".toLowerCase();
}

export function getUserData(username) {
  const _isAdmin = isAdmin(username);
  return {
    username,
    role: _isAdmin ? "admin" : "user",
    isAdmin: _isAdmin,
    isLoggedIn: true,
  };
}

export function saveUser(userData) {
  const timestamp = new Date().getTime() + 2 * 60 * 1000; // 2 minutes in milliseconds
  const userDataWithTimestamp = { ...userData, timestamp };
  localStorage.setItem("user", JSON.stringify(userDataWithTimestamp));
}

export function getSavedUser() {
  const storedUser = localStorage.getItem('user');

  if (storedUser) {
    const parsedUser = JSON.parse(storedUser);

    if (parsedUser.timestamp && new Date().getTime() > parsedUser.timestamp) {
      localStorage.removeItem('user');
      return null;
    }

    return parsedUser;
  }

  return null;
}