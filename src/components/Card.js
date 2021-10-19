import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const CardWrapper = styled.div`
  height: 100%;
  width: 200px;
  border-radius: 8px;
  color: #fff;

  img {
    height: 150px;
    width: 100%;
  }
`;

const Card = ({ theme, data }) => {
  return (
    <CardWrapper style={{ backgroundColor: theme }}>
      <img src={data.avatar} alt="student photo" />
      <p>name: {data.name}</p>
      <p>skills: {data.skills}</p>
      <p>interests: {data.interests}</p>
      <p>gender: {data.gender}</p>
    </CardWrapper>
  );
};

export default Card;

// I am simply perfomring a prop-type validation
// for this component, so that any data type that is passed
// as a prop to this component corresponds with what i have assigned
// to it below.
Card.propTypes = {
  data: propTypes.array.isRequired,
  theme: propTypes.string.isRequired,
};
