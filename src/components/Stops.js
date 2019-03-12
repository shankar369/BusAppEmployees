import React, { Component } from 'react'
import * as firebase from 'firebase';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export class Stops extends Component {

// constructor(){
//     super();
//     // this.route = window.localStorage.getItem('route');
//     // this.route = window.localStorage.getItem('route');
//     // this.dbref = firebase.database().ref().child('Busses');
//     // this.dbref.on('value', snap => {
//     //     let shuttles = snap.val();
//     //     this.setState(shuttles);
//     //     //console.log("State",this.state);
//     //     //console.log("Busses",snap.val());
//     //     console.log("snap ....", snap.val());
//     //     this.showStopsList(this.route);
//     //     this.changeColor(this.route); 
//     // });
// }

componentDidMount = () =>{

    this.route = window.localStorage.getItem('route');
    this.dbref = firebase.database().ref().child('Busses');

    this.dbref.on('value', snap => {
        let shuttles = snap.val();
        this.setState(shuttles);
        //console.log("State",this.state);
        //console.log("Busses",snap.val());
        console.log("snap ....", snap.val());
        this.showStopsList(this.route);
        //this.changeColor(); 
    // });
    // this.showStopsList(this.route);
    // this.changeColor()
    //console.log("M checking for element : ",document.getElementById("Bus3Bus3Stop2"))
    })
}

// componentDidUpdate = () =>{
//     //this.showStopsList(this.route);
//     console.log("U checking for element : ",document.getElementById("Bus3Bus3Stop2"))
//     this.changeColor();
// }



state = {

}

showStopsList = (route = this.route) =>{
    if(this.state[route] !== undefined){
     
    var stopsList = Object.keys(this.state[route]).map( stop =>{
        if(this.state[route][stop] !== '---')
            this.color = 'green';
        else
            this.color = "white";
         console.log(stop);
         return(
             <div className = "list-item-route" >
             
                     <li className={"text-center list-group-item d-flex justify-content-between align-items-center route-list-item m-1 "+this.color} key = {Object.toString(Math.random)} id = {route+stop}>                      
                     <b>{stop}</b>
                     
                    <b>{this.state[route][stop]}</b>
                     {/* <div className="form-check">
                         <input onChange = {()=> this.makeCheked(route,stop)} className="form-check-input" type="checkbox" value="" id= {route+stop+"defaultCheck1"} />
                         <label className="form-check-label" htmlFor= {route+stop+"defaultCheck1"} >
                             Reached
                         </label>

                     </div> */}
                     </li>
            
             </div>
         )
     });
     

    ReactDOM.render(stopsList, document.getElementById('stops-list-page'));
    console.log(stopsList)
    console.log("SL checking for element : ",document.getElementById("Bus3Bus3Stop2"))
    //this.changeColor();
    }

 }


//  changeColor(route = this.route){
//     if(this.state[route] !== undefined){
//         Object.keys(this.state[route]).map(stop =>{
//             if(this.state[route][stop] === 1){
//                 console.log("error at :",route+stop)
//                 if(document.getElementById(route+stop) !== null)
//                     document.getElementById(route+stop).style.backgroundColor = 'green';
//                 }
//             else{
//                 console.log("error at :",route+stop)
//                 if(document.getElementById(route+stop) !== null)
//                     document.getElementById(route+stop).style.backgroundColor = 'white';                         
//             }
//         })
//     }
// }


  render() {
    console.log("checking for element : ",document.getElementById("Bus3Bus3Stop2"))
    return (
                <MuiThemeProvider>
                    <React.Fragment>
                        <NavBar changeState = {this.changeState}  buttonName = "Log Out" toPath = "/"/>
                        
                        <div className = "container-fluid">
    
                        <div className = "stops-list">
    
                            <h2 className = "display-5">{this.route}</h2>
                                <ul className="list-group" id = "stops-list-page">
                                    {this.showStopsList(this.route)}
                                    
                                </ul>
                            </div>
                            
                            </div>
                    </React.Fragment>
                </MuiThemeProvider>
    )
    
  }
  
}

export default Stops
