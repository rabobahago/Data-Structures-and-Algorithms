// The primary function of container components is to pass data to
//  components, which they contain. Container components themselves
//  usually don't render any other components besides the presentational components
//  that care about their data. Since they don't render
//  anything themselves, they usually do not contain any styling either.

// In our example, we want to pass dog images to the DogsImages
// presentational component. Before being able to do so, we need to fetch
// the images from an external API. We need to create a container component
// that fetches this data, and passes this data to the presentational component
// DogImages in order to display it on the screen.

import React from "react";
import DogImages from "./DogImages";

export default class DogImagesContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      dogs: [],
    };
  }

  componentDidMount() {
    fetch("https://dog.ceo/api/breed/labrador/images/random/6")
      .then((res) => res.json())
      .then(({ message }) => this.setState({ dogs: message }));
  }

  render() {
    return <DogImages dogs={this.state.dogs} />;
  }
}
