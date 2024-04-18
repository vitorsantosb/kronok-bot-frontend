import RequestManager from '@/services/requestManager.service.js';
import getBaseURL from '@/services/getApiUrl.service.js';

async function ValidateLoginUser(loginCredentials) {
  const requestManager = new RequestManager(getBaseURL());
  const user = {
    email: `${loginCredentials.email}`,
    password: `${loginCredentials.password}`,
  };
  return await requestManager.sendRequest(
    "/user/login",
    "POST",
    user
  );
}

export {ValidateLoginUser};