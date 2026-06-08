import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../../Firebase';
import { FiUser, FiShield } from 'react-icons/fi';

function UsersPanel() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'users'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setUsers(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="panel">
      <div className="panel-card">
        <h2 className="panel-card-title">All Users ({users.length})</h2>
        {users.length === 0 && <p className="panel-empty">No users yet.</p>}

        <div className="users-table-wrapper">
          <table className="users-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Role</th>
                <th>Joined</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className="user-row">
                      <div className="user-avatar">
                        {user.email?.[0]?.toUpperCase()}
                      </div>
                      <span>{user.name || 'No name'}</span>
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>
                    <span className={`role-badge ${user.role}`}>
                      {user.role === 'admin' ? <FiShield /> : <FiUser />}
                      {' '}{user.role}
                    </span>
                  </td>
                  <td>{user.createdAt?.toDate?.().toLocaleDateString() || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default UsersPanel;