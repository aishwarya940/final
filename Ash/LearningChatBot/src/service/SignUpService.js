import isEmpty from 'lodash/isEmpty';

export function signup(fullname, phone,password,confirmpassword, callback) {
  console.log("sign up called");
  const URL = 'http://10.0.2.2:3000/signup';
  return fetch('http://10.0.2.2:3000/signup', {
    method: 'POST',
    headers: new Headers({
          'Accept': 'application/json',
           'Content-Type': 'application/json', // <-- Specifying the Content-Type
    }),
    body: JSON.stringify({fullname:fullname, phone:phone, password:password, confirmpassword:confirmpassword})
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
