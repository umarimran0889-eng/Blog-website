import app from './Firebase';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './Firebase';
import { saveUserToFirestore } from './Services/users';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const signupUser = async (email, password) => {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  await saveUserToFirestore(result.user);
  return result;
};

export const loginUser = async (email, password) => {
  const result = await signInWithEmailAndPassword(auth, email, password);

  const userDoc = await getDoc(doc(db, 'users', result.user.uid));
  if (!userDoc.exists()) {
    await saveUserToFirestore(result.user);
  }

  return result;
};

export const googleLogin = async () => {
  const result = await signInWithPopup(auth, googleProvider);

  const userDoc = await getDoc(doc(db, 'users', result.user.uid));
  if (!userDoc.exists()) {
    await saveUserToFirestore(result.user);
  }

  return result;
};

export const logoutUser = () => {
  return signOut(auth);
};

export default auth;