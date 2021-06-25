import NewStationForm from "../components/stations/NewStationForm";
import { useHistory } from 'react-router-dom'

function NewStationsPage() {
    const history = useHistory();

    function addStationHandler(stationData){
        fetch(
            'http://127.0.0.1:8000/stations/',
            {
                method: 'POST',
                body: JSON.stringify(stationData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            history.replace('/')
        });
    }

    return <section>
        <h1>New Station</h1>
        <NewStationForm onAddStation={addStationHandler} />

    </section>
}

export default NewStationsPage;