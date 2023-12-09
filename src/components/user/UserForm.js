const UserForm = (props) => {
    return (
        <form onSubmit={props.submitHandler}>
            <label className="form-label">Username</label>
            <input type="text" name="username" className="form-control"/>
            <label className="form-label">Age (Years)</label>
            <input type="number" name="age" className="form-control"/>
            <button type="submit" className="btn btn-primary mt-3 c-btn-1">Submit</button>   
        </form>
    )
}

export default UserForm;