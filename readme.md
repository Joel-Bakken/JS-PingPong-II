# Ping-Pong

#### Replaces certain numbers within a range determined by you with ping or pong [ver 0.9 6-9-17]

#### By Joel Bakken (with some help from Google)

## Description

This program will create a number list starting at 1 and going to whatever number you specifiy. Once that list is created certain numbers will be replaced with the words: Ping, Pong or in some cases with Ping-Pong.

## Setup/Installation Requirements

* No setup required, just load index.html into your favorite web browswer and follow the on screen instructions.



## Known Bugs

There is only one known issue with this program at this time...the number list will not populate to the webpage. It only works in the console right now.

## Support and contact details

Please contact Joel & jkbetc@gmail.com if you have any questions about this program.

## Technologies Used

Written on a Dell OMEN laptop using Atom and Sublime Text. I used HTML, CSS, JavaScript and Jquery in the making of this program.

### License

*MIT License*

Copyright (c) 2017 **Joel Bakken**


Behavior																	Input	Output		Result

Must accept an ending number from the user and store that number in memory	1		.val		PASS

Must check if input is divisible by 3 and return ping if yes				9		Ping		PASS

Must check if input is divisible by 5 and return pong if yes				20		Pong		PASS

Must check if number is divisible by 15 and return
ping-pong if yes															30		Ping-Pong	PASS

Must prevent input that is not an integer (set form field 
input to numbers to prevent user input other than a number.)				Joel	<none>		PASS

Must display the range of number from 1 to the number entered 
by the user in numerical order with the above substitutions					n/a		n/a			FAIL


•	Numbers divisible by 3 are replaced with "ping"
•	Numbers divisible by 5 are replaced with "pong"
•	Numbers divisible by 15 are replaced with "ping-pong"