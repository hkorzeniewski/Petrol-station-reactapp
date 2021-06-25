import React, { useState, useEffect} from 'react'
import StationList from '../components/stations/StationList';


function AllStationsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedStations, setLoadedStations] = useState([]); 

    useEffect(() => {
        setIsLoading(true);
        fetch(
            'http://127.0.0.1:8000/stations/'
        ).then(response => {
                return response.json();
    }).then(data => {   
        setIsLoading(false);
        setLoadedStations(data);
        console.log(data['0'].fuel['0'].fuel_type)
    })
    
    }, []);

    
    
    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }

    return(
        <section>
            <h1>All stations</h1>
            <StationList stations={loadedStations} />

        </section>
    ); 
}

export default AllStationsPage; 