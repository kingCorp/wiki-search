$(document).ready(function () {

    $('#btnsearch').click(function () {

        var value = $('#search').val();

        if (value != null) {
            var url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch='+ value +'&callback=?';
            var out = "<h3>Articles related to...</h3>" + "<em>" + value + "</em><br>";
            $.getJSON(url, { "_": $.now() }, function (response) {
                var results = response.query.pages;

                for (var i in results) {
                    var title = results[i].title;
                    var extract = results[i].extract;
                    var id = results[i].pageid;
                    var url = 'http://en.wikipedia.org/?curid=' + id;

                    var show = "<a href='" + url + "'><h3>" + title + "</h3><br></a><strong>" + extract + "</strong>";
                    out += show;
                }
                $('#show').html(out);
                console.log(response);
                console.log(response.query.pages);
            });

            
            console.log(value);
        }

    });

});