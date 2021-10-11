import { stripColors } from 'colors';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CustomNotification from './CustomNotification';
import { getNumberFromRange, getRandomArrItem } from '../utils/functions';

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

  const handleMessage = (message) => {
    const randMessage = getRandomArrItem(message);
    let str = randMessage;
    const words = { 1: 'sale', 2: 'new', 3: 'limited edition' };
    for (let key in words) {
      if (str.toLowerCase().includes(words[key])) {
        switch (key) {
          case '1': {
            str = `${str}!`;
            break;
          }
          case '2':
            str = `~~${str}`;
            break;
          case '3':
            let foundWord = str.match(/\b(limited\sedition)\b/gi);
            if (foundWord.length > 1) {
              foundWord.map((word) => {
                str = str.replace(word, word.toUpperCase());
              });
            } else {
              str = str.replace(foundWord[0], foundWord[0].toUpperCase());
            }
            break;
          default:
            return str;
        }
      }
    }

    // if (randMessage.toLowerCase().includes('sale')) {
    //   str = `${str}!`;
    // }
    // if (randMessage.toLowerCase().includes('new')) {
    //   str = `~~${str}`;
    // }
    // if (randMessage.toLowerCase().includes('limited edition')) {
    //   let word = str.match(/\b(limited\sedition)\b/gi);

    //   if (word.length > 1) {
    //     word.forEach((w, i) => {
    //       str = str.replace(word[i], word[i].toUpperCase());
    //     });
    //   } else {
    //     str = str.replace(word[0], word[0].toUpperCase());
    //   }
    // }

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
