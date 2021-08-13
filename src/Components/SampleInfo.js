import React, { useState } from 'react';
import './SampleInfo.css';
import {Arr} from './Arr';
function SampleInfo() {
    const [ind, setind] = useState(0);
    const full = (I) =>{
        console.log(I);
        setind(I);
    }

    return (<div className="sampleinfo">
    {
        Arr.map((person,index) => {
               return (
                   <div className="sample_info" key={person.Phone}>
                    <div className="heading"><h3 >{person.Name}</h3></div>
                    <p>{person.Email}</p>
                    <p>{person.Phone}</p>
                    <button  onClick={() => full(index)}>Click to View Details</button>
                </div>
            )
        })
    }

        <div className="full">
            <div className="heading"><h3>{Arr[ind].Name}</h3></div>
            <p><span style={{fontWeight: "bold"}}>Email:</span> {Arr[ind].Email}</p>
            <p><span style={{fontWeight: "bold"}}>Ph.No:</span> {Arr[ind].Phone}</p>   
            <p><span style={{fontWeight: "bold"}}>City:</span> {Arr[ind].City}</p>
            <p><span style={{fontWeight: "bold"}}>State:</span> {Arr[ind].State}</p>   
            <p><span style={{fontWeight: "bold"}}>Country:</span> {Arr[ind].Country}</p>   
            <p><span style={{fontWeight: "bold"}}>Organisation:</span> {Arr[ind].Organization}</p>   
            <p><span style={{fontWeight: "bold"}}>Job profile:</span> {Arr[ind].Job_Profile }</p>   
            <p><span style={{fontWeight: "bold"}}>Additional info:</span> {Arr[ind].Additional_Info}</p>   
        </div>
    </div>);
}

export default SampleInfo;
