import { useEffect } from "react";
import { useState } from "react";
import Service from "../Service/Service";


const Services = () => {
    const [card,setCard] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setCard(data))
    },[])
    return (
        <div className="">
           <h2 className="text-center text-4xl font-bold my-10">Our Services</h2>
            <div className="grid grid-cols-3 gap-10">
            {
                card.map(service =><Service key={service._id} service={service}></Service>)
            }
            </div>
        </div>
    );
};

export default Services;