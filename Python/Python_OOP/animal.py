class Animal(object):
    def __init__(self,name):
        self.name = name
        self.health = 100

    def walk(self,x):
        self.x = x
        for i in range(self.x):
            print "Walking"
            self.health -=1
            if self.health <=0:
                print "The {} is dead.".format(self.name)
        return self

    def run(self,x):
        self.x = x
        for i in range(self.x):
            print "Running"
            self.health -= 5
            if self.health <=0:
                print "The {} is dead.".format(self.name)
        return self

    def display_health(self):
        print "The {} has {} hp.".format(self.name,self.health)

class Dog(Animal):
    def __init__(self,name):
        super(Dog,self).__init__(name)
        self.health = 150

    def pet(self,x):
        self.x = x
        for i in range(self.x):
            print "Someone is petting me!"
            self.health +=5
        return self

class Dragon(Animal):
    def __init__(self,name):
        super(Dragon,self).__init__(name)
        self.health = 170

    def fly (self,x):
        self.x = x
        for i in range(self.x):
            print "Flying...flap..flap.."
            self.health -= 10
        return self


animal1 = Animal("Pup")
animal1.walk(3).run(2).display_health()
dog1 = Dog('Fido')
dog1.walk(3).run(2).pet(1).display_health()
dragon1 =Dragon('Tiamat')
dragon1.walk(3).run(2).fly(2).display_health()
cat = Animal("Cat")
cat.walk(3).run(4).walk(3).display_health()
