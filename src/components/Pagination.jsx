import { AppContext } from "../context/AppContext";
import { useContext } from "react";

function Pagination(){

    const{clickHandler,page,totalpages}=useContext(AppContext);
    return (
        <div>
            <div>
                {page>1 &&
                <button onClick={()=>clickHandler(page-1)}>Previous</button>    
                }
                {page<totalpages &&
                <button onClick={()=>clickHandler(page+1)}>Next</button>
                }
            </div>
            <div>Page {page} of {totalpages} Pages</div>
        </div>
    )
}

export default Pagination;