import { doc, setDoc } from 'firebase/firestore';
import { db } from '../Firebase';

const ADMIN_EMAIL = 'umarimran0889@gmail.com';

export async function saveUserToFirestore(user) {
  const isAdmin = user.email === ADMIN_EMAIL;

  await setDoc(doc(db, 'users', user.uid), {
    name: user.displayName || '',
    email: user.email,
    role: isAdmin ? 'admin' : 'user',
    createdAt: new Date(),
  });
}