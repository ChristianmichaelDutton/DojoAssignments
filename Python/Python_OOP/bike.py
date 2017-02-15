class Bike(object):

    def __init__(self,price,max_speed):
        self.max_speed = max_speed
        self.price = price
        self.total_miles = 0

    def ride(self):
        self.total_miles +=10
        print "Riding and I've put on {} miles.".format(self.total_miles)
    def reverse(self):
        if self.total_miles > 5:
            self.total_miles -=5
        else:
            self.total_miles =0
        print "Riding in reverse and I've reduced {} miles.".format(self.total_miles)
    def display_info(self):
        print "My bike costs ${}. It can go {}mph and I've put {} miles on it so far.".format(self.price,self.max_speed,self.total_miles)


bike1 =Bike(200,25)
bike1.ride()
bike1.ride()
bike1.ride()
bike1.reverse()
bike1.display_info()
bike2 =Bike(500,35)
bike2.ride()
bike2.ride()
bike2.reverse()
bike2.reverse()
bike2.display_info()
bike3=Bike(450,30)
bike3.reverse()
bike3.reverse()
bike3.reverse()
bike3.display_info()




