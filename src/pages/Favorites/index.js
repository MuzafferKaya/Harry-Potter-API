import React from "react";
import { useSelector } from "react-redux";
import BookCard from "../Books/components/Card";
import CharacterCard from "../Characters/components/Card";
import MovieCard from "../Movies/components/Card";
import PotionCard from "../Potions/components/Card";
import SpellCard from "../Spells/components/Card";

function Favorites() {
  const booksFavorites = useSelector((state) => state.bookFavoriterStore.books);
  const charactersFavorites = useSelector(
    (state) => state.characterFavoriterStore.characters
  );
  const moviesFavorites = useSelector(
    (state) => state.movieFavoriterStore.movies
  );
  const potionsFavorites = useSelector(
    (state) => state.potionFavoriterStore.potions
  );
  const spellsFavorites = useSelector(
    (state) => state.spellFavoriterStore.spells
  );

  return (
    <>
      {booksFavorites.length > 0 && (
        <div className="grid grid-cols-4 gap-3">
          {booksFavorites.map((book, index) => (
            <BookCard
              key={index}
              id={book.id}
              cover={book.cover}
              slug={book.slug}
              release_date={book.release_date}
              pages={book.pages}
              author={book.author}
            />
          ))}
        </div>
      )}
      {charactersFavorites.length > 0 && (
        <div className="grid grid-cols-4 gap-3">
          {charactersFavorites.map((character, index) => (
            <CharacterCard
              key={index}
              image={character.image}
              slug={character.slug}
              id={character.id}
            />
          ))}
        </div>
      )}
      {moviesFavorites.length > 0 && (
        <div className="grid grid-cols-4 gap-3">
          {moviesFavorites.map((movie, index) => (
            <MovieCard
              key={index}
              id={movie.id}
              poster={movie.poster}
              slug={movie.slug}
              release_date={movie.release_date}
              rating={movie.rating}
              running_time={movie.running_time}
            />
          ))}
        </div>
      )}
      {potionsFavorites.length > 0 && (
        <div className="grid grid-cols-4 gap-3">
          {potionsFavorites.map((potion, index) => (
            <PotionCard
              key={index}
              id={potion.id}
              image={potion.image}
              slug={potion.slug}
              difficulty={potion.difficulty}
              effect={potion.effect}
              characteristics={potion.characteristics}
            />
          ))}
        </div>
      )}
      {spellsFavorites.length > 0 && (
        <div className="grid grid-cols-4 gap-3">
          {spellsFavorites.map((spell, index) => (
            <SpellCard
              key={index}
              id={spell.id}
              image={spell.image}
              slug={spell.slug}
              category={spell.category}
              incantation={spell.incantation}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Favorites;
