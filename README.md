# _Ping-Pong_

#### _A site that returns a number or word to the user when prompted, 05.05.2017_

#### By _**Connor Larsen**_

## Description

_This site prompts a user to enter a number into a form field and will count up to that number starting at 1, showing all values to the user up to that value. When a number divisible by 3 is reached the user will receive the word "ping" back. When a number divisible by 5 is reached the user will receive the word "pong" back. When a number divisible by 15 is reached the user will receive the word "ping-pong" back._

## Specifications

Specifications:

-If the user enters a non-number, the program gives an error
  -Input: red
  -Output: Error message: "You must enter a positive number"

-If the user enters a negative number, the program gives an error
  -Input: -2
  -Output: Error message: "You must enter a positive number"

-The program can count up to the entered number
  -Input: 2
  -Output: [1, 2]

-When a number that is divisible by 3 is reached, the program will return "ping"
  -Input: 3
  -Output: [1, 2, "ping"]

-When a number that is divisible by 5 is reached, the program will return "pong"
  -Input: 5
  -Output: [.., 4, "pong"]

-When a number that is divisible by both 15 is reached, the program will return "ping-pong"
    -Input: 16
    -Output: [.., 14, "ping-pong", 16]

-The program will list out each number in consecutive order on the page after the user inputs a number
  -Input: 4
  -Output: 1, 2, ping, 4

## Setup/Installation Requirements

* _Clone the application to your desktop_
* _Open index.html in your preferred web browser_
* _Answer the question and have fun!_

_This requires a desktop and a web browser._

## Known Bugs

_There are no known bugs in this application._

## Support and contact details

_Feel free to contact me on GitHub if you have any questions about this code._

## Technologies Used

_I used HTML, CSS, and JavaScript for this application._

### License

*MIT License

Copyright (c) 2017 Connor Larsen

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*

Copyright (c) 2017 **_Connor Larsen_**
