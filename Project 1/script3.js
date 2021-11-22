'use strict';

// Stdt class has attributes named lastName, firstName and id in that order
// toString method does not take a parameter and returns a string of characters built from the properties of the object in the form

class Stdt {
		constructor(lastName, firstName, id) {
			this.lastName = lastName;
			this.firstName = firstName;
			this.id = id;
			// Question 3b
			this.toString = function() {
			return "student: ".concat(lastName).concat(', ').concat(firstName).concat(', ').concat(id)
			}
		}
}

// FrStdt derived from Stdt which also adds a nationality to a student, so the arguments of the constructor are lastName, firstName, id and nationality.
// toString method takes the result of the toString method of the basic class

class FrStdt {
		constructor(lastName, firstName, id, nationality) {
		this.lastName = lastName;
		this.firstName = firstName;
		this.id = id;
		this.nationality = nationality
		this.toString = function() {
		return "student: ".concat(lastName).concat(', ').concat(firstName).concat(', ').concat(id).concat(', ').concat(nationality)
		}
	}
}
