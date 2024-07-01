import { useEffect, useState } from "react";
import { GetAllBooks } from "../../services/Book/BookService";
import Card from "./components/Card";
import Pagination from "../../components/Pagination";
import Loading from "../../components/Loading";

function Books() {
  const pageSize = 5;
  const [pageNumber, setPageNumber] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecord, setTotalRecord] = useState(0);
  const [booksData, setBooksData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await GetAllBooks(pageSize, pageNumber);
        setBooksData(data.data);
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
      {booksData.length > 0 && (
        <>
          <div className="grid grid-cols-4 gap-3">
            {booksData.map((book, index) => (
              <Card
                key={index}
                id={book.id}
                cover={book.attributes.cover}
                slug={book.attributes.slug}
                release_date={book.attributes.release_date}
                pages={book.attributes.pages}
                author={book.attributes.author}
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

export default Books;
