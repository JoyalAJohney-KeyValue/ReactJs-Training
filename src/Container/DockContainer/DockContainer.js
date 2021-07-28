import DockHeading from '../../Components/DockHeading/DockHeading';
import DockImage from '../../Components/DockImage/DockImage';
import './DockContainer.css'

const DockContainer = () => {
    return (
        <div className="leftContainer">
            <DockImage />
            <DockHeading name="Employee List" />
        </div>
    );
}

export default DockContainer;