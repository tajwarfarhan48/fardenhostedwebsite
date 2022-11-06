import RoseSVG from './static/svg/Rose.svg';

const Rose = ( { size } ) => {
    return ( 
        <img 
            src= { RoseSVG } 
            style={ { width: parseInt( size ), height: parseInt( size ) } }
            alt="Rose Logo" 
        />
     );
}
 
export default Rose;