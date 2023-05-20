import { defineStore } from "pinia";
import router from "../router/index.js";
import { auth } from "../firebase/config.js"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { getDatabase, ref, set, get, push } from "firebase/database";

const db = getDatabase()
const chatMessagesRef = ref(db, 'chat');

export const useAuthStore = defineStore({
    id: 'storeAuth',
    state: () => {
        return {
            errorMsg: '',
            email: '',
            password: '',
            nickname: '',
            message: '',
            user: {

            }
        }
    },
    actions: {
        writeOnChat(userId, username, message) {
            if (message != '') {
                const newMessageRef = push(chatMessagesRef);
                set(newMessageRef, {
                    userId: userId,
                    username: username,
                    message: message,
                    time: new Date().toLocaleTimeString()
                })
                this.message = ""
            }
        },
        writeUserData(userId, nick, email) {
            const db = getDatabase();
            set(ref(db, 'users/' + userId), {
                username: nick,
                email: email,
            });
        },
        getUserNickname(userId) {
            const db = getDatabase();
            const usernameRef = ref(db, 'users/' + userId + '/username');
            get(usernameRef)
                .then((snapshot) => {
                    if (snapshot.val() != null) {
                        this.nickname = snapshot.val()
                    }
                })
                .catch((err) => {
                    return "undefined"
                })
        },
        init() {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    this.user.id = user.uid
                    this.getUserNickname(user.uid)
                    this.user.email = user.email
                    router.replace({ name: 'chat' })
                } else {
                    this.user = {}
                    router.replace({ name: 'login' })
                }
            })
        },
        async signInUser() {
            try {
                const user = await signInWithEmailAndPassword(auth, this.email, this.password)
                if (user) {
                    this.getUserNickname(this.user.id)
                    router.replace({ name: 'chat' })
                }
            } catch (error) {
                switch (error.code) {
                    case "auth/invalid-email":
                        this.errorMsg = "Invalid email";
                        break;
                    case "auth/user-not-found":
                        this.errorMsg = "No account with that email was found";
                        break;
                    case "auth/wrong-password":
                        this.errorMsg = "Incorrect password";
                        break;
                    default:
                        this.errorMsg = "Email or password was incorrect";
                        break;
                }
            }
        },
        async registerUser() {
            try {
                const user = await createUserWithEmailAndPassword(auth, this.email, this.password)
                if (user) {
                    this.writeUserData(this.user.id, this.nickname, this.user.email)
                    router.replace({ name: 'chat' })
                }
            } catch (error) {
                switch (error.code) {
                    case "auth/email-already-in-use":
                        this.errorMsg = "Email already in use";
                        break;
                    default:
                        this.errorMsg = "Something go wrong";
                        break;
                }
            }
        },
        async logout() {
            await signOut(auth)
            router.replace({ name: 'login' })
            this.email = ""
            this.password = ""
            this.errorMsg = ""
            this.nickname = ""
        }
    }
})