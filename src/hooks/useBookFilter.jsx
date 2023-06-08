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

  const filters = {
    filterByCountry: item => selectedCountries.includes(item.country),
    filterByVersion: item => selectedVersions.includes(item.version),
    filterByTerm: item => item.text.toLowerCase().includes(searchTerm.toLowerCase())
  }

  useEffect(() => {
    let enabledFilters = []
    selectedCountries.length && enabledFilters.push(filters.filterByCountry)
    selectedVersions.length && enabledFilters.push(filters.filterByVersion)
    searchTerm && enabledFilters.push(filters.filterByTerm)

    let newData = books.filter(item => enabledFilters.every(filter => filter(item)))

    setFilteredData(newData)
  }, [books, selectedCountries, selectedVersions, searchTerm])

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