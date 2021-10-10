import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CustomNotification from './CustomNotification';

const Main = () => {
  const notifications = useSelector((state) => state.notifications.data);
  const config = useSelector((state) => state.configurations.data);

  const [notificationsData, setNotificationsData] = useState([]);
  const [randNotification, setRandNotification] = useState({});

  useEffect(() => {
    console.log('condig', config);
    if (notifications?.length && config) {
      setNotificationsData(notifications);
      getRandomNotification(notifications, config);
    }
  }, [notifications, config]);

  const getRandomNotification = (arr, config) => {
    const { minDuration, maxDuration } = config;

    const randomNotification = getRandomArrItem(arr);
    const notificationDuration = getNumberFromRange(minDuration, maxDuration);

    const notif = {
      type: randomNotification.type,
      color: randomNotification.color,
      message: handleMessage(randomNotification.message),
      duration: notificationDuration,
    };
    console.log('notification final====', notif);
    setRandNotification(notif);
  };

  const getRandomArrItem = (arr) => {
    if (arr.length > 1) {
      return arr[Math.floor(Math.random() * arr.length)];
    }
    return arr[0];
  };

  const getNumberFromRange = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const handleMessage = (message) => {
    const randMessage = getRandomArrItem(message);
    let str = '';
    if (randMessage.toLowerCase().includes('sale')) {
      str = `${randMessage}!`;
    } else if (randMessage.toLowerCase().includes('new')) {
      str = `~~${randMessage}`;
    } else if (randMessage.toLowerCase().includes('limited edition')) {
      const splitted = randMessage.toLowerCase().split('limited edition');
      str = `${splitted[0]}LIMITED EDITION${splitted[1]}`;
    } else {
      str = randMessage;
    }
    return str;
  };

  return (
    <StyledMain>
      <h1>Custom Notifications</h1>
      {randNotification ? (
        <CustomNotification props={randNotification} />
      ) : null}
    </StyledMain>
  );
};

export default Main;

const StyledMain = styled.div`
  text-align: center;
  margin-top: 50px;
`;
