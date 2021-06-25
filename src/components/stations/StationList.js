import StationItem from './StationItem';
import classes from './StationList.module.css';
import PetrolItem from './PetrolItem';

function StationList(props) {
    return (
      <ul className={classes.list}>
        {props.stations.map((station) => (
          <StationItem
            key={station.id}
            id={station.id}
            station_name={station.station_name}
            voivodeship={station.location.voivodeship}
            city_name={station.location.city_name}
            street_name={station.location.street_name}
            fuel_type={station.fuel["0"].fuel_type}
            fuel_price={station.fuel["0"].fuel_price_info.value}
          />
          
        ))}
        {/* {props.stations.map((fuel) => (
          <PetrolItem
            fuel_type={fuel.fuel["0"].fuel_type}
            fuel_price={fuel.fuel["0"].fuel_price_info.value}
          />
        ))} */}


      </ul>
    );
}

export default StationList;