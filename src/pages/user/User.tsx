import React from 'react';
import Single from '../../components/single/Single';
import { singleUser } from '../../data'
type UserProps = {

};

const User: React.FC<UserProps> = () => {

  return (
    <div className="user">
      <Single {...singleUser} />
    </div>
  )
}
export default User;
