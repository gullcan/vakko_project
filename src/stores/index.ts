import { defineStore } from "vue";
import {
  collection,
  getDocs,
  updateDoc,
  arrayUnion,
  DocumentData,
  query,
  where,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/firestore";
import { db } from "../firebase/index";

export const authStore = defineStore("auth", {
  state: () => ({
    registerCheck: false,
    user: null as DocumentData | null,
  }),
  actions: {
    setUser(user: DocumentData) {
      this.user = user;
    },

    async setRegister(userData) {
      if (
        userData.password != null &&
        userData.password == userData.password2
      ) {
        const data = {
          ...userData,
          basket: [],
        };
        delete data.password2;

        try {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            data.email,
            data.password
          );
          const user = userCredential.user;

          await setDoc(doc(db, "users", user.uid), {
            userId: user.uid,
            ...data,
          });

          this.registerCheck = true;
        } catch (error) {
          console.error("Error creating user", error);
        }
      }
    },

    async setLogin(userData) {
      let user = { ...userData };

      const docRef = doc(db, "users", user.email);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        if (user.password !== docSnap.data().password) {
          alert("Şifre hatalı");
        } else {
          user = docSnap.data();
          delete user.password;
          this.setUser(user);
        }
      } else {
        alert("Böyle bir hesap yok");
      }
    },
  },

  getters: {
    getRegisterCheck: (state) => state.registerCheck,
    isAuth: (state) => state.user !== null,
    getUser: (state) => state.user,
  }
}

