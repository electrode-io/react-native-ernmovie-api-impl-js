import { MoviesApi } from 'react-native-ernmovie-api'

MoviesApi.requests().registerGetTopRatedMoviesRequestHandler((requestData) => {
  let movies = [{
    title: 'TitanicJS',
    releaseYear: 1997,
    ratings: '4.5',
    imageUrl: 'http://bit.ly/2hnU8mq',
    description: 'Titanic'
  }, {
    title: 'AvatarJS',
    releaseYear: 2009,
    ratings: '4.0',
    imageUrl: 'http://bit.ly/2xAX0Cv',
    description: 'Avatar'
  }]
  return Promise.resolve(movies)
})

MoviesApi.requests().registerGetMovieDetailRequestHandler((requestData) => {
  //TODO: Write your implementation and resolve or reject the promise
  //return Promise.resolve(result) || Promise.reject(err)
})
