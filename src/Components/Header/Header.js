import Button from '../Button/Button';
import './Header.css'

const Header = (props) => {

    return (
        <div className="formHeading">
            {props.isViewEmployee ? "View Employee" : "Create Employee"}
            {props.isViewEmployee ? 
            <Button isSubmit={true} function={props.funcHandler} name="Create" />
            :
            <Button isSubmit={true} function={props.funcHandler} name="View" />}
        </div>
    );
}

export default Header;