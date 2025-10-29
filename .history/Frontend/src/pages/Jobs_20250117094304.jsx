import React, { useState } from 'react';
import {useSelector} from "react-redux";


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
  }
  const handlenicheChange = (niche)=>{
    setniche(niche);
    setSelectedniche(niche);
  }
  
  return (
    <div>Jobs</div>
  )
}

export default Jobs