def containsDuplicate(nums: list[int]) -> bool:
        map = {} # value : index
        print(list(enumerate(nums)))
        for i, n in enumerate(nums):
            print(i,n, map)
            if n in map:
                return True
            map[n] = i
        return False
    
#Input: nums = [1,1,1,3,3,4,3,2,4,2]
# Output: true
# Input: nums = [1,2,3,4]
# Output: false

print(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))
print(containsDuplicate([1,2,3,4]))