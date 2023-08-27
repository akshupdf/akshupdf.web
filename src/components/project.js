import { useState } from "react";
import Projectcard from "./projectcard";

function  Project ( ) {

    const [data,setData] = useState([])

    return(
        <div>
            {
                data && data.map ((item)=>{
                    <Projectcard item={item} />
                })
            }

        </div>
    )
}
export default Project;