var roundNumber = function (dec, num) {
	var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
	return result;
};

var  farenheit2celcius = function(x) {
    return (5 / 9) * (x - 32);
};

var  celcius2farenheit = function(x) {
    return (9 / 5) * x + 32;
};

$(document).ready(function() {

    $("#farenheit").keyup(function() {
        var f = parseFloat($("#farenheit").val());

        if (!isNaN(f)) {
            $("#celcius").val(roundNumber(2, farenheit2celcius(f)));
        }

    });
    
    $("#celcius").keyup(function() {
        var c = parseFloat($("#celcius").val());

        if (!isNaN(c)) {
            $("#farenheit").val(roundNumber(2, celcius2farenheit(c)));
        }
    });

    $("#volume1").keyup(function() {
	var vol1 = parseFloat($("#volume1").val());
	if (!isNaN(vol1)) {
	    var vol1units = parseFloat($("#volume1units").val());
	    console.log($("#volume1units").val());
	    var vol2units = parseFloat($("#volume2units").val());
	    $("#volume2").val((vol1 / vol1units) * vol2units);
	}
    });
});