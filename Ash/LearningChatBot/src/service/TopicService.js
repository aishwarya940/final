import isEmpty from 'lodash/isEmpty';

export function getTopics(category,callback) {
  console.log("getTopics called");
  const URL = 'http://10.0.2.2:3000/getTopics';
  return fetch('http://10.0.2.2:3000/getTopics', {
    method: 'GET',
    headers: new Headers({
          'Accept': 'application/json',
           'Content-Type': 'application/json', // <-- Specifying the Content-Type
    }),
    body: JSON.stringify({category:category})
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

export function getTopicsDetails(category,topic,callback) {
    console.log("getTopicsDetails called");
    const URL = 'http://10.0.2.2:3000/getTopicsDetails';
    return fetch('http://10.0.2.2:3000/getTopicsDetails', {
      method: 'GET',
      headers: new Headers({
            'Accept': 'application/json',
             'Content-Type': 'application/json', // <-- Specifying the Content-Type
      }),
      body: JSON.stringify({category:category, topic:topic})
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
