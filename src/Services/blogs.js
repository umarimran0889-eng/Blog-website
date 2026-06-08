import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../Firebase';

const blogsCollection = collection(db, 'blogs');

export async function addBlog(data) {
  await addDoc(blogsCollection, {
    ...data,
    likes: 0,
    comments: 0,
    shares: 0,
    createdAt: serverTimestamp(),
  });
}

export async function deleteBlog(blogId) {
  await deleteDoc(doc(db, 'blogs', blogId));
}

export function subscribeToBlogs(callback) {
  const q = query(blogsCollection, orderBy('createdAt', 'desc'));
  return onSnapshot(q, (snapshot) => {
    const blogs = snapshot.docs.map((d) => ({
      id: d.id,
      ...d.data(),
    }));
    callback(blogs);
  });
}