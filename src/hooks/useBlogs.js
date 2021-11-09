import { useEffect, useState } from "react"

const useBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    
    useEffect(() => {
        fetch(`https://khuda-lagse-backend.herokuapp.com/blog`)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    
    return {blogs};
}

export default useBlogs
