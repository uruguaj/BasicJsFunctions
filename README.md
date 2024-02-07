# Utility Functions Documentation

This repository contains a set of utility functions written in JavaScript to assist in various tasks.

## Functions

### 1. `Maybe`

- This function returns a boolean value (`true` or `false`) randomly.
- Example usage:
  ```javascript
  let variable = Maybe;
  ```

### 2. `RandomNumber()`

- This function generates a random number within a specified range.
- Parameters:
  - `min` (optional, default: 1): The minimum value of the range.
  - `max` (optional, default: 10): The maximum value of the range.
  - `precision` (optional): The precision of the generated random number.
- Example usage:
  ```javascript
  // Generate a random number between 1 and 10
  let randomNumber = RandomNumber();

  // Generate a random number between 5 and 20
  let randomNumberInRange = RandomNumber(5, 20);

  // Generate a random number between 1 and 10 with precision to 2 decimal places
  let preciseRandomNumber = RandomNumber(1, 10, 2);
  ```

### 3. `RandomColor()`

- This function generates a random hexadecimal color code.
- Example usage:
  ```javascript
  let color = RandomColor();
  ```

### 4. `CelsiusToFahrenheit()`

- This function converts temperature from Celsius to Fahrenheit.
- Parameters:
  - `celsius`: Temperature in Celsius.
- Example usage:
  ```javascript
  let fahrenheit = CelsiusToFahrenheit(30); // Returns 86 (Fahrenheit)
  ```

## Documentation

For more details and examples, please refer to the [documentation](https://uruguaj.com/script/wiki).
