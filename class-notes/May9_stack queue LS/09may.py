marks= [20, 45, 67, 80]
if (sum(marks)/4) < 50:
    print("fail")
else:
    print("pass")

# ----------------------------------------------------------------

mylist = []
mylist.append(10)
print(mylist)

# -----------------------------------------------------------------
cars = {}
cars["name"] = "audi"
print(cars)
print(cars.get("name"))

# ------------------------------------------------------------------

# linked-list

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

    def insertAtBegin(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            return
        else:
            new_node.next = self.head
            self.head = new_node

# ------------------------------------------------------------------

class Stack:
    def __init__(self):
        self.stack = []

    def push(self, data):
        self.stack.append(data)

    def pop(self, data):
        if (len(self.stack) < 1):
            print("Stack is empty")
            return None
        self.stack.pop()

# ------------------------------------------------------------------

class Queue:
    def __init__(self):
        self.queue = []

    def enqueue(self, data):
        self.queue.append(data)

    def dequeue(self, data):
        if( len(self.queue) < 1):
            print("Queue is Empty")
            return None
        self.queue.pop(0)

queue = Queue()
queue.enqueue("alex")