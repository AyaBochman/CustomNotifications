import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CustomNotification from './CustomNotification';

const Main = () => {
  const notifications = useSelector((state) => state.notifications.data);

  const [notificationsData, setNotificationsData] = useState([]);

  useEffect(() => {
    if (notifications?.length) {
      setNotificationsData(notifications);
      console.log('notifications here', notifications);
    }
  }, [notifications]);

  return (
    <StyledMain>
      <h1>Custom Notifications</h1>
      <CustomNotification />
    </StyledMain>
  );
};

export default Main;

const StyledMain = styled.div`
  text-align: center;
  margin-top: 50px;
`;
