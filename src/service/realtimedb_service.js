import { firebaseDatabase } from "./firebase";

class DBService {
  writeData(userId, userInfo) {
    firebaseDatabase.ref(`${userId}/cards/${userInfo.id}`).set(userInfo);
  }

  readData(userId, onUpdate) {
    var starCountRef = firebaseDatabase.ref(`${userId}/cards`);
    starCountRef.on("value", (snapshot) => {
      const data = snapshot.val();
      data && onUpdate(data);
    });
    return () => starCountRef.off();
  }

  removeData(userId, userInfo) {
    firebaseDatabase.ref(`${userId}/cards/${userInfo.id}`).remove();
  }
}
export default DBService;
