import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import { clearAllErrors, fetchJobs } from '../store/slices/jobSlice';
import Spinner from "../components/Spinner";


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
    {
      loading ? <Spinner/> : (
        <section className='jobs'>
        <div className='search-tab-wrapper'>
        <input type='text' value={se}/>
        </div>
        </section>
      )
    }
  )
}

export default Jobs