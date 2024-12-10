import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import SearchBar from "../Components/SearchBar/SearchBar";
import './Crop.css';
import Card from "../Components/Card/Card";
import CardMapping from "../Components/CardMapping/Card";

const CropSoil = () => {
    const [cropSoil, setCropSoil] = useState([]);
    const [filteredCrops, setFilteredCrops] = useState([]);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get(`https://backend-377w.vercel.app/grouped-by-soil`)
            .then(result => {
                if (result.status === 200) {
                    setCropSoil(result.data);
                    setFilteredCrops(result.data); // Initialize filteredCrops with all cropSoil
                }
            })
            .catch(err => {
                setError(err);
            });
    }, []);

    const handleSearch = (query) => {
        setSearchTerm(query.toLowerCase());
        const filtered = cropSoil.filter(crop =>
            crop.cropName.toLowerCase().includes(query.toLowerCase()) ||
            crop.cropSummary.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredCrops(filtered);
    };

    return (
        <>
            <Header />
            <h1 style={{ margin: "10px 25px 20px 25px" }}>Crops Soil   Mapping</h1>
            <SearchBar onSearch={handleSearch} />

            <div className="crop-list">
                {filteredCrops.length > 0 ? (
                    filteredCrops.map((crop, index) => (
                        <CardMapping
                            key={index}
                            soilTypeId={crop.soilTypeId}
                            soilTypeName={crop.soilTypeName}
                            soilImage={crop.soilImage}
                            crops={crop.crops}
                        />
                    ))
                ) : (
                    <p>No Crop Soil Data found.</p>
                )}
            </div>
            <Footer />
        </>
    );
};

export default CropSoil;
