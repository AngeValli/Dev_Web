'use strict';

// We reuse the classes defined in precedent script
let scrpt3 = require ('./script3');
let Stdt = scrpt3.Stdt;
let FrStdt = scrpt3.FrStdt;

// An object of the Promo class contains any number of Stdt or FrStdt objects and have following methods:
// add(student) which adds a student to the promotion
// size() which returns the number of students in the promotion
// get(i) who returns the i-th Stdt in the promotion in the order where you did add. Note: the index of the first student is 0
// print() that prints all students to the console, one per line, and returns the printed string
// write() which serializes the promotion to JSON, in other words transforms a promotion object in a string of characters
// read(str) that reads a JSON object and rebuilds a promotion, WARNING: going through JSON.stringify then JSON.parse looses the fact that the object was a new Stdt…
// saveFile(fileName) that writes a promotion to a text file as a JSON object
// readFromFile(fileName) which recreates a promotion from what has been saved to a file
// The functions write and read serialize and deserialize the object.

class Promo {
		constructor() {
		var promo_list = [];
		this.add = function(student) {
			promo_list.push(student);
		}
		this.size = function() {
			return promo_list.length;
		}
		this.get = function(i) {
			return promo_list[i];
		}
		this.print = function() {
			var return_str = ''
			for (var i=0; i<promo_list.length ;i++) {
				console.log(promo_list[i], '\n');
				if (i<promo_list.length-1) return_str = return_str.concat(promo_list[i]).concat('\n');
				else return_str = return_str.concat(promo_list[i]);
			}
			return return_str
		}
		this.write = function() {
			return JSON.stringify(promo_list);
		}
		this.read = function(str) {
			try {var parsed_object_raw = JSON.parse(str);} catch(err) {var parsed_object_raw = JSON.parse(JSON.stringify(str));};
			var parsed_object = [];
			for (var i=0; i<parsed_object_raw.length ;i++) {
				if (parsed_object_raw[i]['nationality']) parsed_object.push(new FrStdt(parsed_object_raw[i]['lastName'],parsed_object_raw[i]['firstName'],parsed_object_raw[i]['id'],parsed_object_raw[i]['nationality']));
				else parsed_object.push(new Stdt(parsed_object_raw[i]['lastName'],parsed_object_raw[i]['firstName'],parsed_object_raw[i]['id']))
			}
			promo_list = parsed_object
			return promo_list
		}
		this.saveFile = function(fileName) {
			var fs = require('fs');
			fs.writeFile(fileName.concat('.txt'), this.write(), function(err) {if (err) console.log(err);});
		}
		this.readFromFile = function(fileName) {
			var fs = require('fs');
			var global_data = fs.readFileSync('./'.concat(fileName).concat('.txt')).toString();
			this.read(global_data);
		}
	}
}
