import firebaseApp from "firebase";

class DBService {
  writeData(userId, userInfo) {
    firebaseApp.database().ref(`${userId}/cards/${userInfo.id}`).set(userInfo);
  }

  async readUserData(userId, userInfo) {
    var starCountRef = firebaseApp
      .database()
      .ref(`${userId}/cards/${userInfo.id}`);

    await starCountRef.on("value", (snapshot) => {
      const data = snapshot.val();
      //updateStarCount(postElement, data);
    });
  }
}
export default DBService;
