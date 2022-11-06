import Heart from './Heart.js';
import Sun from './Sun.js';

const Header = () => {
    return ( 
        <div className="header">
            <div className="navbar">
                <Heart />
                <h1 className="heading">Hey Pretty Girl</h1>
                <Sun size="100"/>
            </div>
        </div>
     );
}
 
export default Header;