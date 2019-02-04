import React, { Component } from 'react';
import './LocationBox.css';

class LocationBox extends Component {

    setLocation(event, latOrLong) {
        let lat = this.props.customLat;
        let long = this.props.customLong;
        if (event.target.value === "-") return;
        if (latOrLong === "LAT") {
            if (event.target.value < -90) {
                event.target.value = -90;
            } else if (event.target.value > 90) {
                event.target.value = 90;
            }
            lat = event.target.value;
        } else if (latOrLong === "LONG") {
            if (event.target.value < -180) {
                event.target.value = -180;
            } else if (event.target.value > 180) {
                event.target.value = 180;
            }
            long = event.target.value;
        } else return;
        if ((lat !== this.props.customLat || long !== this.props.customLong) && lat && long) {
            this.props.onLocationSet(lat, long);
        }
        //wrzuca do global stanu wybrane w inpucie lat i long
    }

    render() {
        return (
            <div className="showForCustomLocation__locationBox">Location:
            <p><span>Your latitude is: </span>
                    <input type="number" id="latInput" max="90" min="-90"
                        onChange={(event) => this.setLocation(event, "LAT")}
                    />
                </p>
                <p><span>Your longitude is: </span>
                    <input type="number" id="longInput" max="180" min="-180"
                        onChange={(event) => this.setLocation(event, "LONG")}
                    />
                </p>
            </div>);
    }
}

export default LocationBox;