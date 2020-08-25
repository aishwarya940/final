import isEmpty from 'lodash/isEmpty';

export function getLogin(phone,password,callback) {
  console.log("Get login called");
  const URL = 'http://10.0.2.2:3000/login';
  return fetch('http://10.0.2.2:3000/login', {
    method: 'POST',
    headers: new Headers({
          'Accept': 'application/json',
           'Content-Type': 'application/json', // <-- Specifying the Content-Type
    }),
    body: JSON.stringify({phone:phone, password:password})
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
