import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";


const Jobs = () => {
  const {city, setCity} = useState("");
  const {selectedCity, setSelectedCity} = useState("");
  const {niche, setNiche} = useState("");
  const {selectedNiche, setSelectedNiche} = useState("");
  const {searchKeyword, setSearchKeyword} = useState("");

  const {jobs, loading, error} = useSelector(state=> state.jobs);

  const handleCityChange = (city)=>{
    setCity(city);
    setSelectedCity(city);
  };
  const handleNicheChange = (niche)=>{
    setNiche(niche);
    setSelectedNiche(niche);
  };

  const dispatch = useDispatch()
  
  return (
    <div>Jobs</div>
  )
}

export default Jobs