// A student is preparing for a test from Amazon Academy for a
// scholarship. The student is required to completely read n chapters for the
// test where the the chapter has number of pages. The
// chapters are read in increasing order of the index. Each day the
// student can either read till the end of a chapter or at most x pages,
// whichever is minimum. The number of pages remaining to read
// decreases by x in the latter case.
// For example, if pages =[5, 3, 4]and x =4,
// Day 1: The student reads 4 pages of the first chapter - pages
// remaining =[1, 3, 4]
// Day 2: The student can only read till the end of the first chapter
// pages remaining=[0, 3, 4]
// Day 3: The student can read either till the end of the chapter or x=4
// pages, since 3 < 4, the student reads till the end of the chapter 2 .
// pages remaining= [0, 0, 4]
// Day 4: The student reads all the 4 pages of the last chapter - pages
// remaining -[0, 0, 0]
// The test will be given in days number of days from now. Find the
// minimum number of pages, x, which the student should read each
// day to finish all pages of all chapters within days number of days. If it
// is not possible to finish these chapters in days number of days,
// retumn -1.
// Note: In one day, the student cannot read pages of more than one
// chapter. Thus, if a chapter finishes, the next chapter starts only on
// the next day even if the number of pages read is less than x

function minimum_pages(pages, days) {
	//min number of pages we can read per day
	let min_pages = 1
	//most number of pages we can read per day 
	let max_pages = 0
	let ans = 0
	for(let i = 0; i < pages.length; i++) {
		if(max_pages < pages[i]) {
			max_pages = pages[i]
		}
	}
	
	function validReadingSpeed(speed) {
		let currentDays = 0
		let vPages = [...pages]
		for(let i = 0; i < vPages.length; i++) {
			if(vPages[i] - speed <= 0) {
				vPages[i] = 0
				pagesLeft = 0
				currentDays++
			} else {
				vPages[i] = vPages[i] - speed
				currentDays++
				i--
			}
		}
		return currentDays <= days
	}

	while(min_pages < max_pages) {
		midpoint = Math.floor((max_pages + min_pages) / 2)
		
		if(validReadingSpeed(midpoint)){
			max_pages = midpoint
		} else {
			min_pages = midpoint + 1
		}
	}
	return validReadingSpeed(min_pages) ? min_pages : - 1
}

console.log(minimum_pages([10, 20, 30], 7)); // 10
console.log(minimum_pages([5, 5, 5], 3)); // 5 
