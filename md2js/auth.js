/**
* @api {post}  - Check if account exist 



* @apiName Check if account exist 


* @apiGroup sign up


* @apiDescription Check if account exist 

* @apiExample Example usage:
* curl http://localhost:8241/eler/api/user/is-email-exist/{email}
*/
/**
* @api {post}  - email verification code



* @apiName email verification code


* @apiGroup sign up


* @apiDescription email verification code

* @apiExample Example usage:
* curl -v -X POST -H "Content-Type: application/json" --data @email.json http://localhost:8241/eler/api/user/emailvcode

* @apiSuccessExample Success-Response: 
* email.json
* 
*     {
*         "email":"eler@gamil.com"
*     }
*     
* @apiSuccess Success-Response Then a singup session id will be returned in the header
*/
/**
* @api {post}  - verify code



* @apiName verify code


* @apiGroup sign up


* @apiDescription verify code

* @apiExample Example usage:
* curl -v -X POST --cookie "session_id={session_id}" -H "Content-Type: application/json" --data @verify.json http://localhost:8241/eler/api/user/verifycode
* @apiExample Example usage:
* curl -v  -X POST -H "Authorization: Bearer {session_id}" -H "Content-Type: application/json" --data @verify.json http://localhost:8241/eler/api/user/verifycode

* @apiSuccessExample Success-Response: 
* verify.json
* 
*     {
*             "verification_code" : "123456"
*     }
*     
* @apiSuccess Success-Response -
*/
/**
* @api {post}  - sign up



* @apiName sign up


* @apiGroup sign up


* @apiDescription sign up

* @apiExample Example usage:
* curl -v  -X POST --cookie "session_id={session_id}" -H "Content-Type: application/json" --data @signup.json http://localhost:8241/eler/api/user/signup
* @apiExample Example usage:
* curl -v -X POST -H "Authorization: Bearer {session_id}" -H "Content-Type: application/json" --data @signup.json http://localhost:8241/eler/api/user/signup

* @apiSuccessExample Success-Response: 
* signup.json
* 
*     {       
*        	"email":	"eler@gmail.com",
*        	"name":		"Yang",
*         "passwd": 	"123"
*     }
*     
* @apiSuccess Success-Response Then a login session id and refresh token will be returned;
*/
/**
* @api {post}  - log in with password on mobile device



* @apiName log in with password on mobile device


* @apiGroup Log in


* @apiDescription log in with password on mobile device

* @apiExample Example usage:
* curl -v -X POST -H "Content-Type: application/json" --data @login.json http://localhost:8241/eler/api/user/login/mobile

* @apiSuccessExample Success-Response: 
* login.json
* 
*     {       
*         "email": "eler@gmail.com",
*         "passwd": "123"
*     }
*     
* @apiSuccess first-Success-Response Then a login session id will be returned in the header. And also response JSON:

* @apiSuccessExample Success-Response: 
* 
*     {
*         "session_id":"M42I1eagnpDgD9NRKq-y2jtfkKQDbcE4q0zeDz0BN1ht8Dnvzp6ojMSEPHY5KiTMy6GdtKzwoFN3oAcgw5ZxqA==",
*         "refresh_token":"3CxRbTpd...k4="
*     }
*     
* @apiSuccess second-Success-Response Every time login on mobile, a new refresh token will be generated.
*/
/**
* @api {post}  - log in with password on mobile web



* @apiName log in with password on mobile web


* @apiGroup Log in


* @apiDescription log in with password on mobile web

* @apiExample Example usage:
* curl -v -X POST -H "Content-Type: application/json" --data @login.json http://localhost:8241/eler/api/user/login/web

* @apiSuccessExample Success-Response: 
* login.json
* 
*     {       
*         "email": "eler@gmail.com",
*         "passwd": "123"
*     }
*     
* @apiSuccess first-Success-Response Then a login session id will be returned in the header. And also response JSON:

* @apiSuccessExample Success-Response: 
* 
*     {
*         "session_id":"M42I1eagnpDgD9NRKq-y2jtfkKQDbcE4q0zeDz0BN1ht8Dnvzp6ojMSEPHY5KiTMy6GdtKzwoFN3oAcgw5ZxqA==",
*         "refresh_token":""
*     }
*     
* @apiSuccess second-Success-Response No new refresh token will be generated. Only return a session_id
*/
/**
* @api {post}  - log in with token



* @apiName log in with token


* @apiGroup Log in


* @apiDescription log in with token

* @apiExample Example usage:
* curl -X POST -H "Content-Type: application/json" --data @refresh_token.json http://localhost:8241/eler/api/user/login/token

* @apiSuccessExample Success-Response: 
* refresh_token.json
* 
*     {
*         "refresh_token":"3CxRbTpd...k4="
*     }
*     
* @apiSuccess first-Success-Response Then a login session id will be returned in the header. And also response JSON:

* @apiSuccessExample Success-Response: 
* 
*     {
*         "session_id":"M42I1eagnpDgD9NRKq-y2jtfkKQDbcE4q0zeDz0BN1ht8Dnvzp6ojMSEPHY5KiTMy6GdtKzwoFN3oAcgw5ZxqA==",
*         "refresh_token":"3CxRbTpd...k4="
*     }
*     
* @apiSuccess second-Success-Response -
*/
/**
* @api {post}  - mobile logout



* @apiName mobile logout


* @apiGroup logout


* @apiDescription mobile logout

* @apiExample Example usage:
* curl -X PUT --cookie "session_id={session_id}" http://localhost:8241/eler/api/user/logout/mobile
* 
or 


* @apiExample Example usage:
* curl -X PUT -H "Authorization: Bearer {session_id}" http://localhost:8241/eler/api/user/logout/mobile
*/
/**
* @api {post}  - web logout



* @apiName web logout


* @apiGroup logout


* @apiDescription web logout

* @apiExample Example usage:
* curl -X PUT --cookie "session_id={session_id}" http://localhost:8241/eler/api/user/logout/web
* 
or 


* @apiExample Example usage:
* curl -X PUT -H "Authorization: Bearer {session_id}" http://localhost:8241/eler/api/user/logout/web
*/
/**
* @api {post}  - forget passwd



* @apiName forget passwd


* @apiGroup logout


* @apiDescription forget passwd

*/
/**
* @api {post}  -  send email



* @apiName  send email


* @apiGroup logout


* @apiDescription  send email

* @apiExample Example usage:
* curl -X POST -H "Content-Type: application/json" --data @email.json http://localhost:8241/eler/api/user/emailrcode

* @apiSuccessExample Success-Response: 
* email.json
* 
*     {
*         "email":"eler@gamil.com"
*     }
*     
* @apiSuccess Success-Response you will receive an email which include a verification code
*/
/**
* @api {post}  - verify code



* @apiName verify code


* @apiGroup logout


* @apiDescription verify code

* @apiExample Example usage:
* curl -v -X POST --cookie "session_id={session_id}" -H "Content-Type: application/json" --data @verify.json http://localhost:8241/eler/api/user/verifycode
* @apiExample Example usage:
* curl -v  -X POST -H "Authorization: Bearer {session_id}" -H "Content-Type: application/json" --data @verify.json http://localhost:8241/eler/api/user/verifycode

* @apiSuccessExample Success-Response: 
* verify.json
* 
*     {
*             "verification_code" : "123456"
*     }
*     
* @apiSuccess Success-Response -
*/
/**
* @api {post}  -  change password



* @apiName  change password


* @apiGroup logout


* @apiDescription  change password

* @apiExample Example usage:
* curl -X PUT -H "Authorization: Bearer {session_id}" -H "Content-Type: application/json" --data @passwd.json http://localhost:8241/eler/api/user/passwd
* 
or 


* @apiExample Example usage:
* curl -X PUT --cookie "session_id={session_id}" -H "Content-Type: application/json" --data @passwd.json http://localhost:8241/eler/api/user/passwd

* @apiSuccessExample Success-Response: 
* passwd.json

* @apiSuccessExample Success-Response: 
* json{    "passwd":"1428"}

* @apiSuccess Success-Response -
*/
/**
* @api {post}  - is session expeired



* @apiName is session expeired


* @apiGroup kits


* @apiDescription is session expeired

* @apiExample Example usage:
* curl -X PUT -H "Authorization: Bearer {session_id}" http://localhost:8241/eler/api/user/is-session-exist
*/
