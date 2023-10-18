import Title from "./Title";
function Header(props) {
  return (
    <>
        {/* <h1 style={{color:"red", backgroundColor:"black"}}>
            {props.title}
        </h1> */}

        <h1 style={headingStyle}>
            {props.title}
        </h1>
        {/* <Title /> */}
    </>
  );
}

const headingStyle = {
    color:"red", 
    backgroundColor:"black"
}

export default Header;