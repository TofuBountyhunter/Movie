// Example starter JavaScript for disabling form submissions if there are invalid fields
// (function () {
//     'use strict'
  
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.querySelectorAll('.needs-validation')
  
//     // Loop over them and prevent submission
//     Array.prototype.slice.call(forms)
//       .forEach(function (form) {
//         form.addEventListener('submit', function (event) {
//           if (!form.checkValidity()) {
//             event.preventDefault()
//             event.stopPropagation()
//           }
  
//           form.classList.add('was-validated')
//         }, false)
//       })
//   })()
// let a=()=>{
  
// }

document.getElementById("submit_button").onclick=function(event){
  let a=document.getElementById("Movie_name").value;
  console.log(a);
  console.log("amdjijfoiejijewf");
  let list=[]
  list.push(document.getElementById("Movie_name").value);
  list.push(document.getElementById("Epis").value );
  list.push(document.getElementById("").value );
  list.push(document.getElementById("sPrice").value );
  list.push(document.getElementById("rPrice").value );
  list.push(document.getElementById("release_date").value );
  list.push(document.getElementById("rating").value );
  list.push(document.getElementById("director").value );
  list.push(document.getElementById("writername").value );
  list.push(document.getElementById("P_house").value );
  list.push(document.getElementById("email").value );
  list.push(document.getElementById("phnum").value );
  list.push(document.getElementById("desp").value );
  console.log(list);
  event.preventDefault();
}