import Cookies from "js-cookie";

function setAccessToken(token) {
  Cookies.set("access_token", token, {
    sameSite: "None",
    secure: true, // This should be set for HTTPS connections
    expires: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000), // Expires in 2 days
  });
}
function decodeJwt(token) {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  } catch (error) {
    //if token is ivalid
    return null;
  }
}

function validateToken(decodedToken) {
  return decodedToken && Date.now() < decodedToken.exp * 1000;
}

function checkExistingValidToken(tokenName) {
  const existingToken = Cookies.get(tokenName);
  const decodedToken = decodeJwt(existingToken);

  return !!validateToken(decodedToken);
}

function clearExistingToken(tokenName) {
  Cookies.remove(tokenName);
}

export { decodeJwt, setAccessToken, validateToken, checkExistingValidToken, clearExistingToken };
