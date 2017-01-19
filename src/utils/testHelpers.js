import React from 'react'
import {Provider} from 'react-redux'

const storeFake = (state) => {
	return {
		default: () => {},
    subscribe: () => {},
		dispatch: () => {},
		getState: () => {
			return { ...state };
		},
	};
};

const connectComponent = (component, props) => {
  return (
    <Provider store={storeFake(props)}>
      {component}
    </Provider>
  );
}

export default connectComponent
