import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faEnvelope} from '@fortawesome/free-solid-svg-icons'
function Footer() {
  return (

    <div class="row p-5" style={{ color: "white", backgroundColor: "black", width:"100%" , margin:"0px"}} id="foot" >
      <div class="col-lg-4 col-md-12  col-sm-12">
        <h1>LOGO</h1>
        <p>SOLOGAN COMPANY</p>
      </div>
      <div class="col-lg-2 col-md-3 col-sm-12">
        <ul class="list-unstyled">
          <li>WEEBLY THEMES</li>
          <li>PRE-SALE FAQS</li>
          <li>SUBMIT A TICKET</li>
        </ul>
      </div>
      <div class="col-lg-2 col-md-3 col-sm-12">
        <ul class="list-unstyled">
          <li>SERVICES</li>
          <li>THEME TWEAK</li>
        </ul>
      </div>
      <div class="col-lg-2 col-md-3 col-sm-12">
        <ul class="list-unstyled">
          <li>SHOWCASE</li>
          <li>WIDGEKIT</li>
          <li>SUPPORT</li>
        </ul>
      </div>
      <div class="col-lg-2 col-md-3 col-sm-12">
        <ul class="list-unstyled">
          <li>ABOUT US</li>
          <li>CONTACT US</li>
          <li>AFFILIATES</li>
          <li>RESOURCES</li>
        </ul>
      </div>
      <div class="separator"></div>
      <div class="copyright">
        <div class="icons">
         <FontAwesomeIcon icon={faCoffee}/>
         <FontAwesomeIcon icon={faEnvelope}/>
        </div>
        <p>All Copyright rights are reserved</p>
      </div>
    </div>
     
  );
}

export default Footer;
