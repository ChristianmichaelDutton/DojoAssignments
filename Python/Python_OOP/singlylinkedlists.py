class Node(object):
    def __init__(self, value, next):
        self.value = value
        self.next = next


class SingleList(object):
    def __init__(self):
        self.head = None
        self.tail = None

    def show(self):
        print "Showing list data:"
        current = self.head
        while current is not None:
            print current.value, " -> ",
            current = current.next
        print None

    def append(self, value):
        node = Node(value, None)
        if self.head is None:
            self.head = self.tail = node
        else:
            self.tail.next = node
        self.tail = node

    def remove(self, node_value):
        current = self.head
        previous = None
        while current is not None:
            if current.value == node_value:
                # if this is the first node (head)
                if previous is not None:
                    previous.next = current.next
                else:
                    self.head = current.next

            # needed for the next iteration
            previous = current
            current = current.next


s = SingleList()
s.append("Alice")
s.append("Bob")
s.append("Carl")
s.append("Doug")

s.show()
s.remove("Alice")
s.show()
s.remove("Carl")
s.show()
s.remove("Doug")
s.show()
