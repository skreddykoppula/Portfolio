import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/koppulasaikrishnareddy/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/skreddykoppula" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://twitter.com/SkreddyKoppula?t=VNEmIJhSvEg0MQt74GiktQ&s=09" target="_blank" rel="noreferrer" ><FaTwitter  /></a>
    </div>
  )
}

export default HeaderSocials