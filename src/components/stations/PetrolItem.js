import classes from "./StationItem.module.css";
import Card from "../ui/Card";
import { useState } from "react";

function PetrolItem(props) {
    return(
        <Card>
        <li className={classes.item}>
            <div className={classes.contentpetrol}>
                <h3>Typ paliwa: {props.fuel_type0}</h3>
                <h3>Cena: {props.fuel_price}</h3>
            </div>
        </li>
        </Card>
    )}

export default PetrolItem;