import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {isEmpty} from '../utils/functions'

const CustomNotification = ({ props }) => {
  const { type, message, color, duration, handleClose } = props;
  const [boxColor, setBoxColor] = useState('');
  const [messageText, setMessageText] = useState('');
  const [messageTitle, setMessageTitle] = useState('');

useEffect(()=>{
if(props){
    console.log('props',props)
}else{
    console.log(' no props',props)
}
},[props])

  useEffect(() => {
    if (type && message && color) {
      setBoxColor(color);
      handleText(type, message);
    }
  }, [type, message, color]);

  const handleText = (type, text) => {
    if (type && text) {
      setMessageTitle(type.charAt(0).toUpperCase() + type.slice(1));
      setMessageText(text);
    }
  };

  return (
    <>
      {!isEmpty(props) ? (
        <StyledNotification color={boxColor}>
            <div>
              <b>{messageTitle}:&nbsp;</b>
              {messageText}
            </div>
          <IconButton onClick={handleClose} className={'closeBtn'}>
            <CloseIcon />
          </IconButton>
        </StyledNotification>
      ) : null}
    </>
  );
};

export default CustomNotification;

const StyledNotification = styled.div`
  width: 500px;
  min-height: 100px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 45px;
  border-radius: 20px;
  background-color: ${(props) => props.color || ''};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .closeBtn {
    position: absolute;
    top: 5px;
    right: 5px;
  }
`;
