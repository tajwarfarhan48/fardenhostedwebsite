import SunSVG from './static/svg/Sun.svg';

const Sun = ( { size } ) => {
    return ( 
        <div className="sun">
            <img 
                src={ SunSVG } 
                style={ { width: parseInt( size ), height: parseInt( size ) } }    
                alt="Sun Logo" 
            />
        </div>
     );
}
 
export default Sun;