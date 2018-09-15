export default function getBaseUrl(){
  // const inDev=window.location.hostname==="localhost"
  // return inDev ? 'http://localhost:3001/':'/'
  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : '/'
}

function getQueryStringParameterByName(name,url){
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g,"\\$&");
  var reg = new RegExp("[?&]"+name+"(=([^&#]*)|&|#|$)"), results= reg.exec(url);
  if (!results) return null
  if(!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g," "));
}