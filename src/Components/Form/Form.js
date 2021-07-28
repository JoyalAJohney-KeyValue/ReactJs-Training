import Button from '../Button/Button';
import Input from '../Input/Input'
import './Form.css'

const Form = () => {
    return (
        <div className="detailsContainer">
            <div className="formDiv">
                <form>
                    <Input name="Employee Name" class="input" placeholder="Employee Name" type="text" isOption={false} />
                    <Input name="Employee ID" class="input" placeholder="Employee ID" type="text" isOption={false} />
                    <Input name="Joining Date" class="input" placeholder="Joining Date" type="text" isOption={false} />
                    <Input name="Role" class="input" isOption={true} />
                    <Input name="Status" class="input" isOption={true} />
                    <Input name="Experience" class="input" placeholder="Experience" type="text" isOption={false} />
                    <Input name="Address" class="input" placeholder="Address" type="text" isOption={false} />
                    <Input name="Upload ID proof" class="input" placeholder="Choose file" type="file" isOption={false} />
                </form>
                <div className="buttonDiv" >
                    <Button isSubmit={true} name="Create"/>
                    <Button isSubmit={false} name="Cancel" />
                </div>
            </div>
        </div>
    );
}


export default Form;