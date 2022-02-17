import './App.css';
// import Test from './Component/Test';
import New from './Component#2/New';
import Not from './Component#2/Not';
import C1 from './Component#3/C1';
import NC1 from './Component#4/NC1'
import D1 from './Component#3/D1';
import NC2 from './Component#4/NC2';
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



          <Route exact path='/New/:id' element={<New></New>}>
              {/* <New /> */}
          </Route>

          <Route exact path='/Not' element={<Not></Not>}>
              {/* <Not /> */}
          </Route>

          <Route exact path='/C1' element={<C1></C1>}>
              {/* <C1 /> */}
          </Route>

          <Route exact path='/NC1' element={<NC1></NC1>}>
              {/* <New /> */}
          </Route>

          <Route exact path="/D1/:name" element={<D1></D1>}>
              {/* <New /> */}
          </Route>

          <Route exact path="/NC2" element={<NC2></NC2>}>
              {/* <New /> */}
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
