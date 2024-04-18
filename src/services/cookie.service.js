import Cookies from "js-cookie"

function getAccessTokenWithCookie() {
  return Cookies.get("access_token")
}

export default getAccessTokenWithCookie