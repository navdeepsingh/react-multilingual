import React, { Component } from 'react';
import { IntlProvider, addLocaleData, injectIntl } from "react-intl";
import arLocaleData from "react-intl/locale-data/ar";
import esLocaleData from "react-intl/locale-data/es";
import App from "./App";

addLocaleData(arLocaleData);
addLocaleData(esLocaleData);

function AppWrapper() {
  return (
    <IntlProvider locale="en">
      <App />
    </IntlProvider>
  );
}

export default AppWrapper;
