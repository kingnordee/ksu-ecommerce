import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore} from "redux";
import './styles/_Index.scss';
import App from './App';
import {rootReducer} from "./common/reducers";
import {Provider} from "react-redux";

const store = createStore(rootReducer, undefined, undefined);
export type RootState = ReturnType<typeof store.getState>

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <div className="index">
          <Provider store={store}>
              <App />
          </Provider>
      </div>
  </React.StrictMode>
);
