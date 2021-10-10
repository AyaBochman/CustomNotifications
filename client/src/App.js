import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  createUser,
  getNotifications,
  getConfigurations,
} from './redux/features';
import Main from './components/Main';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadData() {
      try {
        await dispatch(getConfigurations());
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
      <Main />
    </div>
  );
}

export default App;
