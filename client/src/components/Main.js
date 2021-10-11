import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import CustomNotification from './CustomNotification';
import {
  getNumberFromRange,
  getRandomArrItem,
  isEmpty,
  handleMessage,
} from '../utils/functions';
import { updateUser } from '../redux/features/users/usersSlice';

const Main = () => {
  const notifications = useSelector((state) => state.notifications.data);
  const config = useSelector((state) => state.configurations.data);
  const user = useSelector((state) => state.users.data);
  const dispatch = useDispatch();
  const [notificationsData, setNotificationsData] = useState([]);
  const [randNotification, setRandNotification] = useState({});
  const [randomShowTimePeriod, setRandomShowTimePeriod] = useState(null);
  const [disabledNotification, setDisabledNotification] = useState({});

  useEffect(() => {
    if (notifications?.length && !isEmpty(config) && !isEmpty(user)) {
      setNotificationsData(notifications);
      getRandomNotification(notifications);
    }
  }, [notifications, config]);

  useEffect(() => {
    if (randomShowTimePeriod) {
      const interval = setInterval(() => {
        getRandomNotification(notificationsData);
      }, randomShowTimePeriod);
      return () => clearInterval(interval);
    }
  }, [randomShowTimePeriod, notificationsData]);

  const getRandomNotification = (notificationsArr) => {
    let arr = [...notificationsArr];
    const { minDuration, maxDuration, minShowTimePeriod, maxShowTimePeriod } =
      config;
    if (arr.length) {
      let randomNotification =
        arr.length > 1 ? { ...getRandomArrItem(arr) } : { ...arr[0] };

      const notificationDuration =
        getNumberFromRange(minDuration, maxDuration) * 1000;

      const randomMessage = handleMessage(randomNotification.message);
      const finalNotification = {
        type: randomNotification.type,
        color: randomNotification.color,
        message: randomMessage,
        handleClose: onNotificationClose,
        duration: notificationDuration,
      };

      randomNotification.message = randomMessage;

      setDisabledNotification(randomNotification);

      setRandomShowTimePeriod(
        getNumberFromRange(minShowTimePeriod, maxShowTimePeriod) * 1000
      );
      setRandNotification(finalNotification);
    } else {
      setRandNotification(null);
    }
  };

  const onNotificationClose = async (notificationObj) => {
    let userNotificationArr = [...user.notifications];
    userNotificationArr.push(notificationObj);
    await dispatch(
      updateUser({ userId: user._id, notifications: userNotificationArr })
    );
    const updatedNotifications = notificationsData.filter(
      (notification) => notification._id !== notificationObj._id
    );
    setNotificationsData([...updatedNotifications]);
  };

  return (
    <StyledMain>
      <h1>Custom Notifications</h1>
      {randNotification ? (
        <CustomNotification
          randomNotification={randNotification}
          notificationObj={disabledNotification}
        />
      ) : (
        <div>No More Notifications</div>
      )}
    </StyledMain>
  );
};

export default Main;

const StyledMain = styled.div`
  text-align: center;
  margin-top: 50px;
`;
