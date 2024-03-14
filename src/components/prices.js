import menu from "./images/cafemenu.jpg"
import pdf from "./images/dummy.pdf";
import "./prices.css";
function Prices(){
      return(
        <>
        <div className="pricenav">
       
       </div>
        <div className="price-page">
            <div className="priceimg">
                <img  src={menu} alt="pic"/>
            </div>
            <div className="pricebtn">
                 <button onClick={() => window.open(pdf)}>SEE MENU</button>
            </div>
        </div>
        </>
      )
}

export default Prices;
