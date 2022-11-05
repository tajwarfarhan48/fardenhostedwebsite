import './App.css'; 
import Heart from './Heart.js';
import Sun from './Sun.js';
import HeartEyes from './HeartEyes.js';

const Body = () => {
    return ( 
        <div className="parent">
            <Heart />
            <Sun size="50"/>
            <HeartEyes size="50"/>
        </div>
     );
}
 
export default Body;