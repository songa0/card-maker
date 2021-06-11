import firebaseApp from "firebase";
import "firebase/firestore";
import "firebase/auth";
import { useHistory } from "react-router";

class AuthService {
  login(providerName) {
    const authProvider = new firebaseApp.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  logout() {
    return firebaseApp.auth().signOut();
  }
}

export default AuthService;
