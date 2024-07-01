import { useEffect, useState } from "react";
import { GetAllMovies } from "../../services/Movie/MovieService";
import Card from "./components/Card";
import Pagination from "../../components/Pagination";
import Loading from "../../components/Loading";

function Movies() {
  const pageSize = 5;
  const [pageNumber, setPageNumber] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecord, setTotalRecord] = useState(0);
  const [moviesData, setMoviesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await GetAllMovies(pageSize, pageNumber);
        setMoviesData(data.data);
        setCurrentPage(data.meta.pagination.current);
        setTotalRecord(data.meta.pagination.records);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchData();
  }, [pageNumber]);

  return (
    <>
      {loading && <Loading />}
      {moviesData.length > 0 && (
        <div className="grid grid-cols-4 gap-3">
          {moviesData.map((movie, index) => (
            <Card
              key={index}
              id={movie.id}
              poster={movie.attributes.poster}
              slug={movie.attributes.slug}
              release_date={movie.attributes.release_date}
              rating={movie.attributes.rating}
              running_time={movie.attributes.running_time}
            />
          ))}
        </div>
      )}
      <Pagination
        totalCount={totalRecord}
        pageSize={pageSize}
        setPageNumber={setPageNumber}
        currentPage={currentPage}
      />
    </>
  );
}

export default Movies;
