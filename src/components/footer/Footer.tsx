import React from 'react';
import "./footer.scss"

type FooterProps = {

};

const Footer: React.FC<FooterProps> = () => {

  return <div className='footer'>
    <span>Valorant Admin</span>
    <span>© 2023 Blkcor</span>
  </div>
}
export default Footer;
