import React from 'react';
import Card from "./components/Card"
import Data from './data.json'
import List from './components/List';
import Nested_List from './components/nestedmap';
import Products from './components/Assignment-1/Products';
import './components/Assignment-1/index.css'


function App() {
  console.log(Data[0].title)
  // let items = [];
  // for(let x=0;x<Data.length;x++){
  //   items.push(<Card title={Data[x].title}/>)
  // }
  //data mapping
  return (
    <div>
      <h1 className="title">BD Store</h1>
      <Products  />
    </div>
  //   <div className="App">
  //       { Data.map((item)=>
  //   <Card title={item.title}/>
  // )}
  //   <List />
  //   <Nested_List/>
  //   </div>
  );
}

export default App;
