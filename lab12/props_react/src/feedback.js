import React from "react";
import "./index.css";
import Modalwindow from './modalwindow.js';

const User_feedback = function(props){
    const openmodalwindow = function(){
        const modalwindow = document.querySelector(".modalwindow")
        modalwindow.computedStyleMap.display = "block;"
    }
    return(
        <>
            <main className="feedbackcontainer">
                <section className="feedbackcard">
                    <div className="content"><p>{props.username}</p></div>
                    <div className="description">{props.children}</div>
                    <div className="cardfooter">
                        <p className="addicon" onClick={openmodalwindow}><span>&#10011;</span>Add feedback</p>
                    </div>
                </section>
            </main>
            <Modalwindow/>
        </>
    )
}

export default User_feedback;