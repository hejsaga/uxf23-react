import React from "react";

class ClassComponent extends React.Component {
  /* I JavaScript är constructor en speciell metod som körs när en ny instans 
  av en klass skapas. Dess huvudsakliga syfte är att initialisera den nyss 
  skapade objektets tillstånd eller utföra någon form av förberedelse innan
  objektet är redo att användas. */

  constructor(props) {
    /* Denna rad anropar föräldarklassens konstruktor (Component) 
    med props-argumentet. I React, när du skapar en klasskomponent 
    som utökar Component, måste du anropa super(props) i konstruktorn 
    för att se till att föräldarklassens konstruktor anropas med lämpliga props. */
    super(props);

    /* I React-komponenter, när du refererar till instansvariabler eller 
    metoder inom klassen, behöver du använda this för att specifiera att du 
    refererar till den aktuella instansen av komponenten. */
    this.state = {
      count: 0,
      data: [],
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  // Livscykelmetod som körs när komponenten har monterats på DOM-trädet
  componentDidMount() {
    console.log("Component mounted");
    // TODO: Fetch data, start timers, etc.
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        // Uppdatera state med den hämtade datan
        this.setState({ data: data });
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }

  // Livscykelmetod som körs när komponenten har uppdaterats med nya props eller state
  componentDidUpdate(prevProps, prevState) {
    // console.log("Component updated");
    // TODO: Perform side-effects, e.g. fetch data based on updated props
  }

  // Livscykelmetod som körs när komponenten ska tas bort från DOM-trädet
  componentWillUnmount() {
    // console.log("Component will unmount");
    // TODO: Clean up timers, event listeners, etc.
  }

  render() {
    return (
      <>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>

        <p>Data from state: {this.state.data.map((object) => object.title)}</p>
      </>
    );
  }
}

export default ClassComponent;
