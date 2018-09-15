import 'whatwg-fetch';
import baseUrl from'./baseUrl';

export function getUsers(){
  return get('users');
}

function get(url){
  return fetch(baseUrl()+url).then(onSuccess,onError)
}

export function deleteUser(id){
  return del(`users/${id}`)
}

function del(url){
  const req = new Request(baseUrl()+url,{
    method:"DELETE"
  })
  return fetch(req).then(onSuccess, onError)
}

function onSuccess(response){
  return response.json();
}

function onError(err){
  console.log(err);// eslint-disable-line no-console
}

