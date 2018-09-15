import React, { Component} from 'react'

// picture 
// name 
// make 
// model and availability 
class CarPanel extends Component { 
    render(){ 
        return(
            <div>
                <p> Name: {this.props.name} </p>
                <p> Make: {this.props.make} </p> 
                <p> Model: {this.props.model}</p> 
                <p> Availability:  {this.props.availability}</p> 
            </div>
        ); 
    }
}

export default CarPanel 