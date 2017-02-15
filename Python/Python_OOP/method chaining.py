class A:
    def __init__(self, x):
        self.x = x
    def add(self, y):
        self.x += y
        return self
    def multiply(self, y):
        self.x *= y
        return self
    def get(self):
        return self.x
a = A(0)
print a.add(5).mulitply(2).get()