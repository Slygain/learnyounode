values = process.argv;
returnval = 0;
for (var i = 0; i < values.length; i ++){
	if (i == 0 || i == 1)
		continue;
	else
	{
		//console.log("adding ", values[i], " to ", returnval);
		returnval = parseInt(values[i]) + returnval;
	}
}
console.log(returnval);
