# CLASS 2 NOTES:

1. What is variable?
- Variable is a placeholder which holds a value. A value can be integer, float, boolean or string.

2. What is Global variable?
- A variable which is defined outside the scope of the function.
```
    <?php
            $a = 10;   // global variable.

            function hello(){
                $b=20;   // local variable.
            }
            hello();
            echo $a;
            echo $b;    // It is not accessale as its a local variable.
    ?>
```

3. What is Local variable?
- A variable which is defined inside the scope of the function. Refer to example in 2.


4. Constant?
- Their value remain same throught out the scope of a script.
```
    <?php
        $price=9.99;    // variable
        define("TAX", 1.15);  // Constant
        echo $price * TAX;
    ?>
```

Exercise 1: Check if 2 numbers are equal?
```
    <?php
        $a=5;
        $b=5;
        echo "Are a and b equal: ",  var_dump($a == $b);
    ?>
```