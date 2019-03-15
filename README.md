# In-place Sorting Algorithm Visualizer
--link--

Given a string-encoded list of 'swaps' in a sorting algorithm, this shows a visualization of the sort from start to finish.
Although it can be modified to work for out-of-place sorting algorithms, this project was initially only designed to support in-place input.

Example:
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
2:3|1:2|3:4|2:3||4:5||5:6|4:5|3:4||6:7||7:8|6:7|5:6||8:9|7:8|6:7

(versioning and test case information is inserted, the string gets base-64 encoded, and it passed to the website as a GET param)
http://localhost:8080/?test=MS4wOjAuMDI6M3wxOjJ8Mzo0fDI6M3x8NDo1fHw1OjZ8NDo1fDM6NHx8Njo3fHw3Ojh8Njo3fDU6Nnx8ODo5fDc6OHw2Ojc=
