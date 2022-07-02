const AddForm = () => {
    return (
        <form className="container">
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