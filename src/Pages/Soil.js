import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import SearchBar from "../Components/SearchBar/SearchBar";
import './Crop.css';
import Card from "../Components/Card/Card";

const Soil = () => {
    const [soil, setSoil] = useState([]);
    const [filteredSoil, setFilteredSoil] = useState([]);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get(`https://backend-377w.vercel.app/soil-type`)
            .then(result => {
                if (result.status === 200) {
                    setSoil(result.data);
                    setFilteredSoil(result.data); // Initialize filteredSoil with all soil
                }
            })
            .catch(err => {
                setError(err);
            });
    }, []);

    const handleSearch = (query) => {
        setSearchTerm(query.toLowerCase());
        const filtered = soil.filter(soil =>
            soil.soilTypeName .toLowerCase().includes(query.toLowerCase()) ||
            soil.soilSummary.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredSoil(filtered);
    };

    return (
        <>
            <Header /> 
            <h1 style={{ margin: "10px 25px 20px 25px" }}>Soil Page</h1>
            <SearchBar onSearch={handleSearch} />

            <div className="crop-list">
                {filteredSoil.length > 0 ? (
                    filteredSoil.map((soil) => (
                        <Card key={soil.id} name={soil.soilTypeName} summary={soil.soilSummary} image={soil.soilImage}/>
                    ))
                ) : (
                    <p>No soil found.</p>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Soil;
