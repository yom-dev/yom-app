// import { supabase } from "./supabase";
// import { router } from "expo-router";
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from "@react-native-google-signin/google-signin";

// GoogleSignin.configure({
//   scopes: ["https://www.googleapis.com/auth/drive.readonly"],
//   webClientId:
//     "330776642226-8qjua3jh5c8eqb4786bfakhp7sg7uuah.apps.googleusercontent.com",
// });

// export const googleLogin = async () => {
//   try {
//     await GoogleSignin.hasPlayServices();
//     const userInfo = await GoogleSignin.signIn();
//     if (userInfo.idToken) {
//       const { data, error } = await supabase.auth.signInWithIdToken({
//         provider: "google",
//         token: userInfo.idToken,
//       });
//       console.log(error, data);
//     } else {
//       throw new Error("no ID token present!");
//     }
//   } catch (error: any) {
//     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//       // user cancelled the login flow
//     } else if (error.code === statusCodes.IN_PROGRESS) {
//       // operation (e.g. sign in) is in progress already
//     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//       // play services not available or outdated
//     } else {
//       // some other error happened
//     }
//   }
// };
// export default googleLogin;
