import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import { clearAllErrors, fetchJobs } from '../store/slices/jobSlice';
import Spinner from "../components/Spinner";
import {FaSearch} from "react-icons/fa"

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

  const dispatch = useDispatch();
  useEffect(()=>{
    if(error){
      toast.error(error);
      dispatch(clearAllErrors);
    }
    dispatch(fetchJobs(city, niche, searchKeyword))
  }, [dispatch, error, city, niche])

  const handleSearch = ()=>{
    dispatch(fetchJobs(city, niche, searchKeyword));
  };
  
  return (
    <>
    {
      loading ? <Spinner/> : (
        <section className='jobs'>
        <div className='search-tab-wrapper'>
        <input type='text' value={searchKeyword} onChange={(e)=>setSearchKeyword(e.target.value)}/>
        <button onClick={handleSearch}>Find Job</button>
        <FaSearch />
        </div>
        <div className='wrapper'>
          <div className='filter-bar'>
            <
          </div>
        </div>
        </section>
      )
    }
    </>
  )
}

export default Jobs