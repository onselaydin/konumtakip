import React from 'react';
import {GoogleApiWrapper,Map,Marker} from 'google-maps-react';

export class MapContainer extends React.Component {
    render(){
        return(
            <div style={{width:'100%',height:'100%'}}>
                <Map
                    google={this.props.google}
                    initialCenter={{
                        lat: 40.793026,
                        lng: 29.416235
                    }}
                    zoom={14}
                    onClick={this.onMapClicked}
                />
                <Marker
                    title={'Anamın Evi :)'}
                    name={'GEBZE'}
                    position={{lat: 40.793026, lng: 29.416235}} />
            </div>
        )
    }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyAbpvs2fsFoXlqH2deY4rCAJ9STUOPmW8w")
})(MapContainer)