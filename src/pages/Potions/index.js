import { useEffect, useState } from "react";
import { GetAllPotions } from "../../services/Potion/PotionService";
import Card from "./components/Card";
import Pagination from "../../components/Pagination";
import Loading from "../../components/Loading";

function Potions() {
  const pageSize = 5;
  const [pageNumber, setPageNumber] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecord, setTotalRecord] = useState(0);
  const [potionsData, setPotionsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await GetAllPotions(pageSize, pageNumber);
        setPotionsData(data.data);
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
      {potionsData.length > 0 && (
        <>
          <div className="grid grid-cols-4 gap-3">
            {potionsData.map((potion, index) => (
              <Card
                key={index}
                id={potion.id}
                image={potion.attributes.image}
                slug={potion.attributes.slug}
                difficulty={potion.attributes.difficulty}
                effect={potion.attributes.effect}
                characteristics={potion.attributes.characteristics}
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

export default Potions;
