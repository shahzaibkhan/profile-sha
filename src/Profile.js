import React from 'react'
import Logo from './logo.png'
function Profile() {
  return (
    <div className='profile'>
      <img src={Logo} />
      <h1 className='entry-title'>
        Hey there.. I am{' '}
        <span className='underline'>
          <i>Shahzaib...</i>
        </span>
        <br />
        You can call me <i>Shah</i>
      </h1>
      <div className='introduction'>
        <p>
          I am a Technopreneur, specialized in using cutting edge web
          technologies and social-media strategies who bring products and
          campaigns from concept to a reality.{' '}
        </p>
        <p>
          By profession I am a Computer and Information System Engineer, who has
          been building and implementing Information Systems for the last 10
          years.
        </p>
        <p>
          A brilliant student and research scientist who has been awarded by
          several institutions for his ideas and research which includes IEEEP
          for his research on mobile computing.
        </p>
        <p>
          Mission for life: <br />
          <i>
            To enable individuals globally to lead successful, meaningful and
            fulfilling lives.
          </i>
        </p>
        <p>Currently Madly in Love With: Interns Pakistan / OnePush / Pulse</p>
        <p>
          I Love Challenges, If you have something creative and challenging.
          <br />
          You can contact me at:
          <br />
          Facebook: https://fb.com/shahzaib198
          <br />
          Twitter: https://twitter.com/shahzaib_khan
          <br />
          LinkedIn: https://linkedin.com/in/shahzaibkhan/
          <br />
          <br />
          Thank You!
        </p>
      </div>
    </div>
  )
}
export default Profile
