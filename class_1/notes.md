# Class 1:

## What is PHP?
- It is backend technology which communicates with the database.

## Software to install
- Install one of the following softwares:
    - EasyPHP (Windows), 
    - wampserver (Windows), 
    - mamp (Apple), BigApache, etc.
- To run php script inside the browser, use [this](https://www.tutorialspoint.com/execute_php_online.php).


## Exercise 1:
- Write a php code to print "Hello World!" (Both print and echo works)
 
```
    <?php
    echo "Hello world!";
    print("Hey prints also works in php!")
    ?>
```

## Exercise 2:
- Comment a code in PHP. There are 2 types of comments:
    - Single liner:
    ```
        <?php
            // This is a single liner comment.
        ?>
    ```
    - Multiple liner:
    ```
        <?php
            /* This is 
            a multiple liner
            comment */
        ?>
    ```

## Sum of 2 numbers:
```
    <?php
        
        /* This code takes 2 numbers and perform summation on them. */
        
        $number_1 = 10; // Number 1
        $number_2 = 20; // Number 2
        $sum = $number_1 + $number_2; // Summation of numbers.
        echo "Sum of 2 numbers: ", $sum; // printing them.
    ?>
```

# Use String functions:
- strtolower()
```
  <?php
   $name = "JUGRAJ SINGH";
   $name_in_small = strtolower($name);
   echo "Name: ", $name_in_small;
  ?>
```

-- strtoupper()
```
  <?php
   $name = "gurpreet singh";
   $name_in_capital = strtoupper($name);
   echo "Name: ", $name_in_capital;
  ?>
```

-- strlen()
```
  <?php
   $name = "karan";
   $name_length = strlen($name);
   echo "Length of name: ", $name_length;
  ?>
```

-- str_word_count()
```
  <?php
   $line = "We are learning PHP!";
   $no_of_words = str_word_count($line);
   echo "No of words in a line: ", $no_of_words;
  ?>
```