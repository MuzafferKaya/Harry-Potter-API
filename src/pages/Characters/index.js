import { useEffect, useState } from "react";
import { GetAllCharacters } from "../../services/Character/CharacterService";
import Card from "./components/Card";
import Pagination from "../../components/Pagination";
import Loading from "../../components/Loading";

function Characters() {
  const pageSize = 5;
  const [pageNumber, setPageNumber] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecord, setTotalRecord] = useState(0);
  const [charactersData, setCharactersData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await GetAllCharacters(pageSize, pageNumber);
        setCharactersData(data.data);
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
      {charactersData.length > 0 && (
        <>
          <div className="grid grid-cols-4 gap-3">
            {charactersData.map((character, index) => (
              <Card
                key={index}
                id={character.id}
                image={character.attributes.image}
                slug={character.attributes.slug}
              />
            ))}
          </div>
          <Pagination
            totalCount={totalRecord}
            pageSize={pageSize}
            setPageNumber={setPageNumber}
            currentPage={currentPage}
          />
        </>
      )}
    </>
  );
}

export default Characters;
