import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as weatherSelectors from './weather.selectors';
import * as weatherActions from './weather.actions';

class Weather extends Component {
  componentDidMount() {
    this.props.getWetherData();
  }

  render = () =>
    !this.props.weaterData ? null : (
      <main className="weather">
        <h1 className="weather__title">Weather data</h1>
        <ul className="cities-list">
          {this.props.weaterData.map(weaterForCity => (
            <li className="city" key={weaterForCity.id}>
              <span className="city__name">{weaterForCity.name}</span>
              <span className="city__temperature">{`${weaterForCity.temperature} F`}</span>
            </li>
          ))}
        </ul>
      </main>
    );
}

const mapState = state => ({
  weaterData: weatherSelectors.weatherDataSelector(state),
});

const mapDispatch = {
  getWetherData: weatherActions.getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
