import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import BaseViewOne from './BaseViewOne';
import propsConfig from './propsConfig';
import { shallow } from 'enzyme';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

it('renders without crashing2', () => {
  const localStateProps = {
    grid524d465702174e8fadf0a553d2853698: {
    }
  };

  let wrapper = shallow(
    <BaseViewOne 
      {...propsConfig.components} 
      localStateProps={localStateProps}  
    />
    );

  expect(wrapper.find(Grid).length).toBe(1);
  expect(wrapper.find(Column).length).toBe(4);
});

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('can render and update a counter', () => {
  // Test first render and componentDidMount
  const localStateProps = {
    grid524d465702174e8fadf0a553d2853698: {
    }
  };

  act(() => {
    ReactDOM.render( 
      (
      <BaseViewOne  
        {...propsConfig.components} 
        localStateProps={localStateProps} 
      /> 
      ), 
      container);
  });
  const div = container.querySelector('.row');
  expect(div.firstElementChild.className).toBe('col-12');
});
