import React, { Component } from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';

export default class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title Headline="planetas" />
        {planets.map((planeta, index) => (<PlanetCard
          key={ index }
          planetImage={ planeta.image }
          planetName={ planeta.name }
        />))}
      </div>
    );
  }
}
