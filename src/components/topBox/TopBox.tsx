import React from 'react';
import "./topbox.scss"
import { topDealUsers } from '../../data'

type TopBoxProps = {

};

const TopBox: React.FC<TopBoxProps> = () => {

  return (
    <div className='topBox'>
      <h1>Top Deals</h1>
      <div className="list">
        {
          topDealUsers.map((user) => {
            return (
              <div className="listItem">
                <div className="user">
                  <img src={user.img} alt="" />
                  <div className="userTexts">
                    <span className='username'>{user.username}</span>
                    <span className='email'>{user.email}</span>
                  </div>
                </div>
                <span className='amount'>${user.amount}</span>
              </div>
            )
          }
          )
        }
      </div>
    </div>
  )
}
export default TopBox;
