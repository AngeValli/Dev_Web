'use strict';

// For each word within a string, it counts the number of occurrences of this word in this string. The function returns an object whose properties are the words and the values ​​of these properties are the occurrence numbers. It works on a string of at least 500 words. The input string is assumed to contain no punctuation and only small caps.

function wordCount(input_string) {
	var wordCount_object = {};
	// Identifying words in string
	var words = input_string.split(' ');

	for (var i=0; i<words.length ;i++) {
		if (wordCount_object[words[i]]) wordCount_object[words[i]] = ++wordCount_object[words[i]];
		else wordCount_object[words[i]] = 1
	}
	return wordCount_object
}

// The class WList has a constructor which takes as input a string and the following methods:
// getWords() which returns an array of words present in the original text, lexicographically sorted and without duplicates,
// maxCountWord() which returns the word with the most occurrences, and if there are several words with the same number of occurences, returns the first of them in the lexicographically sorted list from getWords()
// minCountWord() which returns the word with the least number of occurrences, and if there are several words with the same number of occurences, returns the first of them in the lexicographically sorted list from getWords()
// getCount(word) which gives the number of occurrences for a given word.
// applyWordFunc(f) method to apply any function to each word in lexicographic order and to return an array of results


class WList {
	constructor(input_string) {
		var wordCount_of_string = wordCount(input_string);
		var words = input_string.split(' ');
		
		this.getWords = function() {
			var sorted_words = [];
			for (var i=0; i<words.length ;i++) {
				if (!sorted_words.includes(words[i])) sorted_words.push(words[i]);
			}
			sorted_words.sort();
			return sorted_words
		}
		
		this.maxCountWord = function() {
			var sorted_words = this.getWords()
			var max = wordCount_of_string[sorted_words[0]];
			var word = sorted_words[0];
			for (var i=0; i<sorted_words.length ;i++) {
				 if (wordCount_of_string[sorted_words[i]]>max) {
				 	word = sorted_words[i];
				 	max = wordCount_of_string[sorted_words[i]];
				 }
			}
			return word;
		}
		
		this.minCountWord = function() {
			var sorted_words = this.getWords()
			var min = wordCount_of_string[sorted_words[0]];
			var word = sorted_words[0];
			for (var i=0; i<sorted_words.length ;i++) {
				 if (wordCount_of_string[sorted_words[i]]<min) {
				 	word = sorted_words[i];
				 	min = wordCount_of_string[sorted_words[i]];
				 }
			}
			return word;
		}

		
		this.getCount = function(word) {
			if (wordCount_of_string[word]) {
				return wordCount_of_string[word]
			}
			else {
				return 0;
			}
		}
		

		this.applyWordFunc = function(f) {
			var sorted_words = this.getWords()
			var array_of_results = []
			for (var i=0; i<sorted_words.length ;i++) {
				array_of_results.push(f(sorted_words[i]));
			}
			return array_of_results
		}
	}
}
