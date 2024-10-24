import React from "react";
import Actor from "./Actor";
const ActorList = ({actors}) =>{
return(
    <section>
        {actors.map((actor)=>
        <div key={actor.id}>
            <Actor actor={actor}/>
        </div>
        )}
    </section>
)
}
export default ActorList;
