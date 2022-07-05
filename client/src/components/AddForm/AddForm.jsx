const AddForm = () => {

    const addProduct = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const product = {
            title: formData.get('title'),
            price: formData.get('price'),
            thumbnail: formData.get('thumbnail')
        }

        fetch('http://localhost:8080/api/productos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <form onSubmit={addProduct} className="container">
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input required type="text" name="title" className="form-control" id="title" />
            </div>

            <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input required type="number" name="price" className="form-control" id="price" />
            </div>

            <div className="mb-3">
                <label htmlFor="thumbnial" className="form-label">Thumbnial</label>
                <input required type="text" name="thumbnail" className="form-control" id="thumbnial" />
            </div>

            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    )
}

export default AddForm