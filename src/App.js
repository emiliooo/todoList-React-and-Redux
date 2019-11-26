import React , {Component } from 'react';
import Todos from './Todo';
import AddItem from './AddForm';
import {Provider} from 'react-redux';
import store from './store/store';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="container App center-align">
              <h1 className="#9fa8da indigo lighten-3">TODO LIST</h1>
              <Todos />
              <AddItem />
        </div>
      </Provider>
    );
  }
}

export default App;