import React from 'react';
import "./menu.scss"
import { Link } from 'react-router-dom';
import { menu } from '../../data'

type MenuProps = {

};

const Menu: React.FC<MenuProps> = () => {

  return <div className='menu'>
    {
      menu.map((item) => {
        return (
          <div className="item">
            <span className="title">{item.title}</span>
            {item.listItems.map((listItem) => {
              return (
                <Link to={listItem.url} className='listItem'>
                  <img src={listItem.icon} className='logo' />
                  <span className="listItemTitle">
                    {listItem.title}
                  </span>
                </Link>
              )
            })}
          </div>
        )
      })
    }

  </div>
}
export default Menu;
