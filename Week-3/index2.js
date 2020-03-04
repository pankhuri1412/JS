// var studentsData = '{ "student" : [' +
// '{ "firstName":"John" , "lastName":"Doe" },' +
// '{ "firstName":"Anna" , "lastName":"Smith" },' +
// '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

// var obj = JSON.parse(studentsData);
// console.log(document.getElementById('id1'));

console.log(document.getElementsByTagName('p'));
console.log(document.getElementsByClassName('preview'));

var fruits =['Apple', 'Orange', 'Grapes', 'Banana'];
// var grades =[12,2,34,6,78,90];
var gradesEmpty = [];
var grades =[12,2, , ,34,6, ,78,90];
var add = 0;
var count = 0;

function loadFruits() {
    document.getElementById('fruits').innerHTML = fruits;
}

function addFruit() {
    let fruit = prompt("What is your Favourite fruit?");
    fruits[fruits.length] = fruit;
    document.getElementById('fruits').innerHTML = fruits;
}

// function sum() {
//     for(i= 0; i<grades.length; i++){
//         add += grades[i];
//     }
//     console.log(document.getElementById('sum').innerHTML = add);
// }

// function sum() {
//     if(grades.length > 0) {

//         for(i= 0; i<grades.length; i++){
//             if (grades[i] != undefined){
//                 add += grades[i];
//             }
//             document.write(add/grades.length);
//         }

//     } else {
//         console.log('Empty Array');
//     }
// }

function sum() {
    if(grades.length > 0) {

        for(i= 0; i<grades.length; i++){
            if (grades[i] != undefined){
                add += grades[i];
                count = count+1;
            }
        }
        document.write(add/count);

    } else {
        console.log('Empty Array');
    }
}


function sumTest() {
    if(gradesEmpty.length != 0){
       console.log("Grades is Empty!!!")
    }
    else {
        for(i=0; i<grades.length; i++){
            add += grades[i];
        }
        console.log(document.getElementById('sum1').innerHTML = add);
    }

}

function patterns() {
    // var i, j;
    // //outer loop
    // for(i=1; i <= 5; i++)
    //  {
    //  //inner loop
    //   for(j=1; j<=i; j++)
    //  {
    //    document.write('*');
    //   }
    //    document.write('<br/>');
    //  }

    // var i, j = 0;
    // for(i= 0; i<=2; i++) {
    //     for(j=0; j<= i; j++)
    //     {
    //         for(k=0; k<=j; k++)
    //         {
    //             document.write("*");
    //         }
    //         document.write("<br/>");
    //     }
    //     document.write('<br/>')
    // }

    var i, j;
    //outer loop
    for(i=5;i>=1;i--)
     {
     //inner loop
      for(j=1;j<=i;j++)
     {
       document.write('*');
      }
       document.write('<br/>');
     }
}

function addName() {
    var name = prompt('what is your name?');
    if(name.length != 0){
        if(name === 'Pankhuri'){
            document.getElementById('name').innerHTML  = name + ' Meaning of your name is:- Patel';
        }
        else {
            document.getElementById('name').innerHTML  = 'Hello ' + name;
        }
    } 
    else {
        document.write('Please write the name!!')
    }

}

function addName() {
    var name = prompt('what is your name?');
    if(name.length != 0 && name == 'Pankhuri'){
        
            document.getElementById('name').innerHTML  = name + ' Meaning of your name is:- Patel';
    }
    
    if(name.length != 0 && name != 'Pankhuri') {

            document.getElementById('name').innerHTML  = 'Hello ' + name;  

}else {

        document.write('Please write the name!!')
    }

}