import "./Button.css"

const Button = (props) => {

    console.log(props.color)

    return (
        <button
            className= {props.color}
            id="1" >
            {props.mensaje}
        </button>
    )
}


export default Button;