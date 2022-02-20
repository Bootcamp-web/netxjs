import { createStore, createHook, defaults } from 'react-sweet-state';

// if (typeof window !== 'undefined'){
//   console.log( 'enable devtools')
//   defaults.devtools=true
// }

const increment = (by = 1) =>({ setState, getState }) => {
  const updateCount = getState().count + by;
  if (updateCount >= 0) {
    setState({
      count: getState().count + by,
    });
  } else {
    console.error('Alert! count must be a positive number');
  }
};

const Store = createStore({
  
  initialState: {
    count: 0,
  },
  
  actions: {
    increment,
    decrease: (by=1) =>({dispatch})=>{
      dispatch(increment(by *-1));

    },
      
  },

  name: 'counter',
});

export const useCounter = createHook(Store);