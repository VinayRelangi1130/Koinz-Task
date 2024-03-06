import {Component} from "react";

import "./index.css"

class Tokenomics extends Component{
    render(){
        return(
            <div className="container1">
                <h1 className="heading">Tokenomics</h1>
                <div className="container2">
                    <h1 className="heading2">Initial Distribution</h1>
                    <div className="container3">
                        <img src="https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png" className="circle" alt="circle"/>
                        <div className="img-container">
                            <div className="arrange">
                                <img src="https://www.vhv.rs/dpng/d/15-151266_blue-circle-png-logo-transparent-png.png" className="circ" alt="circ"/>
                                <p>Crowdsale Investors: 80%</p>
                            </div>
                            <div className="arrange">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFN0cfLQSDHu4BO2LFCCFgroRiVt--6aFXPvsG_zW6AZ0DrgYlZmOdHU5e-NLrxkTW4Ko&usqp=CAU" className="circ" alt="circ"/>
                            <p>Foundation: 20%</p>
                            </div>
                        </div>
                    </div>
                    <div className="container4">
                        <p className="para">Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim 
                            vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae.
                             Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tokenomics