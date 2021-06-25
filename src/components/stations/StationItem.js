import classes from './StationItem.module.css'
import Card from '../ui/Card';
import {useState} from 'react'
import PetrolItem from './PetrolItem';

function StationItem(props) {
    const [isShowedPetrol, showPetrols] = useState(false)

    return (
      <li className={classes.item}>
        <Card>
          <div className={classes.contentstation}>
            <h3>Nazwa stacji: {props.station_name}</h3>
            <h3>Wojewodztwo: {props.voivodeship}</h3>
            <h3>Miasto: {props.city_name}</h3>
            <h3>Ulica: {props.street_name}</h3>
          </div>

        
          
          <div className={classes.actions}>
            <button onClick={() => showPetrols(!isShowedPetrol)}> Petrols </button>
            <button> Show Map</button>
          </div>

          { isShowedPetrol && 
          <div className={classes.contentpetrol}>
            <h3>Typ Paliwa: {props.fuel_type}</h3>
            <h3>Cena Paliwa: {props.fuel_price}</h3>
          </div> 
          }
        </Card>
      </li>
    );
}

export default StationItem;