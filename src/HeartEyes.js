import HeartEyesSVG from './static/svg/Heart-Eyes.svg';

const HeartEyes = ( { size } ) => {
    return ( 
        <div className="heartEyes">
            <img 
                className="heartEyesImg"
                src={ HeartEyesSVG } 
                style={ { width: parseInt( size ), height: parseInt( size ) } }
                alt="Heart Eyes Logo" 
            />
        </div>
     );
}
 
export default HeartEyes;