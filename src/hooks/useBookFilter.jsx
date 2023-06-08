import { useState, useEffect } from 'react';

const useBookFilter = (books) => {
  const [filteredData, setFilteredData] = useState(books);
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [selectedVersion, setSelectedVersion] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCountryChange = (event, values) => {
    setSelectedCountry(values);
  };

  const handleVersionChange = (event, values) => {
    setSelectedVersion(values);
  };

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  useEffect(() => {
    let newData = books;

    if (!!selectedCountry.length) {
      newData = newData.filter((item) =>
        selectedCountry.includes(item.country)
      );
    }

    if (!!selectedVersion.length) {
      newData = newData.filter((item) =>
        selectedVersion.includes(item.version)
      );
    }

    if (!!searchTerm) {
      newData = newData.filter((item) =>
        item.text.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredData(newData);
  }, [books, selectedCountry, selectedVersion, searchTerm]);

  const handleClearFilters = () => {
    setSelectedCountry([])
    setSelectedVersion([])
    setSearchTerm('')
    setFilteredData(books)
  };

  return {
    filteredData,
    selectedCountry,
    selectedVersion,
    searchTerm,
    handleCountryChange,
    handleVersionChange,
    handleSearchChange,
    handleClearFilters,
  };
};

export default useBookFilter;