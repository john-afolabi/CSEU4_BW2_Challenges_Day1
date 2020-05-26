"""
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }


 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
"""


class ListNode():
    def __init__(self, val):
        self.val = val
        self.next = None

    def print(self):
        while self:
            print(self.val)
            self = self.next


def resolvetoInt(arr):
    result = ''
    for num in arr:
        result += str(num)
    return int(result)


def addTwoNumbers(l1, l2):
    arr1 = []
    arr2 = []

    while l1:
        arr1.append(l1.val)
        arr2.append(l2.val)
        l1 = l1.next
        l2 = l2.next

    arr1.reverse()
    arr2.reverse()

    num1 = resolvetoInt(arr1)
    num2 = resolvetoInt(arr2)

    result = str(num1 + num2)

    resultArr = list(result)
    resultArr.reverse()

    newList = ListNode(resultArr[0])
    newListHead = newList
    for num in resultArr[1:]:
        newList.next = ListNode(num)
        newList = newList.next
    newListHead.print()
    return newListHead


l1 = ListNode(2)
l1.next = ListNode(4)
l1.next.next = ListNode(3)

l2 = ListNode(5)
l2.next = ListNode(6)
l2.next.next = ListNode(4)
# l2.print()

addTwoNumbers(l1, l2)