import NewStationForm from "../components/stations/NewStationForm";
import { useHistory } from 'react-router-dom'

function NewStationsPage() {
    const history = useHistory();

    function addStationHandler(stationData){
        fetch(
          "https://react-petrol-app-default-rtdb.europe-west1.firebasedatabase.app/stations.json",
          {
            method: "POST",
            body: JSON.stringify(stationData),
            headers: {
              "Content-Type": "application/json",
            },
          }
        ).then(() => {
          history.replace("/");
        });
    }

    return <section>
        <h1>New Station</h1>
        <NewStationForm onAddStation={addStationHandler} />

    </section>
}

export default NewStationsPage;