import { useEffect, useState } from "react";
import { GetAllSpells } from "../../services/Spell/SpellService";
import Card from "./components/Card";
import Pagination from "../../components/Pagination";
import Loading from "../../components/Loading";

function Spells() {
  const pageSize = 5;
  const [pageNumber, setPageNumber] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecord, setTotalRecord] = useState(0);
  const [spellsData, setSpellsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await GetAllSpells(pageSize, pageNumber);
        setSpellsData(data.data);
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
      {spellsData.length > 0 && (
        <>
          <div className="grid grid-cols-4 gap-3">
            {spellsData.map((spell, index) => (
              <Card
                key={index}
                id={spell.id}
                image={spell.attributes.image}
                slug={spell.attributes.slug}
                category={spell.attributes.category}
                incantation={spell.attributes.incantation}
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

export default Spells;
