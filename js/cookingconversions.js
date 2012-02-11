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

    var updateVolume = function(a,b) {
	var volA = parseFloat($("#volume" + a).val());

	if (!isNaN(volA)) {
	    var factor1 = parseFloat($("#volumeunits" + a).val());
	    var factor2 = parseFloat($("#volumeunits" + b).val());

	    $("#volume" + b).val(roundNumber(2, (volA / factor1) * factor2));
	}        
    };
    
    $("#volume1").keyup(function() {
        updateVolume("1", "2");
    });

    $("#volume2").keyup(function() {
        updateVolume("2", "1");
    });

    $("#volumeunits1").change(function() {
        updateVolume("2", "1");        
    });

    $("#volumeunits2").change(function() {
        updateVolume("1", "2");        
    });

    var updateWeight = function(a,b) {
	var volA = parseFloat($("#weight" + a).val());

	if (!isNaN(volA)) {
	    var factor1 = parseFloat($("#weightunits" + a).val());
	    var factor2 = parseFloat($("#weightunits" + b).val());

	    $("#weight" + b).val(roundNumber(2, (volA / factor1) * factor2));
	}        
    };

    $("#weight1").keyup(function() {
        updateWeight("1", "2");
    });

    $("#weight2").keyup(function() {
        updateWeight("2", "1");
    });

    $("#weightunits1").change(function() {
        updateWeight("2", "1");        
    });

    $("#weightunits2").change(function() {
        updateWeight("1", "2");        
    });

});