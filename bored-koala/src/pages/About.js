import React from 'react'

const About = () => {
  return (
    <div>
      <p>
        {' '}
        Bored Koala is a react hackathon project developed using two api's from
        RapidAPI and chucknorris jokes api where you can search movies name,
        ratings and more as well as music artists, their top 10 hit songs and
        lyrics and you can freshen up by reading to chucknorris jokes too.{' '}
      </p>
      <p>
        API Documentation for search movies :
        https://rapidapi.com/rapidapi/api/movie-database-imdb-alternative/
      </p>
      <p>
        API Documentation for search music :
        https://rapidapi.com/brianiswu/api/genius/
      </p>
      <p>Chucknorris joke API : https://api.chucknorris.io/</p>

      <h3>To Collaborate / contact :</h3>

      <div div className='social-info'>
        <p>Kesh Gurung</p>
        <a
          href='https://github.com/keshgurung'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fab fa-github' />
          GitHub
        </a>{' '}
        <span>&nbsp;&nbsp;</span>
        <a
          href='https://www.linkedin.com/in/gurungkesh9/'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fab fa-linkedin'></i>linkedin
        </a>
        <i className='far fa-envelope'></i>
        <p>
          <a href='mailto:gurungkesh9@gmail.com'>gurungkesh9@gmail.com</a>
        </p>
      </div>
    </div>
  )
}

export default About
