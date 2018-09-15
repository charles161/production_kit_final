import {getUsers, deleteUser} from './api/userApi';
import './index.css'
getUsers().then(result => {
  let usersbody=""
  result.forEach(user => {
    usersbody+=`
    <tr>
    <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</td>
    <td>${user.id}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>
    </tr>
    `
  });

  global.document.getElementById('users').innerHTML=usersbody;

  const deleteLinks=global.document.getElementsByClassName('deleteUser');
//use array.from to cretae a real array for  dom collection
// get elemenst by class name only retunes n array like object
  Array.from(deleteLinks,link => {
    link.onclick = function (event){
      const element=event.target;
      event.preventDefault();
      deleteUser(element.attributes["data-id"].value);
      const row= element.parentNode.parentNode;
      row.parentNode.removeChild(row)
    }
  })

})