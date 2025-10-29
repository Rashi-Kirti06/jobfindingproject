import React, { useState } from 'react';
import {useSelector} from "react-redux";


const Jobs = () => {
  const {city, setCity} = useState("");
  const {selectedCity, setSelectedCity} = useState("");
  const {niche, setNiche} = useState("");
  const {selectedNiche, setSelectedNiche} = useState("");
  const {searchKeyword, setSearchKeyword} = useState("");

  const {} = useSelector(state=> state.)
  
  return (
    <div>Jobs</div>
  )
}

export default Jobs