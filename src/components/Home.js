import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [ blogs, setBlogs] = useState([
        {title: "My new website", body: "lorem ipsum...", author: "Lucia",id: "1"},
        {title: "Welcome Doggies", body: "lorem ipsum...", author: "Alia",id: "2"},
        {title: "Oranges are great", body: "lorem ipsum...", author: "Khalel",id: "3"},
    ])
    const [ name, setName] = useState("Lucia");

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log("use effect ran")
    }, [name]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete} />
            <button onClick={() => setName("Khalel")}>Change name</button>
            <p>{name}</p>
        </div>
     );
}
 
export default Home;