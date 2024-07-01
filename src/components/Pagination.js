function Pagination({
  totalCount,
  pageSize,
  setPageNumber,
  currentPage,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCount / pageSize); i++) {
    pageNumbers.push(i);
  }

  let visiblePages = [];
  if (pageNumbers.length <= 3) {
    visiblePages = pageNumbers;
  } else {
    const leftSide = 1;
    const rightSide = 1;
    const lastPage = pageNumbers.length;

    if (currentPage <= leftSide) {
      visiblePages = [...pageNumbers.slice(0, 3), lastPage];
    } else if (currentPage > lastPage - rightSide) {
      visiblePages = [1, ...pageNumbers.slice(lastPage - 3)];
    } else {
      visiblePages = [
        1,
        ...pageNumbers.slice(
          currentPage - leftSide - 1,
          currentPage + rightSide
        ),
        lastPage,
      ];
    }

    if (visiblePages[0] > 1) {
      visiblePages = [1, -1, ...visiblePages.slice(1)];
    }
    if (visiblePages[0] + 1 < visiblePages[1]) {
      visiblePages = [visiblePages[0], -1, ...visiblePages.slice(1)];
    }
    if (visiblePages[visiblePages.length - 1] < lastPage) {
      visiblePages = [...visiblePages.slice(0, -1), -1, lastPage];
    }
    if (visiblePages[visiblePages.length - 2] < lastPage - 1) {
      visiblePages = [...visiblePages.slice(0, -1), -1, lastPage];
    }
  }

  // Son sayfayı visiblePages dizisine ekliyor
  if (!visiblePages.includes(pageNumbers.length)) {
    visiblePages.push(pageNumbers.length);
  }

  // visiblePages'de son eleman iki kez tekrar ediyorsa sondaki bir elemanı siliyor
  if (
    visiblePages[visiblePages.length - 2] ===
    visiblePages[visiblePages.length - 1]
  ) {
    visiblePages.pop();
  }

  // visiblePages'de ilk eleman iki kez tekrar ediyorsa ilk elemanı siliyor
  if (visiblePages[0] === visiblePages[1]) {
    visiblePages.shift();
  }

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="flex items-center -space-x-px h-10 text-base">
          <li>
            <button
              disabled={currentPage === 1}
              onClick={() => {
                setPageNumber(currentPage--);
              }}
              className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-3 h-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </button>
          </li>
          {visiblePages.map((num, index) => (
            <li key={index}>
              {num === -1 ? (
                <span className="mx-1 h-full align-middle font-bold text-[16px] pb-[8px] hidden sm:block">
                  {" "}
                  ...{" "}
                </span>
              ) : (
                <li>
                  <button
                    className={
                      currentPage === num
                        ? "z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                        : "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    }
                    onClick={() => {
                      if (pageNumbers.length > 1) {
                        setPageNumber(num);
                      }
                    }}
                    disabled={currentPage === num}
                  >
                    {num}
                  </button>
                </li>
              )}
            </li>
          ))}
          <li>
            <button
              disabled={currentPage === Math.ceil(totalCount / pageSize)}
              onClick={() => {
                setPageNumber(currentPage++);
              }}
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-3 h-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Pagination;
