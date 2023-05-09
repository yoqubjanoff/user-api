import React, { useState } from 'react'
import User from '../../User';

const Profile = ({ users, setToggle, toggle}) => {

  const [user, setUser] = useState(null);

  const handlePage = (data) => {
    setUser(data);
    setToggle(true);
  }

  if (toggle) return (<User user={user} setToggle={setToggle} setUser={setUser} />)

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className='text-center mb-5'>Profile users </h1>
            <div className="row">
              {users.length > 0 && users.map((user) => (
                <div className="card col-3 mx-auto my-auto me-2 mb-5 border-0" key={user.id} onClick={() => handlePage(user)}>
                  <div className="card-body">
                    <img className='img-top w-100' src={user.avatar} alt="" />
                    <h5 className="card-title mt-4">{user.first_name} {user.last_name}</h5>
                    <a href={user.email} className="card-subtitle mb-2 text-muted">{user.email}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
