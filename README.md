# In-place Sorting Algorithm Visualizer
[Demo](http://sorting-homework-tests.herokuapp.com/?test=MS4wOjEuMD05OjF8NDoxfDk6Mnw0OjJ8fDk6N3x8OTozfDc6M3w0OjN8fDk6OHx8OTo1fDg6NXw3OjV8fDk6Nnw4OjZ8Nzo2)

Given a string-encoded list of 'swaps' in a sorting algorithm, this shows a visualization of the sort from start to finish.
Although it can be modified to work for out-of-place sorting algorithms, this project was initially only designed to support in-place input.

Example:
```
[0, 4, 9, 1, 2, 7, 3, 8, 5, 6, ]
[0, 4, 9, 1, 2, 7, 3, 8, 5, 6, ]
[0, 4, 1, 9, 2, 7, 3, 8, 5, 6, ]
[0, 1, 4, 9, 2, 7, 3, 8, 5, 6, ]
[0, 1, 4, 2, 9, 7, 3, 8, 5, 6, ]
[0, 1, 2, 4, 9, 7, 3, 8, 5, 6, ]
[0, 1, 2, 4, 9, 7, 3, 8, 5, 6, ]
[0, 1, 2, 4, 7, 9, 3, 8, 5, 6, ]
[0, 1, 2, 4, 7, 9, 3, 8, 5, 6, ]
[0, 1, 2, 4, 7, 3, 9, 8, 5, 6, ]
[0, 1, 2, 4, 3, 7, 9, 8, 5, 6, ]
[0, 1, 2, 3, 4, 7, 9, 8, 5, 6, ]
[0, 1, 2, 3, 4, 7, 9, 8, 5, 6, ]
[0, 1, 2, 3, 4, 7, 8, 9, 5, 6, ]
[0, 1, 2, 3, 4, 7, 8, 9, 5, 6, ]
[0, 1, 2, 3, 4, 7, 8, 5, 9, 6, ]
[0, 1, 2, 3, 4, 7, 5, 8, 9, 6, ]
[0, 1, 2, 3, 4, 5, 7, 8, 9, 6, ]
[0, 1, 2, 3, 4, 5, 7, 8, 9, 6, ]
[0, 1, 2, 3, 4, 5, 7, 8, 6, 9, ]
[0, 1, 2, 3, 4, 5, 7, 6, 8, 9, ]
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ]
1.0:0.0=2:3|1:2|3:4|2:3||4:5||5:6|4:5|3:4||6:7||7:8|6:7|5:6||8:9|7:8|6:7
-- string gets base64 encoded and is passed to the site as a get param --
http://localhost:3000/?test=MS4wOjAuMD0yOjN8MToyfDM6NHwyOjN8fDQ6NXx8NTo2fDQ6NXwzOjR8fDY6N3x8Nzo4fDY6N3w1OjZ8fDg6OXw3Ojh8Njo3
```
