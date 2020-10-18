$(document).ready(function(){
    var myJson = {"name": "John", "age": 30, "city":"New York"};
    $("h2").html(myJson.name + ", " + myJson.age + ", " + myJson.city);
});
