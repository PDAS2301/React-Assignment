import React from 'react';
 import axios from 'axios';

class Pokemon extends React.Component
{
constructor(props){
    super(props)
    this.state={
        value:[],
    };
}

componentDidMount(){
axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0').then((response) => {
    console.log('Fetched Pokémon data with Axios:', response.data);
    this.setState({
        value:response.data.results
    })
})

.catch(error => {
  console.error('Error fetching Pokémon data with Axios:', error);
});
}
render(){
console.log(this.state.value)
const{value}=this.state;
return(
 <div>

<div> Axios</div>

{value.map((result, id)=>{
 return<div key={id}>{result.name}</div>; 
})}

 </div>   

);

}

}
export default Pokemon;