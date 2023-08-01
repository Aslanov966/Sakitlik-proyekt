import React from 'react'
import facebook from "../Images/iconfacebook.png"
import instagram from "../Images/iconinstagram.png"
import linkedin from "../Images/iconlinkedin.png"
import telegram from "../Images/icontelegram.png"
import youtube from "../Images/iconyoutube.png"

export default function InstaFeedSocialIcons() {
  return (
    <div className='social-icons'>
      <div>
        <img src={facebook} alt="" />
      </div>
      <div>
        <img src={instagram} alt="" />
      </div>
      <div>
        <img src={linkedin} alt="" />
      </div>
      <div>
        <img src={telegram} alt="" />
      </div>
      <div>
        <img src={youtube} alt="" />
      </div>
    </div>
  )
}
