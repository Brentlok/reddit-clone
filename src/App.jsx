import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Posts from './Components/Posts/Posts';

const App = () => {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <>
            <Navbar /> <Posts />
          </>
        }
      />
    </Routes>
  );
};

export default App;
