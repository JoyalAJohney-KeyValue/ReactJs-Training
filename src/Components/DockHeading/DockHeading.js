import './DockHeading.css'

const DockHeading = (props) => {
    return (
        <div className="heading">
            {props.name}
        </div>
    );
}

export default DockHeading;