var compute;

//compute the hamming distance between two dna strands
compute = function(s1, s2) {
	//this is the hamming distance
	var distance = 0;

	// compute the distance 
for (var i = 0; i < s1.length; i ++) {
	if (s1[i] != s2[i]) {
		distance += 1;
	}

}
	//return the distance
	return distance;
};

module.exports = {
	compute: compute
};