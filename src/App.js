import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // JSX, Dynamic content, Dynamic Style in React part start
  const friends = ['Tanvir', 'Prince', 'Taher', 'Rayhan', 'Limon', 'Sazzad'];
  const friendsWife = ['Sharmin', 'Tanzila', 'Eti', 'Taniya', 'single']
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'}
  ];

  // const productNames = products.map(product => product.name);
  // console.log(productNames);

  // const friendsNames = friends.map(friend => friend);
  // console.log(friendsNames);

  const person = {
    name: "Eva Rahman",
    job: "singer"
  }
  const person2 = {
    name: "Dr. Mahfuz Rahman",
    job: "Doctor"
  }


  const style = {
    color: 'black',
    backgroundColor: 'green'
  }
  


  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done <code>src/App.js</code> and save to reload.
        </p>
        <h1 style={style}>my heading: {person.name + " " + person2.job}</h1>
        <p>My first React app</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {/* <li>{friends[0]}</li>  
          <li>{friends[1]}</li> 
          <li>{friends[2]}</li>
          <li>{friends[3]}</li>   */}

          {
            friends.map(friend => <li>{friend}</li>)
          }

          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>        

        {/* <Product name = {products[0].name} price={products[0].price}></Product> */}
        {/* <Product product = {products[0]}></Product>
        <br />
        <Product product = {products[1]}></Product>
        <br />
        <Product product = {products[2]}></Product> */}

        {
          products.map(pd => <Product product={pd}></Product>)
        }
        
        <Person name={'Humaion Kobir'} princess={'Beauty Akter Bithi'}></Person>
        <Person name={'Sumon Seikh'} princess={'Safriyan'}></Person>
        <Person name={friends[0]} princess={friendsWife[0]}></Person>
      </header>
    </div>

  );
}


function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount( count + 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={ () => setCount(count - 1)}>Decrease</button>
      {/* defrent way for button inc */}
      <button onClick={handleIncrease} >Increass</button>
    </div>
  )
}


function Users (){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then (data => setUsers(data));
  })
  return(
    <div>
      <h3>Dynamic Users Name: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>

      <h3>Dynamic Users Email: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}


function Product(props){
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    color: 'black',
    float: 'left'
  }
  return(
    <div style={productStyle}>
        <h3>{props.product.name}</h3>
        <h4>{props.product.price}</h4>
        <button>Buy now</button>
    </div>
  )
}




function Person(props){

  const personStyle = {
    border: '2px solid blue',
    margin: '10px',
    backgroundColor: 'lightgray',
    color: 'black'
  }
  const style2 = {
    color: 'tomato',
    // backgroundColor: 'yellow',
  }

  return (
    <div style={personStyle}>
      <h1 >Nayok: {props.name}</h1>
      <h3 style={style2}>Nayka: {props.princess}</h3>
    </div>
  )

}




export default App;
