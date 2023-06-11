/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import top50Books from "../../data/top50Books";

const SearchBar = ({
  searchTerm,
  selectedCountries,
  selectedVersions,
  handleClearFilters,
  handleCountryChange,
  handleVersionChange,
  handleSearchChange,
}) => {
  const selectedOptions = useMemo(
    () => ({
      countries: [...new Set(top50Books.map((book) => book.country))],
      versions: [...new Set(top50Books.map((book) => book.version))],
    }),
    [top50Books]
  );

  return (
    <>
      <div className="upperFilters">
        <Stack spacing={3} sx={{ width: "30rem", marginRight: "1rem !important" }}>
          <Autocomplete
            id="tags-outlined"
            multiple
            filterSelectedOptions
            options={selectedOptions.countries}
            value={selectedCountries}
            onChange={handleCountryChange}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Filter by country"
                variant="outlined"
              />
            )}
          />
        </Stack>
        <Stack spacing={3} sx={{ width: "30rem", marginRight: "0.5rem !important" }}>
          <Autocomplete
            id="tags-outlined"
            multiple
            filterSelectedOptions
            options={selectedOptions.versions}
            value={selectedVersions}
            onChange={handleVersionChange}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Filter by version"
                variant="outlined"
              />
            )}
          />
        </Stack>
        <Button variant="text" onClick={handleClearFilters}>
          Clear All Filters
        </Button>
      </div>
      <div className="lowerFilter">
        <TextField
          label="Search by title"
          value={searchTerm}
          onChange={handleSearchChange}
          fullWidth
        />
      </div>
    </>
  );
};

export default SearchBar;
