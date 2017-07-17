import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//引入hotcss
import './hotcss.js';

//重置css样式
import './css/reset.css';

//引入store
import store from './redux/store.js';

//引入react-redux 的 Provider 组件
import { Provider } from 'react-redux';

//定义
function autoRender(){
    ReactDOM.render(
        <Provider store={store}>
            <App />    
        </Provider>, 
        document.getElementById('root')
    );

}
//默认触发一次
autoRender();
//数据改变时触发
store.subscribe(autoRender);

registerServiceWorker();
