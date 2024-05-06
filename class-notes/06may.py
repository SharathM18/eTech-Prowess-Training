# write a program to class representing circle include method to find area and perimeter

from math import *
class Circle:
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return f"area: {pi * self.radius ** 2}"

    def perimeter(self):
        return f"perimeter: {2 * pi * self.radius}"

radius = float(input("Enter the radius: "))
circle = Circle(radius)

print(circle.area())
print(circle.perimeter())

# write a python program to create a class representing a bank including a methods for managing customer account and transaction

class Bank:
    def __init__(self):
        self.customer = {}

    def create_account(self, acc_number, initial_balance = 0):
        if acc_number in self.customer:
            print("Account number already exits!!")
        else:
            self.customer[acc_number] = initial_balance
            print("Account created successfully!!")

    def deposit(self, acc_number, amount):
        if acc_number in self.customer:
            self.customer[acc_number] += amount
            print("deposit successfully...")
        else:
            print("Account number does not exits :)")

    def withdrawal(self, acc_number, amount):
        if acc_number in self.customer:
            if self.customer[acc_number] >= amount:
                self.customer[acc_number] -= amount
                print("withdrawal successfully...")
            else:
                print("insufficient amount!!")
        else:
            print("Account number does not exits :)")

    def check_balance(self,acc_number):
        if acc_number in self.customer:
            print(f"Balance {self.customer[acc_number]}")
        else:
            print("Account number does not exits :)")


bank = Bank()

bank.create_account(101, 5000)

bank.deposit(101, 5000)

bank.check_balance(101)

bank.withdrawal(101, 50000)

# program to create a shopping cart including the methods for adding & removing items and calculate the total price

class Shopping_cart:
    def __init__(self, quantity = 1):
        self.cart = {}
        self.quantity = quantity

    def add_item(self, item_name, item_price):
        if item_name not in self.cart:
            self.cart[item_name] = item_price
            print(f"{item_name} item added successfully")
        else:
            self.cart[item_name] += item_price
            self.quantity += 1
            print(f"item {item_name} is added {self.quantity} times")

    def remove_item(self, item_name):
        if item_name in self.cart:
            self.cart.pop(item_name)
            print(f"{item_name} item removed successfully...")
        else:
            print("item does not exits")

    def display(self):
        print(self.cart)

shopping_cart = Shopping_cart()

shopping_cart.add_item("pen",10)
shopping_cart.add_item("pen",10)
shopping_cart.add_item("pen",10)
shopping_cart.add_item("bag",20)
shopping_cart.add_item("bag",20)
shopping_cart.display()

shopping_cart.remove_item("pen")
shopping_cart.display()

