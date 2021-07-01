import StationItem from './StationItem';
import classes from './StationList.module.css';


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
            fuel_p98={station.fuels.fuel_p98.fuel_type}
            fuel_p98_price={station.fuels.fuel_p98.fuel_price}
            fuel_on={station.fuels.fuel_on.fuel_type}
            fuel_on_price={station.fuels.fuel_on.fuel_price}
          />
        ))}
      </ul>
    );
}

export default StationList;