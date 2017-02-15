class Car(object):

    def __init__(self,price,speed,fuel,mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        if price > 10000:
            self.tax = .15
        else:
            self.tax = .12

    def display_all(self):
        print "Price: {}".format(self.price)
        print "Speed: {} mph".format(self.speed)
        print "Fuel: {}".format(self.fuel)
        print "Mileage: {} miles".format(self.mileage)
        print "Tax: {}".format(self.tax)
        print "\n"

lambo=Car(200000,200,"on fumes",1000)
lambo.display_all()
audi=Car(60000,110,"full",1500)
audi.display_all()
hoopty=Car(500,45,"empty",100000)
hoopty.display_all()
station_wagon=Car(20000,85,"half",50000)
station_wagon.display_all()
suv=Car(70000,100,"three-quarters full",25000)
suv.display_all()
jag=Car(85000,130,"less than half full",10000)
jag.display_all()