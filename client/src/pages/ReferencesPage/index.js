import React, { Component } from "react";
// import "./style.css";
import Footer from "../../components/Footer/index";
import Navbar from "../../components/Navbar/index";

class ReferencesPage extends Component {
    // state = {
    //     unitdata
    // }

    // clickedUnit = title => {
    //     console.log(title);
    //     if (title) {
    //         localStorage.setItem("unit", title);
    //     }
    // }

    render() {
        return (
            <div>
                <Navbar></Navbar>
            <div className="container">
                <div className="row">
                    <h1>References</h1>
                    <div className="scroll-container col-sm-12 col-md-12 col-lg-12">
                        <p>Gibson, M. (2010). The Sommelier Prep Course: An introduction to the Wines, Beers, and Spirits of the World. Hoboken, NJ: John Wiley & Sons.</p>
                        <a href="https://www.amazon.com/Sommelier-Prep-Course-Introduction-Spirits/dp/0470283181/ref=sr_1_1?keywords=The+sommelier+prep+course&qid=1566156863&s=gateway&sr=8-1"><button>Get Book</button></a>

                        <p>Puckette, M., & Hammack, J. (2018). Wine Folly: Magnum edition. New York, NY: Penguin Random House LLC.</p>
                        <a href="https://www.amazon.com/Wine-Folly-Magnum-Master-Guide/dp/0525533893/ref=sr_1_3?crid=1HNANL76Z9NAC&keywords=wine+folly+magnum+edition+the+master+guide&qid=1566158915&s=gateway&sprefix=wine+folly%3A+ma%2Caps%2C134&sr=8-3"><button>Get Book</button></a>
                        {/* {this.state.unitdata.map(unit => (
                            <div className="scroll-units">
                                <Units
                                    clickedUnit={this.clickedUnit}
                                    id={unit.id}
                                    title={unit.title}
                                    image={unit.image}
                                />
                            </div>
                        ))} */}

                    </div>
                </div>
            </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default ReferencesPage;
