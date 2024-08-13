import React  from "react";
import {Link} from "react-router-dom";
import "./card.css"

export default function Card ({name, image, types, id}){
    return(
        <Link to={`/pokemon/${id}`}>
            <div className="container-card">
                <h3>{name}</h3>
                <img src={image} alt="image not found" width="150vh" height="150vh" />
                <h3>
                    {types &&
                    types.map((e) => {
                        // return(
                        //     <div>
                        //         <img src={e.img} alt="" />
                        //         <p>{e.name}</p>
                        //     </div>
                        // )
                        let response = ""
                        if(e.name) {
                            response = e.name + " | ";
                        } else if (e){
                            response = e + " | "
                        }
                        return response
                    })}
                </h3>
            </div>
        </Link>
    )
}