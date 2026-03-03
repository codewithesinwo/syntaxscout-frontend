const TOKEN_KEY = "token";

export function setToken(token) {
  try {
    localStorage.setItem(TOKEN_KEY, token);
  } catch (err) {
    console.log(err);
  }
}

export function getToken() {
  try {
    return (
      sessionStorage.getItem(TOKEN_KEY) ||
      localStorage.getItem(TOKEN_KEY) ||
      null
    );
  } catch (err) {
    console.log(err);

    return null;
  }
}

export function removeToken() {
  try {
    sessionStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(TOKEN_KEY);
  } catch (err) {
    console.log(err);
  }
}

export function setUser(user) {
  try {
    // Sanitize the role if it exists before saving
    if (user && user.role) {
      user.role = user.role.trim();
    }
    localStorage.setItem("user", JSON.stringify(user));
  } catch (err) {
    console.log(err);
  }
}