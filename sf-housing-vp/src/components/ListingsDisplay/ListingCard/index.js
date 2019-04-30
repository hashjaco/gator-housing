import './index.css'
import React, { Component, } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import GoogleMapReact from 'google-map-react';

const MAPS_API_KEY = "AIzaSyBllbHD-lG5no2m1IFdtdckhDETM4n4dw4"


const MapLabel = ({ text }) => (
  <div style={{
    color: 'white', 
    background: '#f44336',
    padding: '8px 8px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #ba000d',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);


class ListingCard extends Component {

  static defaultProps = {
    center: {
      lat: 37.721558,
      lng: -122.478165,
    },
    zoom: 15
  };

  constructor(props){ 
    super(props);
    this.state = {
      modal: false,
      ...props
    }
    this.toggle = this.toggle.bind(this);
  }
  toggle(){
    this.setState((prevState) => {
      return {modal: !prevState.modal}
    })
  }

  toPriceString = (number) => {
    return "$" + number.toLocaleString(undefined, {maximumFractionDigits:2, minimumFractionDigits:2});
  }

  render() {
    return (
      <Link className="listingcard d-flex flex-row" onClick={this.toggle}>

        {/* Image */}
        <div style={{marginRight:"1rem"}}>
          <img className="listingcard-image" src={this.props.src} alt={this.props.title}/>
          <div className="listingcard-image-text">
            <p>{this.toPriceString(this.props.price)}</p>
          </div>
        </div>

        {/* Info */}
        <div class="d-flex flex-column">
          <div style={{marginBottom:"auto"}}>
            <div style={{height:"0.5rem"}} />
            <p className="listingcard-type">{this.props.type}</p>
            <p className="listingcard-title">{this.props.title}</p>
            <p>{this.props.description}</p>
          </div>
        </div>

        {/* This is the detailed view that comes up when a ListingCard is clicked. */}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.state.title}</ModalHeader>
          <ModalBody>
            <img src={this.props.src} alt={this.props.title} style={{width:"100%", height:"16rem", objectFit:"cover"}}/>
            <p> {this.state.description} </p>
            <p> {this.toPriceString(this.state.price)} / month</p>
            {/* Map */}
            <div style={{height:'16rem', width:'100%'}}>
              <GoogleMapReact
                bootstrapURLKeys={{key: MAPS_API_KEY}}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom} >
                <MapLabel
                  lat={this.props.center.lat}
                  lng={this.props.center.lng} 
                  text="" />
              </GoogleMapReact>
            </div>
            
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Message Landlord</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Back to Listings</Button>
          </ModalFooter>
        </Modal>

      </Link>
    )
  }

}

export default ListingCard;