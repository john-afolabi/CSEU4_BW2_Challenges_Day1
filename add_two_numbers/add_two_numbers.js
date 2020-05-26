class ListNode {
	constructor(val, next) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const resolvetoInt = function (arr) {
	var result = "";
	arr.forEach((num) => {
		result += String(num);
	});
	return Number(result);
};

var addTwoNumbers = function (l1, l2) {
	const arr1 = [];
	const arr2 = [];

	while (l1) {
		arr1.push(l1.val);
		arr2.push(l2.val);
		l1 = l1.next;
		l2 = l2.next;
	}
	arr1.reverse();
	arr2.reverse();

	num1 = resolvetoInt(arr1);
	num2 = resolvetoInt(arr2);

	const result = String(num1 + num2);

	const resultArr = result.split("").map(Number);

	resultArr.reverse();

	var newList = new ListNode(resultArr[0]);
	const newListHead = newList;

	for (let i = 1; i < resultArr.length; i++) {
		newList.next = new ListNode(resultArr[i]);
		newList = newList.next;
	}

	return newListHead;
};

const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);
console.log(l1);

const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);
console.log(l2);

console.log(addTwoNumbers(l1, l2));
