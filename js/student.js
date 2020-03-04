// var main = document.getElementById("mainForm");
// var edit = document.getElementById("editForm");
// var editBtn = document.getElementById("editBtn");
// var saveBtn = document.getElementById("saveBtn");
// var cancelBtn = document.getElementById("cancelBtn");
// var name = document.getElementById("studentName");
// var rollNo = document.getElementById("rollNo");
// var editName = document.getElementById("editName");
// var editRollNo = document.getElementById("editRollNo");

function addFunction() {
    var main = document.getElementById("mainForm");
    var edit = document.getElementById("editForm");
    var editBtn = document.getElementById("editBtn");
    var saveBtn = document.getElementById("saveBtn");
    var cancelBtn = document.getElementById("cancelBtn");

    if (edit.style.display == "none") {
        main.style.display = "none";
        edit.style.display = "block";
        editBtn.style.display = "block";
        saveBtn.style.display = "none";
        cancelBtn.style.display = "none";

    } else {
        edit.style.display = "none";
        editBtn.style.display = "none";
        main.style.display = "block";
        saveBtn.style.display = "block";
        cancelBtn.style.display = "block";
    }
    this.addValues();
}

function addValues() {
    // var obj  = {};
    // Object.assign(obj, {"1":"aa", "2":"bb"})
    // console.log(obj)

    // var studentObj = '{"student":[' +
    // '{"name":"John","rollNo":"Doe" },' +
    // '{"name":"Anna","rollNo":"Smith" },' +
    // '{"name":"Peter","rollNo":"Jones" }]}';

    // obj = JSON.parse(studentObj);
    // // obj.student[1].name ="Pankhuri";
    // // obj.student[1].rollNo ="122";

    // document.getElementById("td1").innerHTML =  JSON.stringify(studentObj); 
    // document.getElementById("td2").innerHTML = obj.student[1].name + " " + obj.student[1].rollNo;

    // var student = '{"name" : "Sammy", "rollNo" : "1212", "location" : "Ocean"}';
    // localStorage.setItem('myStorage', JSON.stringify(student))
    // var obj = JSON.parse(localStorage.getItem('myStorage'));

    document.getElementById("td1").innerHTML = "Name: " + obj + " " + "<br>"
    document.getElementById("td2").innerHTML = "Roll No: " + obj + " " + "<br>" ;

    // // obj.name = document.getElementById("rollNo").value;
    // // obj.rollNo = document.getElementById("rollNo").value;

    // document.getElementById("editName").value =  document.getElementById("studentName").value ;
    // document.getElementById("editRollNo").value = document.getElementById("rollNo").value;
    
    var obj = {"nissan": "sentra", "color": "green"};

   localStorage.setItem('myStorage', JSON.stringify(obj));
// And to retrieve the object later
   var obj1 = JSON.parse(localStorage.getItem('myStorage'));


}

function EditDetailsFunction() {
    var editBtn = document.getElementById("editBtn");
    var saveBtn = document.getElementById("saveBtn");
    var cancelBtn = document.getElementById("cancelBtn");

    if (editBtn.style.display == "block") {
        editBtn.style.display = "none";
        saveBtn.style.display = "block";
        cancelBtn.style.display = "block";
    } else {
        editBtn.style.display = "block";
        saveBtn.style.display = "none";
        cancelBtn.style.display = "none";
    }
}

function saveFunction() {

    document.getElementById("td1").value = document.getElementById("editName").value;
    document.getElementById("td2").value = document.getElementById("editRollNo").value;

}

function cancelFunction() {
    var main = document.getElementById("mainForm");
    var edit = document.getElementById("editForm");
    var editBtn = document.getElementById("editBtn");
    var cancelBtn = document.getElementById("cancelBtn");

    if (cancelBtn.style.display == "block") {
        main.style.display = "block";
        edit.style.display = "none";
        editBtn.style.display = "none";
    } else {
        main.style.display = "none";
        edit.style.display = "block";
        editBtn.style.display = "block";
    }
}