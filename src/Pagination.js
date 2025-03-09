const Pagination = ({ currentPage, setCurrentPage, pageSize, totalCount }) => {
  const handleNext = () => {
    if (currentPage === Math.ceil(totalCount / pageSize)) return;
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage === 1) return;
    setCurrentPage((prev) => prev - 1);
  };
  const RenderButton = () => {
    const totalPage = Math.ceil(totalCount / pageSize);
    const arr = new Array(totalPage).fill(0);

    if (totalPage <= 3) {
      return arr.map((_, index) => (
        <button
          key={index + "button"}
          onClick={() => setCurrentPage(index + 1)}
        >
          {index + 1}
        </button>
      ));
    } else if (totalPage > 3) {
      if (currentPage === 1) {
        return (
          <>
            <button onClick={() => setCurrentPage(1)}>1</button>
            <button onClick={() => setCurrentPage(2)}>2</button>
            <button onClick={() => setCurrentPage(3)}>3</button>
          </>
        );
      }
      if (currentPage === totalPage) {
        return (
          <>
            <button onClick={() => setCurrentPage(totalPage - 2)}>
              {totalPage - 2}
            </button>
            <button onClick={() => setCurrentPage(totalPage - 1)}>
              {totalPage - 1}
            </button>
            <button onClick={() => setCurrentPage(totalPage)}>
              {totalPage}
            </button>
          </>
        );
      }
      return (
        <>
          <button onClick={() => setCurrentPage(currentPage - 1)}>
            {currentPage - 1}
          </button>
          <button onClick={() => setCurrentPage(currentPage)}>
            {currentPage}
          </button>
          <button onClick={() => setCurrentPage(currentPage + 1)}>
            {currentPage + 1}
          </button>
        </>
      );
    }
    return <></>;
  };

  return (
    <>
      <button onClick={() => handlePrev()}>Prev</button>Page No: {currentPage}
      <RenderButton />
      <button onClick={() => handleNext()}>Next</button>
    </>
  );
};

export default Pagination;
