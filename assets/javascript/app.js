$("button").click(function (e) {
    var search = $("#searchTerm").val();
    e.preventDefault();
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=9pElGwiXwurYGOMRNxb2KcjKFfcOEjm1"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    
        for (var i = 0; i < $("#numberRecords").val(); i++) {
            $("#topArticles").append(response.response.docs[i].headline.main +"<p>"+response.response.docs[i].byline.original+"</p");  
        }





    })
})