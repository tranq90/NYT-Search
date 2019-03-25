$("button").click(function (e) {
    var search = $("#searchTerm").val();
    e.preventDefault();
    console.log(search);
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=9pElGwiXwurYGOMRNxb2KcjKFfcOEjm1"
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var title = response.response.docs[0].headline.main;
        $("#topArticles").text(title);
        console.log(title);

        
        

        


    })
})