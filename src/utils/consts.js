export const ACCESS_TOKEN = "access_token";
const APP_NAME = "Yogatta";
export const CAPITALIZED_APP = APP_NAME[0].toUpperCase();
const URL = process.env.REACT_APP_SERVER_URL;
export const SERVER_URL = URL ? `${URL}` : `http://localhost:5005/api`;
