import './Button.css'

const Button = (props) => {
    return (
        props.isSubmit ? 
        <button onClick={props.function} class="button button1">{props.name}</button>
        :
        <button onClick={props.function} class="button">{props.name}</button>
    );
}

export default Button;