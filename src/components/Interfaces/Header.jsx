import { Row } from "react-bootstrap";
import logo_factor_rh from '../../assets/logo_factor_rh.png';
 

const Header = (props) => {

  return (

    <div id="cabecera" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto" }}>
      <Row>
        <img className="logo" style={{ display: "flex", justifyContent: "left", alignContent: "centre", height: "100px", width: "100px" }} src={process.env.PUBLIC_URL + "logo_factor_rh.png"} alt="logo" />

      </Row>
    </div>)
}

export default Header;