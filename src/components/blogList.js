import { Link } from "react-router-dom";

const BlogList = ({ blogs, handleDelete }) => {

    return (
        <div className="flex justify-center w-full">
            <div className="space-y-4">
                {blogs.map((blog, index) => (
                    <Link to={`/details/${blog.id}`}>
                    <div key={index} className="p-4 w-[60vw] space-y-2 rounded-lg border border-gray-200 cursor-pointer hover:border-teal-600 hover:shadow-lg">
                        <p className="font-medium text-start text-lg text-teal-800">{blog.title}</p>
                        <p className="text-sm text-start">Written by <span className="font-medium">{blog.author}</span></p>
                        <div className="flex justify-end">
                            <a
                                className=" w-fit rounded border cursor-pointer border-red-500 bg-red-500 px-6 py-1 text-sm font-medium text-white hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring active:text-red-500"                        >
                                Delete
                            </a>
                        </div>
                    </div>
                    </Link>

                ))}

            </div>
        </div>
    );
}

export default BlogList;