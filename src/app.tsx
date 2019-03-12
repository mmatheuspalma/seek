import React, { Component } from 'react';

import { addLocaleData, IntlProvider } from 'react-intl';
import pt from 'react-intl/locale-data/pt';
addLocaleData([...pt]);

import { formats } from 'helpers/constants';

import Routes from 'pages/routes';

export default class App extends Component<{}, {}> {
   render(): React.ReactNode {
      return (
         <IntlProvider locale={'pt-BR'} formats={formats}>
            <Routes/>
         </IntlProvider>
      );
   }
}
