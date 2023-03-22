// A presentational component receives its data through props.
// Its primary function is to simply display the data it receives the way
// we want them to, including styles, without modifying that data.

// Let's take a look at the example that displays the dog images.
// When rendering the dog images, we simply want to map over each
// dog image that was fetched from the API, and render those images.
// In order to do so, we can create a functional component that receives
// the data through props, and renders the data it received.

import React from "react";

export default function DogImages({ dogs }) {
  return dogs.map((dog, i) => <img src={dog} key={i} alt="Dog" />);
}
