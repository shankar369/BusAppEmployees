import React, { Component } from 'react'
import * as firebase from 'firebase';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export class Stops extends Component {



// componentDidMount = () =>{
//     this.dbref = firebase.database().ref().child('Busses');
//     this.dbref.on('value', snap => {
//         let shuttles = snap.val();
//         this.setState(shuttles);
//         this.componentDidUpdate();
//         console.log("State",this.state);
//         console.log("Busses",snap.val());
//     });
// }

state = {

}


// showStopsList = (route) =>{
    
//      var stopsList = Object.keys(this.state[route]).map( stop =>{
         
//          console.log(stop);
//          return(
//              <div className = "list-item-route" >
             
//                      <li className="text-center list-group-item d-flex justify-content-between align-items-center route-list-item m-1" key = {Object.toString(Math.random)} id = {route+stop}>                      
//                      <b>{stop}</b>
                     
                    
//                      {/* <div className="form-check">
//                          <input onChange = {()=> this.makeCheked(route,stop)} className="form-check-input" type="checkbox" value="" id= {route+stop+"defaultCheck1"} />
//                          <label className="form-check-label" htmlFor= {route+stop+"defaultCheck1"} >
//                              Reached
//                          </label>

//                      </div> */}
//                      </li>
            
//              </div>
//          )
//      });
//      ReactDOM.render(stopsList, document.getElementById('stops-list'));
//      this.makeCheked(route);
//     }


//     makeCheked(route) {

        
//         Object.keys(this.state[route]).map( stop => {
            
//                if(this.state[route][stop] === 1){
   
//                    //document.getElementById(route+stop+"defaultCheck1").checked = true;
//                    document.getElementById(route+stop).style.backgroundColor = "green";
                   
//                }
//                else{
                
//                                 //document.getElementById(route+stop+"defaultCheck1").checked = true;
//                                 document.getElementById(route+stop).style.backgroundColor = "white";
                                
//               }
                          
//            })
//       }




  render() {

    return (
                <MuiThemeProvider>
                    <React.Fragment>
                        <NavBar changeState = {this.changeState}  buttonName = "Log Out" toPath = "/"/>
                        stops {this.props.stops}
                        {/* <div className = "container-fluid">
    
                        <div className = "stops-list">
    
                            <h1>Stops List</h1>
                                <ul className="list-group" id = "stops-list">
                                    {this.props.stops}
                                </ul>
                            </div>
                            
                            </div> */}
                    </React.Fragment>
                </MuiThemeProvider>
    )
  }
}

export default Stops
