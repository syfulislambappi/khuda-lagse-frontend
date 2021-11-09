import { Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const CreateBlog = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
      fetch(`https://khuda-lagse-backend.herokuapp.com/blog`, {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => alert(data.message))
    reset();
  }
    return (
        <Container>
            <div className="w-50 mx-auto my-5">
            <h1 className="text-center my-5">Create Blog</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
                <Form.Label>Blog Title</Form.Label>
                <input className="form-control" {...register("title", { required: true, maxLength: 50 })} placeholder="Enter blog title" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Blog Description</Form.Label>
                <textarea className="form-control" {...register("description")} placeholder="Enter blog description" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Blog Image URL</Form.Label>
                <input className="form-control" {...register("image")} placeholder="Blog Image URL" rows="4" />
            </Form.Group>
                <input className="btn btn-primary" type="submit" value="Add Blog" />
            </Form>           
        </div>
        </Container>
    )
}

export default CreateBlog
