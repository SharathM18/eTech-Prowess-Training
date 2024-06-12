# print no. from 1 to 10 using for loop

for i in range(1,11):
    print(i)

# calculate the sum of no. from 1 to 10 using for loop
res_sum = 0
for i in range(1,11):
    res_sum += i
print(res_sum)

# print the element of the list using for loop

list1 = ["alex", "brock", "gale"]
for i in list1:
    print(i)

# find the largest no. in the list using sort loop

list2 = [1,2,3,4,5,67,6]
largest_no = 0
for i in list2:
    if i > largest_no:
        largest_no = i
print(largest_no)

# find all the prime no. b/w 1 and 50 using nested for and if

def primeNumber(start, end):
    for i in range(start, end + 1):
        if (i <= 1):
           pass
        else:
            for j in range(2, i):
                if(i % j) == 0:
                    break
            else:
                print(i)


primeNumber(start=1, end=50)