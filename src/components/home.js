import { useState, useEffect } from "react";
import BlogList from "./blogList";
import useFetch from "../shared/useFetch";


const Home = () => {
        const {data:blogs,isLoading}=useFetch('http://localhost:8000/blogs')
   
    return (
        <div>
            {isLoading && <p>Loading ...</p>}
            {blogs && <BlogList blogs={blogs}  />}
        </div>
    );
};
export default Home;