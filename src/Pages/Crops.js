import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import SearchBar from "../Components/SearchBar/SearchBar";
import './Crop.css';
import Card from "../Components/Card/Card";

const Crops = () => {
    const [crops, setCrops] = useState([]);
    const [filteredCrops, setFilteredCrops] = useState([]);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get(`https://backend-377w.vercel.app/crop-type`)
            .then(result => {
                if (result.status === 200) {
                    setCrops(result.data);
                    setFilteredCrops(result.data); // Initialize filteredCrops with all crops
                }
            })
            .catch(err => {
                setError(err);
            });
    }, []);

    const handleSearch = (query) => {
        setSearchTerm(query.toLowerCase());
        const filtered = crops.filter(crop =>
            crop.cropName.toLowerCase().includes(query.toLowerCase()) ||
            crop.cropSummary.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredCrops(filtered);
    };

    return (
        <>
            <Header />
            <h1 style={{ margin: "10px 25px 20px 25px" }}>Crops Page</h1>
            <SearchBar onSearch={handleSearch} />

            <div className="crop-list">
                {filteredCrops.length > 0 ? (
                    filteredCrops.map((crop) => (
                        <Card key={crop.id} name={crop.cropName} summary={crop.cropSummary} image={crop.cropImage} />))
                ) : (
                    <p>No crops found.</p>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Crops;
