/*
Task:
You're given an array of integers a and two integers x and y. Count the number of elements in the array such that `x ≤ a[i] ≤ y,
where i is the 0-based index of the element.

Code Limit:
Less than 48 characters.
*/

checkRange=(a,x,y)=>a.map(v=>r+=v<x==v>y,r=0)|r
// checkRange=(a,x,y)=>a.reduce((r,v)=>r+(v<x==v>y),0)