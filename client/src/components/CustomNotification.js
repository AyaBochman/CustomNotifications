import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const CustomNotification = ({ randomNotification, notificationObj }) => {
  const { type, message, color, duration, handleClose } = randomNotification;
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (type && message && color && duration && handleClose) {
      setNotification({
        type,
        messageTitle: type.charAt(0).toUpperCase() + type.slice(1),
        messageText: message,
        color,
        duration,
        handleClose,
      });
    }
  }, [type, message, color, duration]);

  useEffect(() => {
    setTimeout(() => {
      setNotification(null);
    }, duration);
  }, [duration]);

  const onClose = () => {
    handleClose(notificationObj);
    setNotification(null);
  };

  return (
    <>
      {notification ? (
        <StyledNotification color={notification.color}>
          <div>
            <b>{notification.messageTitle}:&nbsp;</b>
            {notification.messageText}
          </div>
          <IconButton onClick={onClose} className={'closeBtn'}>
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
