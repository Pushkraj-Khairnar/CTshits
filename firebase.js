import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
import { getDatabase, set , get ,ref  ,child} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";

const firebaseConfig = {
  apiKey: 
  authDomain:
  projectId: 
  storageBucket:
  messagingSenderId: 
  appId: 
  measurementId: 
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getDatabase();
export async function writeUserData(username, newUser) {
    await set(ref(db, 'users/' + username), newUser);
};

export async function readUserData(name) {

  const dbRef = ref(getDatabase());
  const snapshot = await get(child(dbRef, `users/${name}`));

  if (snapshot.exists()) {
      return await snapshot.val();
  } else {
      return '';
  }
};
