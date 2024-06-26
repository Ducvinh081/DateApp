const URL_NETWORK = "192.168.0.27:5000"

// export const BASE_URL = "http://192.168.1.120:5000/"
// tesst
const URL_USER = "/api/users"
const URL_ACCOUNT = "/api/account"

export const URL_SIGN_UP_EMAIL = URL_NETWORK + URL_ACCOUNT + "/register"
export const URL_SIGN_IN_EMAIL = URL_NETWORK + URL_ACCOUNT + "/login"
export const URL_SIGN_IN_FACEBOOK = URL_NETWORK + URL_ACCOUNT + "/facebook-login"
export const URL_POST_FORGOT_PASSWORD = URL_NETWORK + URL_ACCOUNT + "/forgot-password"
export const URL_POST_FCM_TOKEN = URL_NETWORK + URL_ACCOUNT + "/fcm-token"
export const URL_POST_DELETE_FCM_TOKEN = URL_NETWORK + URL_ACCOUNT + "/revoke-fcm-token"

export const URL_GET_IMAGE_SWIPE = URL_NETWORK + URL_USER + "/pagination"
export const URL_POST_LIKE_IMAGE_SWIPE = URL_NETWORK + URL_USER
export const URL_GET_MESSAGES = URL_NETWORK + URL_USER
export const URL_GET_USER_DETAIL = URL_NETWORK + URL_USER
export const URL_POST_MARK_MESSAGES = URL_NETWORK + URL_USER
export const URL_GET_PROFILE = URL_NETWORK + URL_USER
export const URL_PUT_PROFILE = URL_NETWORK + URL_USER
export const URL_POST_PHOTOS = URL_NETWORK + URL_USER
export const URL_GET_USER_LIKED_ME = URL_NETWORK + URL_USER + "/pagination"
export const URL_GET_MESSAGES_CONVERSATION = URL_NETWORK + URL_USER
export const URL_POST_MESSAGES_CONVERSATION = URL_NETWORK + URL_USER
export const URL_POST_REPORT = URL_NETWORK + URL_USER
export const URL_GET_TOP_PICK = URL_NETWORK + URL_USER + "/pagination"
export const URL_GET_USER_MATCHED_ME = URL_NETWORK + URL_USER + "/pagination"
export const URL_GET_INTERESTS = URL_NETWORK + URL_USER
export const URL_REMOVE_PHOTOS = URL_NETWORK + URL_USER

//realtime
export const URL_CONNECT_SERVER_MESSAGES = URL_NETWORK + "/hubs/messages"
export const URL_CONNECT_SERVER_NOTIFICATION = URL_NETWORK + "/hubs/notification"


//LOCATION
export const URL_GET_LOCATION_DETAIL = "http://api.positionstack.com/v1/reverse"

//Firebase Messages
export const URL_PUSH_FIREBASE_MESSAGES = "https://fcm.googleapis.com/fcm/send"
//http://localhost:5000/api/users/pagination?pageNumber=1&pageSize=10&likers=true
//http://localhost:5000/api/users/3/messages/16/read