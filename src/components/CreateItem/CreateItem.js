import { Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const CreateItem = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
      fetch(`https://khuda-lagse-backend.herokuapp.com/item`, {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => alert(data.message))
      reset()
  }
    return (
        <Container>
            <div className="w-50 mx-auto my-5">
            <h1 className="text-center my-5">Add New Item</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
                <Form.Label>Item Name</Form.Label>
                <input className="form-control" {...register("title", { required: true, maxLength: 50 })} placeholder="Enter food item name" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Item Description</Form.Label>
                <textarea rows="5" className="form-control" {...register("description")} placeholder="Enter food item description..." />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Item Price</Form.Label>
                <input className="form-control" {...register("price")} placeholder="Food item price" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Item Image</Form.Label>
                <input className="form-control" {...register("image")} placeholder="Food item image URL" />
            </Form.Group>
                <input className="btn btn-warning" type="submit" value="Add Item" />
            </Form>           
        </div>
        </Container>
    )
}

export default CreateItem
