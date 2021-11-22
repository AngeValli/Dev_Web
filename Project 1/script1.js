// Author : Ange Valli
// This project requires NodeJS runtime environment of JavaScript

'use strict';

// Function which calculates the nth number of the Fibonacci sequence iteratively (with a for-loop or while) 

function fibIt(n) {
	if (n <= 1) {
		return n;
	}
	
	var fib = 1;
	var prevfib = 1;
	var temp = 0;
	
	for(var i=2; i<n; i++) {
		temp = fib;
		fib += prevfib;
		prevfib = temp;
	}
	
	return fib;
}

// Function which calculates the Fibonacci sequence recursively

var fibo_dictionary = {};

function fibo_rec(n) {
	
	if (n <= 1) return n;
	
	if (fibo_dictionary[n]) return fibo_dictionary[n];
		
	return fibo_dictionary[n] = fibo_rec(n-1) + fibo_rec(n-2);
	}

// Function that takes an array of numbers and that returns the array of results of fibo_rec called on the numbers without using the JavaScript function map

function fibArr(tableau) {
	var tab_final = [];
	
	for (var i=0; i<tableau.length; i++) {
		tab_final[i] = fibo_rec(tableau[i]);
	}
	
	return tab_final;
}

// Same function but using the JavaScript function map

function fiboMap(tableau) {
	return tableau.map(fibo_rec);
}
