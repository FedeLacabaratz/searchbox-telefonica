# Book Search Application

This is a React application that allows you to filter and search for books based on different criteria such as country, version, and title.

## Installation

1. Clone the repository or download the code.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies.
4. Run `npm start` to start the development server.

## Application Structure

The application is structured as follows:

- `src/components/SearchBar.jsx`: The main component that handles the filtering and searching of books.
- `src/components/Card.jsx`: The secondary component that handles every card when automatically mapped after being filtered.
- `src/hooks/useBookFilter.js`: A custom hook that encapsulates the filtering logic.
- `src/data/top50Books.js`: A mock data file containing a list of books.
- `src/styles`: In here we will store our reset file that resets our browser inconsistencies like default line, heights, etc. Then we will have an entire structure of subfolders that will eventualy be imported into our main style.scss file. We use Sass to ease up the css synthaxis when styling our web page. 

## Component Structure

The component structure of the application is as follows:

- `SearchBar`: The main component that provides the search functionality and renders the filter options and the filtered book list.
- `Card`: The scondary component that will reuse every card and convert filtered data to a more friendly look & feel list of results.
  - `useBookFilter`: A custom hook that encapsulates the filtering logic and returns the necessary variables and functions for filtering.

## Usage

To use the Book Search application, follow these steps:

1. Import the `SearchBar` component into your React application: `import SearchBar from './components/SearchBar';`
2. Render the `SearchBar` component in your application: `<SearchBar />`
1. Import the `Card` component into your React application: `import Card from './components/Card';`
3. Render the `Card` component in your application when submiting search criteria: `<Card />`

The component provides the following features:

- Filtering by title: Enter a search term in the text field to filter the books by their title.
- Filtering by country: Select one or more countries from the dropdown to filter the books by their country.
- Filtering by version: Select one or more versions from the dropdown to filter the books by their version.
- Clearing filters: Click the "Clear All Filters" button to reset all filters.

## Custom Hook - `useBookFilter`

The `useBookFilter` hook encapsulates the filtering logic and returns the necessary variables and functions for filtering:

- `filteredData`: The filtered list of books based on the selected filters.
- `selectedCountries`: The selected country filter.
- `selectedVersions`: The selected version filter.
- `searchTerm`: The entered search term.
- `handleCountryChange`: A function to handle changes in the country filter.
- `handleVersionChange`: A function to handle changes in the version filter.
- `handleSearchChange`: A function to handle changes in the search term.
- `clearFilters`: A function to clear all filters.

To use the `useBookFilter` hook, import it into your component.

Finally, use the returned variables and functions to implement the filtering functionality in your component.

Mock Data - top50Books.js
The top50Books.js file contains a mock list o50f books used for testing and demonstration purposes. You can replace this topBooks with your own book data or fetch it from an API.

Now that is it! You now have a Book Search application that allows you to filter and search for books based on different criteria. Feel free to customize and enhance it according to your requirements.

If you have any questions or need further assistance, please let us know to our email: lacarq@gmail.com.
