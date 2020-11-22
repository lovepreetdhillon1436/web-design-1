$( document ).ready(function() {
    parse_xml_and_append_to_html();
});

function parse_xml_and_append_to_html(){
    var xml = "<rss version='2.0'><channel><title>RSS Title</title><book_name>Cracking the code</book_name></channel></rss>";
    var xmlDoc = $.parseXML(xml);
    var $xml = $(xmlDoc);
    var $title = $xml.find( "title" );
    var $book_name = $xml.find( "book_name" );
    $("#element_1").append($title.text());  // RSS Title
    $title.text( "XML Title" ); 
    $("#elemnt_2").append($title.text());  // XML Title
    $("#element_3").append($book_name.text()); // Cracking the code
}
