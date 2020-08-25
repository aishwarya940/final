import isEmpty from 'lodash/isEmpty';

export function getSubjects(callback) {
  console.log("Get Subjects Service called");
  const URL = 'http://10.0.2.2:3000/getSubjects';
  return fetch('http://10.0.2.2:3000/getSubjects', {
    method: 'GET',
    headers: new Headers({
          'Accept': 'application/json',
           'Content-Type': 'application/json', // <-- Specifying the Content-Type
    }),
  }).then((response) => response.json()).then((responseJson) => {
      if (!isEmpty(responseJson)) {
        return callback(responseJson);
      } else {
        return callback("user not found");
      }
  })
  .catch((error) => {
    //alert('error :' , error);
    return callback("user not found");
  });
}
