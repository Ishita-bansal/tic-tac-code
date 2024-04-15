import background from './images/background.jpg';
function Homepage(){
      return(
        <div class="backgroundimg" style={{margin:0}}>
           <img src={background} alt="" width="100%" height="100%"/>
        </div>
      )
}

export default Homepage;