import './App.css';
// import Test from './Component/Test';
import New from './Component#2/New';
import Not from './Component#2/Not';
import C1 from './Component#3/C1';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">

<div>HI</div>

        <Routes>

          {/* <Route exact path='/'>
          <div>Hi</div>

          </Route> */}



          <Route exact path='/New' element={<New></New>}>
              {/* <New /> */}
          </Route>

          <Route exact path='/Not' element={<Not></Not>}>
              {/* <Not /> */}
          </Route>

          <Route exact path='/C1' element={<C1></C1>}>
              {/* <C1 /> */}
          </Route>

        </Routes>

        {/* <New /> */}
        {/* <Not /> */}
        {/* <C1 /> */}
      </div>
    </Router>
  );
}

export default App;
