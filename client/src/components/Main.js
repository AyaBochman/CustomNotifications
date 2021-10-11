import { stripColors } from 'colors';
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
      handleClose: onNotificationClose,
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
    let str = randMessage;
    if (randMessage.toLowerCase().includes('sale')) {
      str = `${str}!`;
    }
    if (randMessage.toLowerCase().includes('new')) {
      str = `~~${str}`;
    }
    if (randMessage.toLowerCase().includes('limited edition')) {
      let word = str.match(/\b(limited\sedition)\b/gi);

      if (word.length > 1) {
        word.forEach((w, i) => {
          str = str.replace(word[i], word[i].toUpperCase());
        });
      } else {
        str = str.replace(word[0], word[0].toUpperCase());
      }
    }
    return str;
  };

  const onNotificationClose = () => {
    console.log('close');
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
