import { useState, useEffect } from 'react';

const useBookFilter = (books) => {
  const [filteredData, setFilteredData] = useState(books);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedVersions, setSelectedVersions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCountryChange = (event, values) => {
    event.preventDefault()
    setSelectedCountries(values);
  };

  const handleVersionChange = (event, values) => {
    event.preventDefault()
    setSelectedVersions(values);
  };

  const handleSearchChange = (event) => {
    event.preventDefault()
    const { value } = event.target;
    setSearchTerm(value);
  };

  useEffect(() => {
    let newData = books;

    if (selectedCountries.length) {
      newData = newData.filter((item) =>
        selectedCountries.includes(item.country)
      );
    }

    if (selectedVersions.length) {
      newData = newData.filter((item) =>
        selectedVersions.includes(item.version)
      );
    }

    if (searchTerm) {
      newData = newData.filter((item) =>
        item.text.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredData(newData);
  }, [books, selectedCountries, selectedVersions, searchTerm]);

  const handleClearFilters = () => {
    setSelectedCountries([])
    setSelectedVersions([])
    setSearchTerm('')
    setFilteredData(books)
  };

  return {
    filteredData,
    selectedCountries,
    selectedVersions,
    searchTerm,
    handleCountryChange,
    handleVersionChange,
    handleSearchChange,
    handleClearFilters,
  };
};

export default useBookFilter;