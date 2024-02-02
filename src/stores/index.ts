import { defineStore } from "vue";
import {
  collection,
  getDocs,
  updateDoc,
  arrayUnion,
  DocumentData,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase/index";


export const authStore = defineStore("auth", {
  state: () => ({
    registerCheck: false,
    user: null,
  }),
  actions: {
    //@ts-ignore
    setUser(user) {
      this.user = user;
    },



    //@ts-ignore
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

        const userId = Math.floor(Math.random() * 10000) + 1;

        await setDoc(doc(db, "users", data.email), {
          userId: userId,
          ...data,
        });

        this.registerCheck = true;
      }
    },

    //@ts-ignore
    async setLogin(userData) {
      let user = {
        ...userData,
      };

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

    getRegisterCheck(state){
      return state.registerCheck
    },

    isAuth(state) {
      return state.user !== null;
    },

    getUser(state) {
      return state.user;
    }
   
  },
});
  