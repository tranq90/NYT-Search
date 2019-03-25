$("button").click(function (e) {
    var search = $("#searchTerm").val();
    e.preventDefault();
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=9pElGwiXwurYGOMRNxb2KcjKFfcOEjm1"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var title = response.response.docs[i].headline.main;
        var author = response.response.docs[i].byline.original;

        
        for (var i = 0; i < $("#numberRecords").val(); i++) {
            $("#topArticles").text(response.response.docs[i].headline.main);  
        }





    })
})