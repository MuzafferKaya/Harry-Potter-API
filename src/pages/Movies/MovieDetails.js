import { useEffect, useState } from "react";
import { GetByIdMovie } from "../../services/Movie/MovieService";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";

function MovieDetails() {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await GetByIdMovie(movieId);
        setMovieData(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading && <Loading />}
      {movieData && (
        <div className="flex justify-center">
          <img
            className="object-cover w-full rounded-s-lg h-96 md:h-auto md:w-60"
            src={movieData.attributes.poster}
            alt=""
          />
          <div className="flex flex-col items-center bg-white border border-gray-200 rounded-e-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {movieData.attributes.slug}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {movieData.attributes.release_date}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {movieData.attributes.box_office}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {movieData.attributes.budget}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {movieData.attributes.rating}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {movieData.attributes.summary}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MovieDetails;
