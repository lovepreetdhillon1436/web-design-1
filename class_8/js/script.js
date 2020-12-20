$(document).ready(function () {
    getToken();
});

var clientId = 'd7b5b93ed82841c988287f06b953a334';
var clientSecret = 'c0f4511f989a46008ea65c306f021791';
var TOKEN = null;

// Login API
function getToken() {
    $.ajax({
        url: 'https://accounts.spotify.com/api/token',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        method: 'POST',
        dataType: 'json',
        data: 'grant_type=client_credentials',
        success: function (data) {
            console.log('success: ' + data["access_token"]);
            var token = data["access_token"];
            TOKEN = token;
            getCategoriesList(token)
        }
    });
}

function getCategoryPlaylist(playlistId) {
    $.ajax({
        url: 'https://api.spotify.com/v1/browse/categories/' + playlistId,
        headers: {'Authorization': 'Bearer ' + TOKEN},
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log("getCategoryPlaylist :>", JSON.stringify(data));
        }
    });
}

function getCategoriesList(token) {
    $.ajax({
        url: 'https://api.spotify.com/v1/browse/categories',
        headers: {'Authorization': 'Bearer ' + token},
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            var categoriesItem = data["categories"].items
            console.log('categoriesItem :>', categoriesItem, categoriesItem.length);
            for (var i = 0; i < categoriesItem.length; i++) {
                $("#categories").append('<div class="col-md-3 categoriesPadding text-center">' +
                    '<div class="card" style="width: 18rem;">' +
                    '<img class="card-img-top" src="' + categoriesItem[i]['icons'][0]['url'] + '" alt="Card image cap">' +
                    '<div class="card-body">' +
                    '<h5 class="card-title">' + categoriesItem[i]['name'] + '</h5>' +
                    // '<a href="' + categoriesItem[i]['href'] + '" class="btn btn-primary">Go to '+ categoriesItem[i]['name']  +' playlist</a>' +
                    '<a href="#" class="btn btn-primary" onclick="getCategoryPlaylist("'+ 'topLists' + '")>Go to '+ categoriesItem[i]['name']  +' playlist</a>' +
                    '</div>' +
                    '</div>' +
                    '</div>')
            }
        }
    });
}





// Search API