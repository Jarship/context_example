import React, { useState, createContext } from 'react';

export const NavContext = createContext({
  page: 'index',
  pageProps: {},
  changePage: () => {}
});

const Provider = props => {
  const [page, setPage] = useState("index");
  const [pageProps, setPageProps] = useState({});
  const changePage = (page, pageProps) => {
    setPage(page);
    setPageProps(pageProps);
  };
  return (
  <NavContext.Provider {...props} value={{page, pageProps, changePage}}  />
  );
};

export default Provider;
