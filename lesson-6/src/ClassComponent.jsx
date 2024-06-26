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
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </>
    );
  }
}

export default ClassComponent;
