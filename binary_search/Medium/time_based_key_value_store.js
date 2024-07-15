
var TimeMap = function() {
	console.log('START: ')
    this.timeMap = new Map()
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
	console.log('SET: ')
	console.log('Pre: ', this.timeMap)
	if(this.timeMap.has(key)) {
	  let existingValue = this.timeMap.get(key)
	  existingValue.push([value, timestamp])
	  this.timeMap.set(key, existingValue)
	} else {
		this.timeMap.set(key, [[value, timestamp]])
	}
	console.log('Post: ', this.timeMap)
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
	console.log('GET: ')
	if(this.timeMap.has(key)) {
		const value = this.timeMap.get(key)
		let min = 0
		let max = value?.length
		let minValue;
		while(min <= max) {
			let mid = Math.floor((min + max) / 2)
			if(value[mid] == undefined) {
				console.log("1")
				return minValue[0]
			}
			if(timestamp == value[mid][1]) {
				console.log("2")
				return value[mid][0]
			} else {
				if(timestamp < value[mid][1]) {
					max = mid - 1
				} else {
					minValue = value[mid]
					min = mid + 1
				}
			}
		}
		if(minValue != undefined) {
			console.log("3")
			return minValue[0]
		} else {
			console.log("4")
			return ''
		}
	} else {
		console.log("5")
		return ""
	}
};

const timeMap = new TimeMap();
// timeMap.set("foo", "bar1", 1);  // store the key "foo" and value "bar" along with timestamp = 1.
// console.log("Result: ", timeMap.get("foo", 1))         // return "bar"
// console.log("Result: ", timeMap.get("foo", 3))         // return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".
// timeMap.set("foo", "bar2", 4); // store the key "foo" and value "bar2" along with timestamp = 4.
// console.log("Result: ", timeMap.get("foo", 4)) // return "bar2"    
// console.log("Result: ", timeMap.get("foo", 5)) // return "bar2"    
// timeMap.set("foo", "bar3", 6); // store the key "foo" and value "bar2" along with timestamp = 4.
// console.log("Result: ", timeMap.get("foo", 5)) // return "bar2"    
// console.log("Result: ", timeMap.get("foo", 6)) // return "bar3"    

timeMap.set("love", "high", 10);
timeMap.set("love", "low", 20); 
console.log("Result: ", timeMap.get("love", 5))
console.log("Result: ", timeMap.get("love", 10))
console.log("Result: ", timeMap.get("love", 15))
console.log("Result: ", timeMap.get("love", 20))
console.log("Result: ", timeMap.get("love", 25))