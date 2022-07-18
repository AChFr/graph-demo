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
|GET|   localhost:3000/user		|   shows two options	|  
|GET|   localhost:3000/user/nice	|    redirects to charts done with ChartJS	|  
|GET|   localhost:3000/user/ugly	|   redirects to charts done with Recharts	|  



The rechart option is mor complete in terms of data rendering. It allows for reference lines and reference dots. The downsides are the lack of aesthetic configuration and the data input format. It requires to parse the huge JSON and it takes quite some time. This problem may be solved by sending the data cwith the correct format from the server.

the ChartJS option allows for far greater visual custumization at rhe cost of inferior functionality. No reference lines, dots or segments. ou either priovide the complete dataset or you can not drow a line between two points. On the other hand, the input format is much friendly, so no performance issues. 
