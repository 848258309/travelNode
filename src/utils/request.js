import 'whatwg-fetch';
import queryString from 'query-string';

export function getRequest(url,payload,success,error){
  fetch(`${url}.action`, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Accept':'application/json, text/javascript, */*',
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body: queryString.stringify(payload),
  }).then(response => response.json())
    .then((data) => {success(data)})
    // .catch(err => {alert(err)});
}
