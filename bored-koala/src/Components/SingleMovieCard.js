import React from 'react'
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SingleMovieCard = ({
  Title,
  Genre,
  Plot,
  Poster,
  Released,
  Runtime,
  Writer,
  Director,
  Language,
  imdbRating,
  Metascore,
  Country,
  BoxOffice,
}) => {
  return (
    <div className='single-movie'>
      <div className='ratings'>
        <p>IMDb Rating:{imdbRating}</p>
        <p>Metascore:{Metascore}</p>
      </div>
      <div className='main'>
        <div className='image'>
          <picture>
            <img src={Poster} alt={Title} />
          </picture>
        </div>
        <div className='info'>
          <p classname='title'>{Title}</p>
          <p>Released: {Released}</p>
          <p>Runtime: {Runtime}</p>
          <p>Genre: {Genre}</p>
          <p>Writer: {Writer}</p>
          <p>Director: {Director}</p>
          <p className='plot'>Plot: {Plot}</p>
          <p>Language: {Language}</p>
          <p>Country: {Country}</p>
          <p>BoxOffice: {BoxOffice}</p>
        </div>
      </div>
    </div>

    //     <Card style={{ width: '50rem' }}>
    //       <Card.Img
    //         variant='top'
    //         style={{ width: '50rem', height: '30rem' }}
    //         src={Poster}
    //       />
    //       <Card.Body>
    //         <Card.Title style={{ fontSize: '30px', textAlign: 'center' }}>
    //           {Title}
    //         </Card.Title>
    //         <Card.Text style={{ textAlign: 'center' }}>
    //           imdb Rating:{imdbRating} &nbsp;&nbsp; Metascore:{Metascore}{' '}
    //         </Card.Text>
    //       </Card.Body>
    //       <ListGroup className='list-group-flush'>
    //         <ListGroupItem>Plot: {Plot}</ListGroupItem>
    //         <ListGroupItem>Released:{Released}</ListGroupItem>
    //         <ListGroupItem>Genre:{Genre}</ListGroupItem>
    //         <ListGroupItem> Writer:{Writer}</ListGroupItem>
    //         <ListGroupItem>
    //           Language:{Language} &nbsp;&nbsp; Country:{Country}
    //         </ListGroupItem>
    //         <ListGroupItem>BoxOffice:{BoxOffice}</ListGroupItem>
    //       </ListGroup>
    //       <Card.Body>
    //         <Card.Link as={Link} to={'/movies'} style={{ Align: 'center' }}>
    //           Home
    //         </Card.Link>
    //       </Card.Body>
    //     </Card>
  )
}

export default SingleMovieCard
