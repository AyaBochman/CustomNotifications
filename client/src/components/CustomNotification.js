import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CustomNotification = ({ props }) => {
  const { type, message, color } = props;
  const [boxColor, setBoxColor] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    if (type && message && color) {
      setBoxColor(color);
      setText(handleText(type, message));
    }
  }, [type, message, color]);

  const handleText = (type, text) => {
    return `${type && type.charAt(0).toUpperCase() + type.slice(1)}: ${text}`;
  };

  return (
    <>
      {props ? (
        <StyledNotification color={boxColor}>{text}</StyledNotification>
      ) : null}
    </>
  );
};

export default CustomNotification;

const StyledNotification = styled.div`
  width: 500px;
  height: 100px;
  margin: 0 auto;
  border-radius: 20px;
  background-color: ${(props) => props.color || ''};
  display: flex;
  align-items: center;
  justify-content: center;
`;
