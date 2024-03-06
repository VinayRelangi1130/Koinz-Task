import { Component } from "react";

import "./index.css"

class About extends Component {
    render(){
        return(
            <div className="container1">
                <h1 className="heading">About Bitcoin</h1>
                <div>
                    <h1 className="heading2">What is Bitcoin?</h1>
                    <p className="para1">Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. 
                        BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, 
                        and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max 
                        supply of 21 M BTC.</p>
                </div>
                <hr></hr>
                <div className="container2">
                    <h1 className="heading3">Lorem ipsum dolor sit amet</h1>
                    <div className="con3">
                        <p>Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. 
                            Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. 
                            Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat 
                            pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.</p>
                        
                        <p>Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. 
                        Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique 
                        placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. 
                        Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.</p>

                        <p>Fermentum hendrerit imperdiet nulla viverra faucibus. 
                        Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. 
                        Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. 
                        Ullamcorper dui</p>
                    </div>
                </div>
                <hr></hr>
                <div>
                    <h1 className="head">Already Holding Bitcoin?</h1>
                    <div className="img-con">
                        <div className="grad">
                            <img src="https://www.finsmes.com/wp-content/uploads/2023/10/image-10-1024x682.jpeg" className="market"  alt="bit"/>
                            <div className="btn-con">
                                <h1 className="calculate">Calculate Your Profits</h1>
                                <button className="btn">Check Now_ </button>
                            </div>
                        </div>

                        <div className="grad2">
                            <img src="https://www.finsmes.com/wp-content/uploads/2023/10/image-10-1024x682.jpeg" className="market"  alt="bit"/>
                            <div className="btn-con">
                                <h1 className="calculate">Calculate Your Tax Liability</h1>
                                <button className="btn">Check Now_ </button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="last-con">
                    <p>Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac.
                         Mi adipiscing semper scelerisque porttitor pulvinar nunc risus.
                         Fermentum potenti iaculis lacinia congue ipsum fames amet dui. 
                         Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>
                </div>
            </div>
            
        )
    }
}

export default About