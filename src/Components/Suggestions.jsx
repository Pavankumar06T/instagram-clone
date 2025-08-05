import React, { useState } from 'react';
import avathar1 from '../assets/avathar1.png';
import avathar2 from '../assets/avathar2.png';
import avathar3 from '../assets/avathar3.png';

function Suggestions() {
  const [followStatus, setFollowStatus] = useState({});

  const myAccount = { name: 'My Account', avatar: avathar1 };

  const users = [
    { name: 'Pavan', avatar: avathar1 },
    { name: 'Vikki', avatar: avathar2 },
    { name: 'Guna', avatar: avathar3 },
  ];

  const toggleFollow = (name) => {
    setFollowStatus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <div className="p-3">
      {/* My Account Section */}
      <div className="d-flex align-items-center gap-2 mb-4">
        <img
          src={myAccount.avatar}
          alt="me"
          className="rounded-circle"
          style={{ width: '40px', height: '40px', objectFit: 'cover' }}
        />
        <div>
          <div className="fw-bold">{myAccount.name}</div>
          <small className="text-muted">My profile</small>
        </div>
      </div>

      <h6>Suggestions for you</h6>

      {users.map((user, index) => (
        <div key={index} className="d-flex justify-content-between align-items-center mb-2">
          <div className="d-flex align-items-center gap-2">
            <img
              src={user.avatar}
              alt="avatar"
              className="rounded-circle"
              style={{ width: '30px', height: '30px', objectFit: 'cover' }}
            />
            <span>{user.name}</span>
          </div>
          <button
            className={`btn btn-sm ${followStatus[user.name] ? 'btn-secondary' : 'btn-primary'}`}
            onClick={() => toggleFollow(user.name)}
          >
            {followStatus[user.name] ? 'Following' : 'Follow'}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;