# <center>  -:INTERNET:- </center>
<img src="https://d186loudes4jlv.cloudfront.net/http/images/query_strings.jpg" alt="Work flow" title="work-flow">

- Internet works upon the Request from client and find it from the repective server.
- To do so its requires a Url query so it can be redirect to the server
- Mainly an URL have 4 main stream
 1. <b>Scheme</b>(`http://`) Like - Http ftp get etc.
 2. <b>Host</b> (`www.google.com`)  It tells the client where the resource is hosted or located.
 3. <b>Port</b>(`:8080`) The port or port number. It is only required if you want to use a port other than the default.
 4. <b> Path</b>(`/home`) The path. It shows what local resource is being requested. This part of the URL is optional.
 5. <b> Query string</b> (`?item=book`) The query string, which is made up of query parameters. It is used to send data to the server. This part of the URL is also optional.

 <img src="https://d186loudes4jlv.cloudfront.net/http/images/url_components.png" alt="Work flow" title="Url query">

 ## <center>  -:Query Strings/Parameters:- </center>
 ```
 http://www.example.com?search=ruby&results=10
 ```


Query String Component | Description 
| :---: | :---:
?  | This is a reserved character that marks the start of the query string 
search=ruby  | This is a parameter name/value pair.  
&  | This is a reserved character, used when adding more parameters to the query string.  
results=10  | This is also a parameter name/value pair.  

>here is another Example:-<br>
```  http://www.phoneshop.com?product=iphone&size=32gb&color=white```
<img src="https://d186loudes4jlv.cloudfront.net/http/images/query_string_components.png" alt="Work flow" title="Url query" style="background-color:#FCCECE;">

- URLs are designed to accept only certain characters in the standard 128-character ASCII character set. Reserved or unsafe ASCII characters which are not being used for their intended purpose, as well as characters not in this set, have to be encoded. URL encoding serves the purpose of replacing these non-conforming characters with a % symbol followed by two hexadecimal digits that represent the equivalent UTF-8 character.

Char | UTF - 8 Code
| :---: | :---: 
Space | %20
$ | %24
£ | %C2%A3
€ | %E2%82%AC
𐍈 | %E2%82%AB




# <center>  API </center>

API Stands for <b>Application Programming interface.</b><br>
User/Client ↔ Server ↔  Database <br>
<b> <u>API</u> => A Link which carry certain info data to get back some info from Server.</b>

# <center>  -:NODE Js Architecture:- </center>

>- Request
>- Node Js Server
>- Event Queue
>- Thread Pool
>- Event Loop
>- External Resource

## <center>  -:Work Flow of NODE Js:- </center>

<img src="https://qph.cf2.quoracdn.net/main-qimg-d013a90371f81463fb32d6006014005e" alt="Work flow" title="work-flow">

>>- <b>Request</b> - Request given by the end user or client.
>>- <b>Event Queue</b> - Receive all request and Do all the works if its doesn't need external Resource.
>>- <b>Event Loop</b> - Check if the job requires any external Resouce. if needed send them to Thread pool.
>>- <b>Thread Pool</b> - Collect the required data from External resource for the Request and give them.

# <center>  -:Database Connection:- </center>
<img src="https://www.byperth.com/wp-content/uploads/2018/04/stock-analyzer-project-architecture-1.jpg" alt="Work flow" title="Database-connection">


