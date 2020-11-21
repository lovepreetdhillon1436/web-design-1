$( document ).ready(function() {
    get_xml_data();
});


function get_xml_data(){
    $.get("https://www.w3schools.com/xml/note.xml", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
      });
}

