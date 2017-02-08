
users = {
    'Students': [
        {'first_name': 'Michael', 'last_name': 'Jordan'},
        {'first_name': 'John', 'last_name': 'Rosales'},
        {'first_name': 'Mark', 'last_name': 'Guillen'},
        {'first_name': 'KB', 'last_name': 'Tonel'}
    ],
    'Instructors': [
        {'first_name': 'Michael', 'last_name': 'Choi'},
        {'first_name': 'Martin', 'last_name': 'Puryear'}
    ]
}

def names(obj): #obj is the nested dictionary.
	for key in obj: #key is just the keys of users (i.e. Students and Instructors)
		print key.upper() #prints Students and Instructors
		for i in range(len(obj[key])): # i in range (4, then 2)
			print str(i+1) + " - " + obj[key][i]["first_name"].upper() + " " + obj[key][i]["last_name"].upper() + " - " + str(len(obj[key][i]["first_name"]) +len(obj[key][i]["last_name"]))

names(users)