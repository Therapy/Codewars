/*
Task:
Given two integers a and b in range 1..20, return true if one of them is 10 or if their sum is 10, false otherwise.

Code Limit:
Less than 36 characters.
*/

makes10=(a,b)=>/10/.test([a,b,a+b])