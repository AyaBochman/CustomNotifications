import { configureStore } from '@reduxjs/toolkit';
import notificationsReducer from './features/notifications/notificationsSlice';
import usersReducer from './features/users/usersSlice';

export default configureStore({
  reducer: {
    users: usersReducer,
    notifications: notificationsReducer,
  },
});
