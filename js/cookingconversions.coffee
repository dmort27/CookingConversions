f2c = (x) -> (5/9) * (x-32)
c2f = (x) -> (9/5) * (x+32)

$->
        $("#farenheit").change((e) ->
                c = f2c(parseFloat($("#farenheit").text())))
