# reverse a string using function

def reverestring(str1):
    str2 = ""
    for i in range(len(str1) - 1 ,-1,-1):
        str2 += str1[i]
    return str2

print(reverestring("sharath"))