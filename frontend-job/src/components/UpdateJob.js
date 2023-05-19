import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/AddJob.css'



export default function UpdateJob() {
    let navigate = useNavigate();
    
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [workingmode, setWorkingMode] = useState("");
    const [requirement, setRequirement] = useState("");
    const [id, setID] = useState("");
    

    
    
    async function Update(e) {
        e.preventDefault();

        
        const updatedJob = {
          title,
          date,
          location,
          workingmode,
          requirement
        }

        await axios.put(`http://localhost:5001/jobs/${id}`,updatedJob)
        .then(() => {
            alert("Job Updated Successfully");
            navigate('/jobs');
            localStorage.clear();
        })
        .catch(err => {
            alert(err);
        })
    }

    const getCurrentDate = () => {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      let month = (currentDate.getMonth() + 1).toString();
      let day = currentDate.getDate().toString();
  
      // Add leading zero if month/day is a single digit
      month = month.length === 1 ? '0' + month : month;
      day = day.length === 1 ? '0' + day : day;
  
      return `${year}-${month}-${day}`;
    };
    
    
      

    useEffect(() => {
        axios.get(`http://localhost:5001/jobs/${id}`)
        .then((data) => { 
        setTitle(data.body.title);
        setDate(new Date(localStorage.getItem('date')));
        setLocation(localStorage.getItem('location'));
        setWorkingMode(localStorage.getItem('workingmode'));
        setRequirement(localStorage.getItem('requirement'));
        setID(localStorage.getItem('id'));

            // alert("Job Updated Successfully");
            // navigate('/jobs');
            // localStorage.clear();
        })
        .catch(err => {
            alert(err);
        })

       
    }, [])

    return (
        <div className='container'>
            <br></br>
            <form onSubmit={Update} className="my-form">
            <div className="mb-3">
                    <label forHtml="title" className="form-label">Job Title</label>
                    <input type="text" className="form-control" id="title" placeholder="Enter Job Title" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                </div>
        
                <div className="mb-3">
                    <label forHtml="date" className="form-label">Date</label>
                    <input type="date" className="form-control" id="date"  value={date} min={getCurrentDate()} onChange={(e) => {setDate(e.target.value)}}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="location" className="form-label">Location</label>
                    <input type="text" className="form-control" id="location" placeholder="Enter Location" value={location} onChange={(e) => {setLocation(e.target.value)}} />
                </div>
                
                
                <div className="mb-3">
                    <label forHtml="workingmode" className="form-label">Working Mode</label>
                    <input type="text" className="form-control" id="workingmode" placeholder="Enter Working Mode" value={workingmode} onChange={(e) => {setWorkingMode(e.target.value)}}/>
                </div>

                <div className="mb-3">
                    <label forHtml="requirement" className="form-label">Requirement</label>
                    <textarea type="text" className="form-control" id="requirement" placeholder="Enter Requirement" value={requirement} onChange={(e) => {setRequirement(e.target.value)}}/>
                </div>
                <button type="submit" className="btn btn-primary">UPDATE</button>
            </form>
        </div>
    )
}