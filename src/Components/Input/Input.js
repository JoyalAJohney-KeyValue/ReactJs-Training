import './Input.css'

const Input = (props) => { 
    return (
        <div className="entry">
            <label>{props.name}</label>
            
            {!props.isOption ? 
            <input className={props.class} placeholder={props.placeholder} type={props.type} />
            :
            <select className={props.class}>
                <option value="Role 1">Option 1</option>
                <option value="Role 2">Option 2</option>
                <option value="Role 3">Option 3</option>
            </select>
            }

        </div>
    );
}

export default Input;