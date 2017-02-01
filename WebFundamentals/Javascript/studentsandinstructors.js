function studentsandinstructors(){
  var users = {
   'Students': [
       {first_name:  'Christianmichael', last_name : 'Dutton'},
       {first_name : 'John', last_name : 'Rosales'},
       {first_name : 'Mark', last_name : 'Guillen'},
       {first_name : 'KB', last_name : 'Tonel'}
    ],
   'Instructors': [
       {first_name : 'Michael', last_name : 'Choi'},
       {first_name : 'Martin', last_name : 'Puryear'}
    ]
   }
   for (var i = 0; i<users.length; i++){
     console.log(i);
   }
}
studentsandinstructors()
