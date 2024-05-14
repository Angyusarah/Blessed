// eslint-disable-next-line react/prop-types
const Heading = ({heading, extraClass}) => {
    return ( <>
        <h1 className={`text-primary font-mont font-[600] text-[30px] leading-[39px] ${extraClass}`}>{heading}</h1>
    </> );
}
 
export default Heading;