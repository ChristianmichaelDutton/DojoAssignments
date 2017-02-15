class Bike(object):

    def __init__(self,price,max_speed):
        self.max_speed = max_speed
        self.price = price
        self.total_miles = 0

    def ride(self,x):
        self.x = x
        for i in range(self.x):
            self.total_miles += 10
            print "Riding and I've put on {} miles.".format(self.total_miles)
        return self
    def reverse(self,x):
        self.x = x
        for i in range(self.x):
            if self.total_miles > 5:
                self.total_miles -=5
            else:
                self.total_miles =0
            print "Riding in reverse and I've reduced {} miles.".format(self.total_miles)
        return self
    def display_info(self):
        print "My bike costs ${}. It can go {}mph and I've put {} miles on it so far.".format(self.price,self.max_speed,self.total_miles)
        return self

bike1=Bike(200,15)
bike1.ride(4).reverse(4).display_info()