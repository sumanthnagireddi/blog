import { useParams } from "react-router-dom";
import useFetch from "../shared/useFetch";

const Blogdetails = () => {
    const {id}=useParams()
    const {data:blogs,isLoading} =useFetch('http://localhost:8000/blogs/'+id)
    return ( 
        <div>
             {isLoading && <p>Loading ...</p>}
            <p>Blog details -{id} </p>
            {blogs && <p>{blogs.title} ---- {blogs.description}</p>}
        </div>
     );
}
 
export default Blogdetails;