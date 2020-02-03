import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import SharePlace from './Pages/SharePlace';
import MyPlace from './Pages/MyPlace';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={SharePlace} exact />
        <Route path='/my-place' component={MyPlace} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
