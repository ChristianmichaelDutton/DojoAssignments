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
  for (var i = 0; i < users.Students.length; i++){
      console.log((i+1)+" - "+users.Students[i].first_name+" "+users.Students[i].last_name+" - "+(users.Students[i].first_name.length+users.Students[i].last_name.length));
    }
    for (var i = 0; i < users.Instructors.length; i++){
        console.log((i+1)+" - "+users.Instructors[i].first_name+" "+users.Instructors[i].last_name+" - "+(users.Instructors[i].first_name.length+users.Instructors[i].last_name.length));
    }
}
studentsandinstructors()
