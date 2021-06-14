import firebaseApp from "firebase";
import "firebase/firestore";
import "firebase/auth";

class AuthService {
  login(providerName) {
    const authProvider = new firebaseApp.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  logout() {
    return firebaseApp.auth().signOut();
  }

  onAuthStateChanged(onUserChanged) {
    firebaseApp.auth().onAuthStateChanged((user) => {
      console.log("onAuthStateChanged", user);
      onUserChanged(user);
    });
  }
}

export default AuthService;
