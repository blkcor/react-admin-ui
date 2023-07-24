import React, { useEffect } from 'react';
import "./users.scss"
type UserProps = {

};

const Users: React.FC<UserProps> = () => {
  useEffect(() => {
    console.log("users component loaded")
  })
  return <div className='users'>Users</div>
}
export default Users;
