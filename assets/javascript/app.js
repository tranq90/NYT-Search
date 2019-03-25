$.ajax({

}).then(function(response){
    var results = response.data;
    console.log(results);

    for (var i = 0; i < results.length; i++){
        var resultDiv = $("<div>");
        var author = results[i];
    }
})