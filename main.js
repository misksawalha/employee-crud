var yourNameinput=document.getElementById('yourName');
var yourAgeinput=document.getElementById('yourAge');
var yourDepartmentinput=document.getElementById('yourDepartment');
var yourSalaryinput=document.getElementById('yourSalary');

var onBtn=document.getElementById('click');

var table=document.getElementById('data');

var updateBtn=document.getElementById('btns');

var searchIn=document.getElementById('search');

    if(localStorage.getItem("persons")) //في حال كان موجود باللوكال جيبه
       {
        var persons=JSON.parse(localStorage.getItem("persons")) ;//{رح اخزن فيها الاوبجيكت بالتالي الاي دي حيكون نفس رقم الاوبجيكت تاعه}
           }
  else //في حال ما كان موجود اعمله 
  {
     var persons=[];
     localStorage.setItem("persons",JSON.stringify(persons));
  }

onBtn.addEventListener('click',function(){
    addEmployee();
})


displayData();
function addEmployee(){
     
        
    var person={
         id:persons.length,
         name:yourNameinput.value,
         age:yourAgeinput.value,
         depart:yourDepartmentinput.value,
         salary:yourSalaryinput.value
     }
     persons.push(person);

     localStorage.setItem('persons',JSON.stringify(persons));
     displayData();
     clearInput();
    // console.log(persons);
}


function displayData(){
    var res=``;
    for(var i=0;i<persons.length;i++){
      res+=` <tr>
      <td>${persons[i].id}</td>
      <td>${persons[i].name}</td>
      <td>${persons[i].age}</td>
      <td>${persons[i].depart}</td>
      <td>${persons[i].salary}</td>
      <td><button class="btn btn-primary" onclick="update(${i})">update</button></td>
      <td><button class="btn btn-danger" onclick="deleteRow(${i})">Delete</button></td>
      </tr>`
    }
    table.innerHTML=res;
    
    /**`
       
        ` */
}

function deleteRow(id){
  persons.splice(id,1);
  localStorage.setItem("persons",JSON.stringify(persons));
  console.log(persons);
  displayData();

}
function update(up){
    // var temp=persons[up];
    // console.log(temp);
    //<button class="btn btn-warning" id="edit" >Update</button>
    //    

    updateBtn.innerHTML=`
    <button class="btn btn-primary" id="click" >Add Employee</button>
    <button class="btn btn-warning" id="editBtn" >Update</button>
    `;
    yourNameinput.value=persons[up].name;
    yourAgeinput.value=persons[up].age;
    yourDepartmentinput.value=persons[up].depart;
    yourSalaryinput.value=persons[up].salary;
    //displayData();

  
    editBtn.onclick=function(){
        persons[up].name=yourNameinput.value ;
        persons[up].age=yourAgeinput.value ;
        persons[up].depart=yourDepartmentinput.value ;
        persons[up].salary=yourSalaryinput.value ;
        localStorage.setItem("persons",JSON.stringify(persons));
        updateBtn.innerHTML=`
        <button class="btn btn-primary" id="click" >Add Employee</button>`;
        displayData();
        clearInput();
        displayData();

    }

    

}
clearInput();
function clearInput(){
    yourNameinput.value='';
    yourAgeinput.value='';
    yourDepartmentinput.value='';
    yourSalaryinput.value='';
}

function search(input){
    var res=``;
    for(var i=0;i<persons.length;i++){
     if(persons[i].name.toLowerCase().includes(input.toLowerCase())){
        res+=` <tr>
      <td>${persons[i].id}</td>
      <td>${persons[i].name}</td>
      <td>${persons[i].age}</td>
      <td>${persons[i].depart}</td>
      <td>${persons[i].salary}</td>
      <td><button class="btn btn-primary" onclick="update(${i})">update</button></td>
      <td><button class="btn btn-danger" onclick="deleteRow(${i})">Delete</button></td>
      </tr>`
     }  
     table.innerHTML=res;
        
    }
}
