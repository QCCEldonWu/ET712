import React from "react";
import Card from "./card"
import DEB from './images/DSC_1058.webp'
import AFM from './images/DSC_0030_97a77bef-e145-492c-9caa-c80835c6a94f_720x.jpg'
import ARB from './images/arbys.jpg'
import CDA from './images/clerics-domain-aqua-and-bronze-metal-dice.jpg'
import ERC from './images/elder-runes-cloudy-skies-metal-set_540x.jpg'
import ISE from './images/SHARPEDGEDMETAL7PIECEDICESET_540x.jpg'
import LOV from './images/DSC_2006_2_720x.jpg'
import TSA from './images/DSC_0467_720x.jpg'
import VWI from './images/DSC_0087_4b7ed0cc-0954-4f6e-aa95-fc3399018b1c_720x.jpg'

const Shop1 = function(){
    return(
        <>  
            <div className="row">
                <Card id="ARB" title="Arby's© Official Metal Dice Set" image={ARB} description="39.99"></Card>
                <Card id="AFM" title="Asteroid Fields Metal Dice Set" image={AFM} description="39.99"></Card>
                <Card id="DEB" title="Bloodied Black Dragon's Egg Metal Dice Set" image={DEB} description="39.99"></Card>
            </div>
            <div className="row">
                <Card id="CDA" title="Cleric's Domain Aqua And Bronze Metal Dice Set" image={CDA} description="39.99"></Card>
                <Card id="ERC" title="Elder Runes Cloudy Skies Metal Dice Set" image={ERC} description="39.99"></Card>
                <Card id="ISE" title="Iridescent Sharp-Edged Metal Dice Set" image={ISE} description="39.99"></Card>
            </div>
            <div className="row">
                <Card id="LOV" title="Legends of Valhalla Hollow Metal Dice Set" image={LOV} description="39.99"></Card>
                <Card id="TSA" title="The Spider Aluminum Metal Dice Set" image={TSA} description="39.99"></Card>
                <Card id="VWI" title="Vortex Warp Metal Dice Set" image={VWI} description="39.99"></Card>
            </div>
        </>
    )
}
export default Shop1