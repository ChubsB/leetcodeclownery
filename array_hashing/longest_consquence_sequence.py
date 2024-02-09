def longestConsecutive(nums: list[int]) -> int:
    numSet = set(nums)
    maxLength = 0

    for num in numSet:
        if num - 1 not in numSet:
            currentNum = num
            currentLength = 1
            while currentNum + 1 in numSet:
                currentNum += 1
                currentLength += 1
            maxLength = max(maxLength, currentLength)
    return maxLength

print(longestConsecutive([100, 4, 200, 1, 3, 2]))
print(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))
print(longestConsecutive([-1000000000, 1, 2, 3, 9, 1000000000]))
