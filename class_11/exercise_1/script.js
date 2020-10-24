var xml = "<note><to>Tove</to><from>Jani</from><heading>Reminder</heading><body>Don't forget me this weekend!</body></note>",
    xmlDoc = $.parseXML(xml),
    $xml = $(xmlDoc),
    $to = $xml.find("to"),
    $from = $xml.find("from"),
    $heading = $xml.find("heading");
console.log('From : ' + $from.text());
console.log('To : ' + $to.text());
console.log('heading : ' + $heading.text());
