/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import SearchBar from "./components/SearchBar";
import top100Books from "./data/top50Books";
import useBookFilter from "./hooks/useBookFilter";
import Card from "./components/Card";

const App = () => {
  const {
    filteredData,
    selectedCountry,
    selectedVersion,
    searchTerm,
    handleCountryChange,
    handleVersionChange,
    handleSearchChange,
    handleClearFilters,
  } = useBookFilter(top100Books);

  return (
    <main className="mainContainer">
      <SearchBar
        searchTerm={searchTerm}
        selectedCountry={selectedCountry}
        selectedVersion={selectedVersion}
        handleClearFilters={handleClearFilters}
        handleCountryChange={handleCountryChange}
        handleVersionChange={handleVersionChange}
        handleSearchChange={handleSearchChange}
      />
      {!!filteredData && (
        <ul className="cardMainContainer">
          {filteredData.map((d) => (
            <li key={`${d?.id}`} className="cardContainer">
              <Card data={d} />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default App;
