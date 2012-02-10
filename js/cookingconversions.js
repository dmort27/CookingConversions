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
	    var factor1 = parseFloat($("#volumeunits1").val());
	    var factor2 = parseFloat($("#volumeunits2").val());
	    $("#volume2").val(roundNumber(2, (vol1 / factor1) * factor2));
	}
    });

    $("#volume2").keyup(function() {
	var vol2 = parseFloat($("#volume2").val());
	if (!isNaN(vol2)) {
	    var factor1 = parseFloat($("#volumeunits1").val());
	    var factor2 = parseFloat($("#volumeunits2").val());
	    $("#volume1").val(roundNumber(2, (vol2 / factor2) * factor1));
	}
    });
});