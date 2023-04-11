import { Row } from "react-bootstrap";

const Header = (props) => {

  return (

    <div id="cabecera" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto" }}>
      <Row>
        <img className="logo" style={{ display: "flex", justifyContent: "left", alignContent: "centre", height: "100px", width: "100px" }} src={process.env.PUBLIC_URL + "logo192.png"} alt="logo" />

      </Row>
    </div>)
}

export default Header;