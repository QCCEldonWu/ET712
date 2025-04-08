import React from "react";
import "./index"
import avo from "./4043237_avatar_avocado_food_scream_icon.svg"
import "./index.css"

const User = function(props){
    return(
        <>
            <section className="card">
                <img src={props.image}/>
                    <div className="content">
                        <a className="linkauthor">{props.username}</a>
                    </div>
                    <div className="metadata">
                        <span className="postdate">{props.date}</span>
                    </div>
                    <div className="comment">
                        <p>{props.usercomment}</p>
                    </div>
            </section>
        </>
    )
}

export default User;