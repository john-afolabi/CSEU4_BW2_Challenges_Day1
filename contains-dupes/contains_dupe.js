var containsDuplicate = function (nums) {
	const d = {};
	duplicate = false;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] in Object.keys(d)) {
			duplicate = true;
		} else {
			d[nums[i]] = 1;
		}
	}
	return duplicate;
};

console.log(containsDuplicate([1, 2, 3, 4]));
