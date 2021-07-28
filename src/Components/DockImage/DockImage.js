import './DockImage.css'
import companyLogo from './keyNew.jpeg'
// import companyLogo from '../../../public/images/keyNew.jpeg'

const DockImage = () => {
    return (
        <div className="image">
            <img className="dockImage" src={companyLogo} alt="Logo" />
        </div>
    );
}

export default DockImage;