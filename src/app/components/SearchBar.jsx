"use client"
// Import necessary components and hooks from Material-UI and Next.js
import { useState } from 'react';
import { TextField, Button } from '@mui/material';

// Define your search bar component
const SearchBar = ({ onSearch }) => {
    // State to hold the search query
    const [searchQuery, setSearchQuery] = useState('');

    // Function to handle search query changes
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Function to handle search form submission
    const handleSearchSubmit = (event) => {
        event.preventDefault();
        // Call the onSearch callback with the search query
        onSearch(searchQuery);
    };

    return (
        <form onSubmit={handleSearchSubmit}>
            <TextField
                label="Search Cab"
                variant="outlined"
                value={searchQuery}
                onChange={handleSearchChange}
            />
            <Button type="submit" variant="contained" color="primary">Search</Button>
        </form>
    );
};

export default SearchBar;
