import React from 'react';
import styled from 'styled-components';

const CustomNotification = (props) => {
    const {type, message, iconSrc, color} = props;
  return <StyledNotification color={color}></StyledNotification>;
};

export default CustomNotification;

const StyledNotification = styled.div`
width: 500px;
height: 100px;
background-color: ${props => props.color || 'blue'};
`
