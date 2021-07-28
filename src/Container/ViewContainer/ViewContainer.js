import { useState } from 'react';
import EmployeeList from '../../Components/EmployeeList/EmlployeeList';
import Form from '../../Components/Form/Form';
import Header from '../../Components/Header/Header';
import './ViewContainer.css'

const ViewContainer = () => {
    const [isViewEmployee, setIsViewEmployee] = useState(true);
    // var isViewEmployee = true;

    const updateView = () => {
        setIsViewEmployee(!isViewEmployee);
    }

    return (
        <div className="rightContainer">
            <Header isViewEmployee={isViewEmployee} funcHandler={updateView} />
            {isViewEmployee ? <EmployeeList /> : <Form />}
        </div>
    );
}

export default ViewContainer;