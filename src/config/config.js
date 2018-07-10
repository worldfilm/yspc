import axios from 'axios'
const network = function(url, data, fun) {
  // url="http://ysnew.ya3test.com/Index/signup"
  console.log(url)
  console.log(data)
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  axios.defaults.headers.post['X-Requested-With']='XMLHttpRequest';
  axios.post(url,data)
  // if (data) {
  //   let method = 'post'
  //   fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //       'X-Requested-With':'XMLHttpRequest'
  //     },
  //     body: JSON.stringify(data),
  //   }).then((response) => {
  //     // return response.json(response);
  //     // console.log(response)
  //   }).then(data => {
  //     console.log('POST')
  //     console.log(data)
  //   }).catch(e => {
  //     console.log("POSTerror")
  //     console.log(e)
  //   })
  // } else {
  //   fetch(url, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     },
  //   }).then(function(response) {
  //     // return response.json();
  //     console.log(response)
  //   }).then(data => {
  //     console.log('GET')
  //     console.log(data)
  //   }).catch(e => {
  //     console.log("GETerror")
  //     console.log(e)
  //   })
  // }
}
export {
  network
}
