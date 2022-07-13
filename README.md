### INSTRUCTIONS

## Installation and running

run `docker-compose up` in the root loction

run `npm i` and `npm run dev` in ./server
run `npm i` and `npm start` in ./client

the client runs on `localhost:3000`, the server `localhost:5005`, while the database runs in a Docker container for ease of use.

## Endpoints

|method| endpoint	| action  	| 
|---|---	|---	|
|GET|   localhost:3000/	|   redirects to login page	|  
|POST|    localhost:3000/login		|   log in as a user	|  
|POST|   localhost:3000/register		|   sign in a a user	|  
|GET|   localhost:3000/user		|   shows two graphs*	|  



Right now there are severe performance issues. The takes a lot of time to load, sometimes it appears to hung up(its not the case).
Further optimisation is required. Since I dont know the math and logic behind the graph, some of its values are hardcoded.
The code responsible for the graph can be commented out to disable it and for performance sake. 
On the otherhand, each point on the graph is accessible by the user(the performance issues stem from here, since its more a series of points rather then a "line")
