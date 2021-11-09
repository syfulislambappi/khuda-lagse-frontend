import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router'

const BlogsItem = () => {
    const {blogId} = useParams()
    const [blog, setBlog] = useState(null)
    useEffect(() => {
        fetch(`https://khuda-lagse-backend.herokuapp.com/blog/${blogId}`)
            .then(res => res.json())
            .then(data => setBlog(data[0]))
    }, [blogId])
    
    return (
        <Container className="py-5">
            <div className="w-50 rounded-3 border overflow-hidden p-2">
                <img className="mw-100" src={blog?.image} alt={blog?.title} />
            </div>
            <h2 className="my-3">{blog?.title}</h2>
            <p>{blog?.description}</p>
        </Container>
    )
}

export default BlogsItem
