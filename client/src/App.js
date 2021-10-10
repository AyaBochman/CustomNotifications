import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from './redux/features/users/usersSlice';
import { getNotifications } from './redux/features/notifications/notificationsSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadData() {
      try {
        await dispatch(createUser());
        await dispatch(getNotifications());
      } catch (error) {
        console.error(error);
      }
    }
    loadData();
  }, [dispatch]);

  return (
    <div>
      <h1>Custom Notifications</h1>
    </div>
  );
}

export default App;
