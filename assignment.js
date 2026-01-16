// Question 1: Temperature Converter
// Below is temperature converting Celsius to Fahrenheit.


function convertTemperature(celsius) {
    // Apply the conversion formula
    // Fahrenheit = (celsius * 9 / 5) + 32
    let fahrenheit = (celsius * 9 / 5) + 32;

    // Return the result as a formatted string
    return `${celsius}°C = ${fahrenheit}°F`;
}

// Test Case

// Convert 0°C to Fahrenheit and print the result
console.log(convertTemperature(0));

// Convert 25°C to Fahrenheit and print the result
console.log(convertTemperature(25));

// Convert 100°C to Fahrenheit and print the result
console.log(convertTemperature(100));


// Question 2: Age Category
// 

function getAgeCategory(age) {
    if (age < 13) {
        return "Child";
    }
    else if (age >= 13 && age <= 19) {
        return "Teenager";
    }
    else if (age >= 20 && age <= 59) {
        return "Adult";
    }
    else {
        return "Senior";
    }
}

// Test Case

console.log(getAgeCategory(10));
console.log(getAgeCategory(16));
console.log(getAgeCategory(35));
console.log(getAgeCategory(60));

// Question 3: Calculator
//

function calculator(num1, num2, operator) {
    switch (operator) {
        case "add":
            return num1 + num2;
        case "subtract":
            return num1 - num2;
        case "multiply":
            return num1 * num2;
        case "divide":
            return num1 / num2;
    }
}

// Test Case

console.log(calculator(10, 5, "add"));
console.log(calculator(10, 5, "subtract"));
console.log(calculator(10, 5, "multiply"));
console.log(calculator(10, 5, "divide"));


// Question 4: Discount Calculator

function applyDiscount(price, discountPercent) {
    let discountAmount = (price * discountPercent);
    let finalPrice = price - discountAmount;

    return `Original: ₹${price}, Discount: ₹${discountAmount}, Final: ₹${finalPrice}`;
}

// Test Case

console.log(applyDiscount(1000, 10));
console.log(applyDiscount(500, 20));

// Question 5: Grade Checker

function checkGrade(marks) {
    let grade;
    let status;

    if (marks >= 90) {
        grade = "A";
    }
    else if (marks >= 80) {
        grade = "B";
    }
    else if (marks >= 70) {
        grade = "C";
    }
    else if (marks >= 60) {
        grade = "D";
    }
    else {
        grade = "F";
    }

    if (marks >= 60) {
        status = "Pass";
    }
    else {
        status = "Fail";
    }

    return `Grade: ${grade}, Status: ${status}`;
}

//Test Case

console.log(checkGrade(95));
console.log(checkGrade(72));
console.log(checkGrade(45));


// Question 6: Product Info

function createProduct(name, price, inStock) {
    let status;

    if (inStock) {
        status = "Available";
    }
    else {
        status = "Out of Stock";
    }

    return {
        name: name,
        price: price,
        inStock: inStock,
        displayPrice: `₹${price}`,
        status: status,
    };
}

// Test Case

console.log(createProduct("Laptop", 50000, true));
console.log(createProduct("Mouse", 500, false));


//Question 7: Array Operations

function arrayInfo(arr) {
    return {
        length: arr.length,
        first: arr[0],
        last: arr.length > 0 ? arr[arr.length - 1] : undefined,
        isEmpty: arr.length === 0,
    };

}

// Test Case

console.log(arrayInfo([10, 20, 30, 40]));
console.log(arrayInfo([5]));
console.log(arrayInfo([]));


// Question 8: User Profile

function createUserProfile(firstName, lastName, age, city) {
    return {
        fullName: firstName + " " + lastName,
        age: age,
        city: city,
        isAdult: age >= 16,
        profileSummary: firstName + " " + lastName + "," + " " + age + " " + "years old" + "," + " " + "from" + " " + city,
    }
}

// Test Case

console.log(createUserProfile("John", "Doe", 25, "Mumbai"));
console.log(createUserProfile("Sara", "Khan", 16, "Delhi"));


// Question 9: What is the Output? (Part 1)

const x = 10;
const y = 20;

const result1 = x + y;
const result2 = `${x} + ${y}`;
const result3 = `${x} + ${y} = ${x + y}`


console.log(result1);
console.log(result2);
console.log(result3);
console.log(typeof result1);
console.log(typeof result2);

// Answer:

// Line 1: 30
// Line 2: "10 + 20"
// Line 3: "10 + 20 = 30"
// Line 4: number
// Line 5: string


// Question 10: What is the Output? (Part 2)

const user = {
    name: "Alice",
    age: 20
};

const age = 25;

console.log(user.name);
console.log(user.age);
console.log(age);

user.age = 21,
    console.log(user.age)

const isAdult = user.age >= 18 ? "Yes" : "No";

console.log(isAdult)

// Answer:

// Line 1: user.name: "Alice"
// Line 2: user.age: initially 20
// Line 3: age varible is separate: 25
// Line 4: user.age: 21 update the object
// Line 5: 21 >= 18 ternary "Yes"

// Question 11: Email Validator

function validateEmail(email) {

    if (email.includes("@") && email.includes(".")) {
        return true;
    }
    if (email === "") {
        return false;
    }
    else {
        return false;
    }
}


// Test Case

console.log(validateEmail("john@example.com"));
console.log(validateEmail("invalid.email"));
console.log(validateEmail("test@domain"));
console.log(validateEmail(""))


// Question 12: String Formatter

function formatName(firstName, lastName) {
    return firstName.trim().toUpperCase() + " " + lastName.trim().toUpperCase();
}

// Test Case

console.log(formatName("john", "doe"));
console.log(formatName(" sarah ", " khan"));
console.log(formatName("mike", "smith"));


// Question 13: Shopping Cart Manager

function manageCart(cart, action, item) {

    switch (action) {
        case "add":
            cart.push(item);
            break;
        case "remove":
            cart.pop(item);
            break;
        case "addFirst":
            cart.unshift(item);
            break;
        case "removeFirst":
            cart.shift(item)
            break;


    }
    return cart;

}


// Test Case
let cart = ["Laptop", "Mouse"];

console.log(manageCart(cart, "add", "Keyboard"));
console.log(manageCart(cart, "remove"));
console.log(manageCart(cart, "addFirst", "Monitor"));
console.log(manageCart(cart, "removeFirst"));


// Question 14: Word Counter

function countWords(sentence) {
    const word = sentence.split(" ")
    return word.length
}

// Test Case

console.log(countWords("Hello world"));
console.log(countWords("JavaScript is awesome"));
console.log(countWords("I love coding in JavaScript"));


// Question 15: Array Manipulator

function arrayOperations(arr1, arr2) {

        const combined = arr1.concat(arr2)
        console.log(combined)

        const combinedString = combined.join(", ")
        console.log(combinedString)

        const hasApple = combined.includes("Apple")
        console.log(hasApple)

        const length = combined.length
        console.log(length)

        return {
            combined: combined,
            combinedString: combinedString,
            hasApple: hasApple,
            length: length
        }

}

// Test Case

const fruits1 = ["Apple", "Banana"];
const fruits2 = ["Orange", "Mango"];
console.log(arrayOperations(fruits1, fruits2));


// Bonus Question (Optional)

function evenOrOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd" 
}

// Test Case

console.log(evenOrOdd(10));
console.log(evenOrOdd(7));
console.log(evenOrOdd(0));