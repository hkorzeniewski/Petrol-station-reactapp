import classes from './StationItem.module.css'
import Card from '../ui/Card';
import {useState} from 'react'


function StationItem(props) {
    const [isShowedPetrol, showPetrols] = useState(false)

    return (
      <li className={classes.item}>
        <Card>
          <div className={classes.contentstation}>
            <h3>{props.id}</h3>
            <h3>Nazwa stacji: {props.station_name}</h3>
            <h3>Wojewodztwo: {props.voivodeship}</h3>
            <h3>Miasto: {props.city_name}</h3>
            <h3>Ulica: {props.street_name}</h3>
          </div>

          <div className={classes.actions}>
            <button onClick={() => showPetrols(!isShowedPetrol)}>
              {" "}
              Petrols{" "}
            </button>
            <button> Show Map</button>
          </div>

          {isShowedPetrol && (
            <div className={classes.contentpetrol}>
              {/* <h3>Typ Paliwa: {props.fuel_p98}</h3> */}
              {/* <h3>Cena Paliwa: {props}</h3> */}
              <table>
                <tbody>
                  <tr>
                    <th>Fuel Type</th>
                    <th>Price</th>
                  </tr>
                  <tr>
                    <td>{props.fuel_p98}</td>
                    <td>{props.fuel_p98_price}</td>
                  </tr>
                  <tr>
                    <td>{props.fuel_on}</td>
                    <td>{props.fuel_on_price}</td>
                  </tr>
                </tbody>
              </table>
              <div className={classes.actions}>
                <button> Update Info</button>
              </div>
              
            </div>
          )}
        </Card>
      </li>
    );
}

export default StationItem;