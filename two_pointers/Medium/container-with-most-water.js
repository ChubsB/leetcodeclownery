// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

var maxArea = function(height) {
    let start = 0   
    let end = height.length - 1
    let area = 0
    for(let i = 0; i < height.length; i++) {
        current_area = Math.min(height[start], height[end]) * (end - start)
        if(current_area > area) {
            area = current_area
        }
        if(height[start] < height[end]) {
            start++
        } else {
            end--
        }
    }
    return area
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))//