const Notification = (props) => {
    return (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
        {props.message}
      </div>
    )
}

export default Notification;