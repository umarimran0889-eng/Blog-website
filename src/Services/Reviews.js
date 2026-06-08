import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../Firebase';

const reviewsCollection = collection(db, 'ReviewsBlog');

export async function submitReview(data) {
  await addDoc(reviewsCollection, {
    ...data,
    createdAt: serverTimestamp(),
  });
}

export function subscribeToReviews(callback) {
  const q = query(reviewsCollection, orderBy('createdAt', 'desc'));
  return onSnapshot(q, (snapshot) => {
    const reviews = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(reviews);
  });
}