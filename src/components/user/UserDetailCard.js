const UserDetailCard = (props) => {
    return (<p className="w-100 p-2 border border-secondary-subtle">
        {props.username} {props.age}
    </p>)
}

export default UserDetailCard;