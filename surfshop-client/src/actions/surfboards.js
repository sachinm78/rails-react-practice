import { resetSurfboardForm } from './surfboardForm';

const setSurfboards = surfboards => {
    return {
      type: 'GET_SURFBOARD_SUCCESS',
      surfboards
    };
  };
  
  const addSurfboard = surfboard => {
    return {
      type: 'CREATE_SURFBOARD_SUCCESS',
      surfboard
    };
  };

    export const createSurfboard = surfboard => {
        return dispatch => {
        return fetch('http://localhost:3001/surfboards', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ surfboard: surfboard })
          })
            .then(response => response.json())
            .then(surfboard => {
              dispatch(addSurfboard(surfboard));
              dispatch(resetSurfboardForm());
            })
            .catch(error => console.log(error));
        };
      };


    export const getSurfboards = () => {
        return dispatch => {
            return fetch('http://localhost:3001/surfboards')
            .then(response => response.json())
      .then(surfboards => dispatch(setSurfboards(surfboards)))
      .catch(error => console.log(error));
  };
};


