<!-- Create a variable in php -->
<?php
   $line = "We are learning PHP!";
   $no_of_words = str_word_count($line);
   $upper_string = strtoupper($line);
   echo "No of words in a line: ", $no_of_words;
?>