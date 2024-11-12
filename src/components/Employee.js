

function Employee(props){
    return (
        <div>
            <h3>Employee {props.name}</h3>
            <p>{props.role ? props.role : 'No role'}</p>
            {/*
                {props.role ?( 
                <p class="role">{props.role}</p>
            ) : (
                 <p class="norole">No role</p>
            )}
            */}
        </div>
    )
}

export default Employee;