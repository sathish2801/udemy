import React, { useState } from "react";

const useHandlePagination = () => {
  const [page, setPage] = useState(1);
  const [max, setMax] = useState(0);
  const [total, setTotal] = useState(1);

  const handleMaxPage = (count) => {
    setTotal(count);
    const a = count / 6;
    setMax(Math.ceil(a));
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page < max) setPage(page + 1);
  };

  return { page, handleMaxPage, max, handlePreviousPage, handleNextPage };
};

export default useHandlePagination;
