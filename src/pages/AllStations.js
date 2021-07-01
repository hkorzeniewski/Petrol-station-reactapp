import React, { useState, useEffect} from 'react'
import StationList from '../components/stations/StationList';


function AllStationsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedStations, setLoadedStations] = useState([]); 

    useEffect(() => {
        setIsLoading(true);
        fetch(
          "https://react-petrol-app-default-rtdb.europe-west1.firebasedatabase.app/stations.json"
        )
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            const stations = [];

            for (const key in data){
                
                const station = {
                    id: key,
                    ...data[key]

                }
                // console.log(station)
                stations.push(station);
            }
            console.log(stations)
            setIsLoading(false);
            setLoadedStations(stations);
          });
    
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