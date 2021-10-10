import { configureStore } from '@reduxjs/toolkit';
import notificationsReducer from './features/notifications/notificationsSlice';
import usersReducer from './features/users/usersSlice';
import configurationsReducer from './features/configurations/configurationsSlice';

export default configureStore({
  reducer: {
    users: usersReducer,
    notifications: notificationsReducer,
    configurations: configurationsReducer,
  },
});
