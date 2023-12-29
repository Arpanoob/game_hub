import React from 'react'
import useGenre from '../model/useGenre'
import GenreList from '../View/genreList';
function Genre() {
    const {genre,isLoading,error} = useGenre();
  return (
    <GenreList genre={genre} isLoading={isLoading} error={error}/>
  )
}

export default Genre
