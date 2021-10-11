import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CustomNotification from './CustomNotification';
import {
  getNumberFromRange,
  getRandomArrItem,
  isEmpty,
  handleMessage
} from '../utils/functions';

const Main = () => {
  const notifications = useSelector((state) => state.notifications.data);
  const config = useSelector((state) => state.configurations.data);

  const [notificationsData, setNotificationsData] = useState([]);
  const [randNotification, setRandNotification] = useState({});
  const [randomShowTimePeriod, setRandomShowTimePeriod] = useState(null);

  useEffect(() => {
    if (notifications?.length && !isEmpty(config)) {
      setNotificationsData(notifications);
      getRandomNotification();
    }
  }, [notifications, config]);

  useEffect(() => {
    if (randomShowTimePeriod) {
      const interval = setInterval(() => {
        getRandomNotification();
      }, randomShowTimePeriod);
      return () => clearInterval(interval);
    }
  }, [randomShowTimePeriod]);

  const getRandomNotification = () => {
    let arr = notificationsData?.length ? notificationsData : notifications;
    const { minDuration, maxDuration, minShowTimePeriod, maxShowTimePeriod } =
      config;
    const randomNotification = getRandomArrItem(arr);
    const notificationDuration = getNumberFromRange(minDuration, maxDuration);

    const finalNotification = {
      type: randomNotification.type,
      color: randomNotification.color,
      message: handleMessage(randomNotification.message),
      handleClose: onNotificationClose,
      duration: notificationDuration,
    };
    setRandomShowTimePeriod(
      getNumberFromRange(minShowTimePeriod, maxShowTimePeriod) * 1000
    );
    setRandNotification(finalNotification);
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
