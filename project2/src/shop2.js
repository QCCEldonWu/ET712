import React from "react";
import Card from "./card"
import AME from './images/DSC_1231_540x.jpg'
import BCL from './images/DSC_9333-Photoroom_540x.jpg'
import CGL from './images/DSC_9339-Photoroom_540x.jpg'
import EDL from './images/Elementaldragon_540x.jpg'
import FEL from './images/GOLDENDRAGON_540x.jpg'
import MCL from './images/DSC_9325-Photoroom_540x.jpg'
import RGL from './images/094AE5DF-684B-4730-A47B-973BA616A179_540x.jpg'
import RSL from './images/DSC_1215_540x.jpg'
import SWL from './images/DSC_9342-Photoroom_540x.jpg'

const Shop2 = function(){
    return(
        <>  
            <div className="row">
                <Card title="Ashes of My Enemies Liquid Core Dice Set" image={AME} description="59.99"></Card>
                <Card title="Bestow Curse Liquid Core Dice Set" image={BCL} description="59.99"></Card>
                <Card title="Celestial Galaxy Liquid Core Dice Set" image={CGL} description="59.99"></Card>
            </div>
            <div className="row">
                <Card title="Elemental Dragon Liquid Core Dice Set" image={EDL} description="59.99"></Card>
                <Card title="Flaming Eye Liquid Core Dice Set" image={FEL} description="59.99"></Card>
                <Card title="Mermaid Cove Liquid Core Dice Set" image={MCL} description="59.99"></Card>
            </div>
            <div className="row">
                <Card title="Royal Guard Liquid Core Dice Set" image={RGL} description="59.99"></Card>
                <Card title="Ruby Slipper Liquid Core Dice Set" image={RSL} description="59.99"></Card>
                <Card title="Starry Wisp Liquid Core Dice Set" image={SWL} description="59.99"></Card>
            </div>
        </>
    )
}
export default Shop2