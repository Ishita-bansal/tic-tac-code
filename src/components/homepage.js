import background from './images/background.jpg';
function Homepage(){
  
    // let urls = [
    //   'https://fakestoreapi.com/products/20',
    //    'https://fakestoreapi.com/users/10',
    //   //  'https://fakestoreapi.com/auth/login'
    // ]

    // let requests = urls.map(url=>fetch(url));

    // Promise.all(requests).then(responses=>responses.forEach(response=>console.log('${response.id , ${response.title}')));
  
      return(
        <div class="backgroundimg" style={{margin:0}}>
           <img src={background} alt="" width="100%" height="100%"/>
        </div>
      )
}

export default Homepage;