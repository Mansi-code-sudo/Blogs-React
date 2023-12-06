import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import Spinner from "./Spinner";

function Blogs(){

    const {loading,posts}=useContext(AppContext);

    return (
        <div>
            {
                loading?(<Spinner/>):
                
                (posts.length==0?(<div>No Data Found </div>):
                
                (posts.map((post)=>(
                    <div>
                        <p>{post.title}</p>
                        <p>
                            By <span>{post.author}</span> on <span>{post.category}</span>
                        </p>
                        <p>Posted on {post.date}</p>
                        <p>{post.content}</p>
                        <div>
                            {post.tags.map((tag)=>{
                                return <span>{`#${tag}`}</span>
                            })}
                        </div>
                    </div>

                )))
                
                )
            }
        </div>
    )
}

export default Blogs;