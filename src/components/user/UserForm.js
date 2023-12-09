const UserForm = () => {
    return (
        <form>
            <label className="form-label">Username</label>
            <input type="text" className="form-control"/>
            <label className="form-label">Age (Years)</label>
            <input type="number" className="form-control"/>
            <button type="submit" className="btn btn-primary mt-3 c-btn-1">Submit</button>   
        </form>
    )
}

export default UserForm;