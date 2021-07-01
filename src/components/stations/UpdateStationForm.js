import React, { useState, useEffect } from "react";

function UpdateStationForm({station_id}) {

    useEffect(() => {
        fetch(
          "https://react-petrol-app-default-rtdb.europe-west1.firebasedatabase.app/stations/"+station_id
        )
        .then((response) => {
            return response.json();
        })
    })

}

export default UpdateStationForm;
