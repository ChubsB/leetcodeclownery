class Hashmap {
	constructor(size = 20) {
		this.bucketArray = new Array(size)
		for(let i = 0; i < size; i++) {
			this.bucketArray[i] = []
		} 
		this.size = size
	}

	hash(key) {
		let hash = 0
		for(let char of key) {
			hash += char.charCodeAt(0)
		}
		return hash % this.size
	}

	set(key, value) {
		const index = this.hash(key)
		const bucket = this.bucketArray[index]
		for(let i = 0; i < bucket.length; i++) {
			if(bucket[i][0] == key) {
				bucket[i][1] = value
				return
			}
		}
		bucket.push([key, value])
	}

	get(key) {
		const index = this.hash(key)
		const bucket = this.bucketArray[index]
		for(const [k, v] of bucket) {
			if(k == key) {
				return v
			}
		}
		return undefined
	}

	delete(key) {
		const index = this.hash(key)
		const bucket = this.bucketArray[index]
		for(let i = 0; i < bucket.length; i++) {
			if(bucket[i][0] == key) {
				bucket.splice(i, 1)
				return true
			}
		}
		return false
	}
}