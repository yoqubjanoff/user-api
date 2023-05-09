import React from 'react'
import "./User.css"

const User = ({ setToggle, user, setUser }) => {
  return (
    <div className='userPage container'>
      <button onClick={() => {
        setToggle(false);
        setUser(-1);
      }} className='btn btn-primary back' >Back</button>

      <h1 className='text-center mb-5'>User Page</h1>
      <div className="card col-6 offset-3">
        <img className='img-top img' src={user.avatar} alt="" />
      </div>
      <div className="box d-flex justify-content-center">
        <h5 className="card-title mt-4 me-5">{user.first_name} {user.last_name}</h5>
        <h5 className="card-title mt-4 ms-5"><strong>{user.email}</strong></h5>
      </div>

    </div>
  )
}

export default User