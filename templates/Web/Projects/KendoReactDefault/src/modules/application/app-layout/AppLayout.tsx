import React, { useState } from 'react';
import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';
import { withRouter } from 'react-router-dom';
import { IntlProvider, load, LocalizationProvider, loadMessages } from '@progress/kendo-react-intl';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import likelySubtags from 'cldr-core/supplemental/likelySubtags.json';
import currencyData from 'cldr-core/supplemental/currencyData.json';
import weekData from 'cldr-core/supplemental/weekData.json';

import numbers from 'cldr-numbers-full/main/es/numbers.json';
import currencies from 'cldr-numbers-full/main/es/currencies.json';
import caGregorian from 'cldr-dates-full/main/es/ca-gregorian.json';
import dateFields from 'cldr-dates-full/main/es/dateFields.json';
import timeZoneNames from 'cldr-dates-full/main/es/timeZoneNames.json';
import esMessages from '../../../Shared/Messages/es.json';
import { LocalStateProvider } from './LocalStateProvider';

load(
  likelySubtags,
  currencyData,
  weekData,
  numbers,
  currencies,
  caGregorian,
  dateFields,
  timeZoneNames
);

loadMessages(esMessages, 'es-ES');

const AppLayout: React.FC = (props: any) => {
  const [selectedValue, setSelectedValue] = useState('Spanish');
  const [language, setLanguage] = useState('es-ES');
  const [locale, setLocale] = useState('es');

  const onSelect = (event: any) => {
      props.history.push(event.target.props.route);
  };

  const handleChange = (event: any) => {
      const newLanguage = event.target.value === 'Spanish' ? 'es-ES' : 'en-US';
      const newLocale = event.target.value === 'Spanish' ? 'es' : 'en';
      
      setSelectedValue(event.target.value);
      setLanguage(newLanguage);
      setLocale(newLocale);
  };

  return (
    <div className="container-fluid kb-main-wrapper" id="layout">
    <div className="row kb-header k-grid-header">
      <div className="col-2 kb-logo">
        logo
      </div>
      <div className="col-7 kb-col-placeholder" />
      <div className="col-2 kb-languages text-right">
        <DropDownList 
                data={['English', 'Spanish']}
                value={selectedValue}
                onChange={handleChange}
        />  
      </div>
      <div className="col-1 kb-user-drop-down-wrapper">
        User DropDown
      </div>
    </div>
    <div className="row kb-header-content-wrapper">
      <div className="col-2 kb-side-navigation ">
        <PanelBar onSelect={onSelect}>
            <PanelBarItem expanded={true} title={'ModuleOne'} route="/moduleone">
                <PanelBarItem title={'ViewOne'} route="/moduleone/viewone" />
                <PanelBarItem title={'ViewTwo'} route="/moduleone/viewtwo" />
            </PanelBarItem>
            <PanelBarItem expanded={true} title={'ModuleTwo'} route="/moduletwo">
                <PanelBarItem title={'ViewOne'} route="/moduletwo/viewone" />
                <PanelBarItem title={'ViewTwo'} route="/moduletwo/viewtwo" />
            </PanelBarItem>
        </PanelBar>
      </div>
      <div className="col-10 kb-content k-content">
       <div >
            <LocalizationProvider language={language}>
                <IntlProvider locale={locale} >
                  <LocalStateProvider>
                    {props.children}
                  </LocalStateProvider>
                 </IntlProvider>
            </LocalizationProvider>
         </div>
        </div>
      <div className="col-sm-6">
          Checkbox
      </div>
    </div>
  </div>
  );
};

export default withRouter(AppLayout);
