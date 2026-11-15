import React from 'react';
import ReactDOM from 'react-dom';

import {Button} from './app';

/**
// На выходе должна быть кнопка с текстом «Мой текст»

<Button>
  Мой текст
</Button>
*/

ReactDOM.render(
  <React.StrictMode>
    <Button>Супер кнопка</Button>
  </React.StrictMode>,
  document.getElementById('root')
);