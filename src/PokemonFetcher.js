import React from "react";

class PokemonFetcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displaydata: [],
    };
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Priya doubr", data);
        console.log("Fetched Pokémon data:", data.results);
        this.setState({
          displaydata: data.results,
        });
      })
      .catch((error) => {
        console.error("Error fetching Pokémon data:", error);
      });
  }

  render() {
    console.log(this.state.displaydata);
    const { displaydata } = this.state;
    return (
      <div>
        <h1>API Call</h1>
        {displaydata.map((priya, id) => {
          return <div key={id}>{priya.name}</div>;
        })}
      </div>
    );
  }
}

export default PokemonFetcher;
