import isEmpty from 'lodash/isEmpty';

export function getCategory(subject,callback) {
  console.log("getCategory called");
  const URL = 'http://10.0.2.2:3000/getCategory';
  return fetch('http://10.0.2.2:3000/getCategory', {
    method: 'GET',
    headers: new Headers({
          'Accept': 'application/json',
           'Content-Type': 'application/json', // <-- Specifying the Content-Type
    }),
    body: JSON.stringify({subject:subject})
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
