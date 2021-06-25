import { useEffect, useRef } from 'react';
import Card from "../ui/Card";
import classes from './NewStationForm.module.css'

function NewStationForm (props) {
    const stationNameInputRef = useRef(); 
    const locationVoivodeshipRef = useRef();
    const locationCityNameRef = useRef();
    const locationStreetNameRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredStationName = stationNameInputRef.current.value;
        const enteredLocationVoivodeship = locationVoivodeshipRef.current.value
        const enteredLocationCityName = locationCityNameRef.current.value
        const enteredLocationStreetName = locationStreetNameRef.current.value

        const stationData = {
            station_name: enteredStationName,
            fuel: [],
            location: {
                voivodeship: enteredLocationVoivodeship,
                city_name: enteredLocationCityName,
                street_name: enteredLocationStreetName
            }
        }

        props.onAddStation(stationData);
        console.log(stationData)
    }

    return (
    <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='station_name'>Station Name</label>
                <input type='text' required id='station_name' ref={stationNameInputRef}></input>
            </div>
            <div className={classes.control}>
                <label htmlFor='voivodeship'>Voivodeship</label>
                <input type='text' required id='voivodeship' ref={locationVoivodeshipRef}></input>
            </div>
            <div className={classes.control}>
                <label htmlFor='city_name'>City</label>
                <input type='text' required id='city_name' ref={locationCityNameRef}></input>
            </div>
            <div className={classes.control}>
                <label htmlFor='street_name'>Street</label>
                <input type='text' required id='street_name' ref={locationStreetNameRef}></input>
            </div>
            <div className={classes.actions}>
                <button>Add Station</button>
            </div>
            
        </form>
    </Card>
    );
}

export default NewStationForm;