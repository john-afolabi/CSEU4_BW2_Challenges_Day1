def containsDuplicate(num):
    d = {}
    duplicate = False
    for x in num:
        if x not in d:
            d[x] = 1
        else:
            duplicate = True

    return duplicate