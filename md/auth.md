# auth



## sign up

### Check if account exist 

```bash
curl http://localhost:8241/eler/api/user/is-email-exist/{email}
```



### email verification code

```bash
curl -v -X POST -H "Content-Type: application/json" --data @email.json http://localhost:8241/eler/api/user/emailvcode
```

`email.json`

```json
{
    "email":"eler@gamil.com"
}
```

Then a singup session id will be returned in the `header`



### verify code

```bash
curl -v -X POST --cookie "session_id={session_id}" -H "Content-Type: application/json" --data @verify.json http://localhost:8241/eler/api/user/verifycode
```

or

```bash
curl -v  -X POST -H "Authorization: Bearer {session_id}" -H "Content-Type: application/json" --data @verify.json http://localhost:8241/eler/api/user/verifycode
```



`verify.json`

```json
{
        "verification_code" : "123456"
}
```



### sign up

```bash
curl -v  -X POST --cookie "session_id={session_id}" -H "Content-Type: application/json" --data @signup.json http://localhost:8241/eler/api/user/signup
```

or

```bash
curl -v -X POST -H "Authorization: Bearer {session_id}" -H "Content-Type: application/json" --data @signup.json http://localhost:8241/eler/api/user/signup
```



`signup.json`

```json
{       
   	"email":	"eler@gmail.com",
   	"name":		"Yang",
    "passwd": 	"123"
}
```

Then a login session id and refresh token will be returned;



## Log in

### log in with password on mobile device

```bash
curl -v -X POST -H "Content-Type: application/json" --data @login.json http://localhost:8241/eler/api/user/login/mobile
```

`login.json`

```json
{       
    "email": "eler@gmail.com",
    "passwd": "123"
}
```

Then a login session id will be returned in the `header`. And also response JSON:

```json
{
    "session_id":"M42I1eagnpDgD9NRKq-y2jtfkKQDbcE4q0zeDz0BN1ht8Dnvzp6ojMSEPHY5KiTMy6GdtKzwoFN3oAcgw5ZxqA==",
    "refresh_token":"3CxRbTpd...k4="
}
```

Every time login on mobile, a new refresh token will be generated.



### log in with password on mobile web

```bash
curl -v -X POST -H "Content-Type: application/json" --data @login.json http://localhost:8241/eler/api/user/login/web
```

`login.json`

```json
{       
    "email": "eler@gmail.com",
    "passwd": "123"
}
```

Then a login session id will be returned in the `header`. And also response JSON:

```json
{
    "session_id":"M42I1eagnpDgD9NRKq-y2jtfkKQDbcE4q0zeDz0BN1ht8Dnvzp6ojMSEPHY5KiTMy6GdtKzwoFN3oAcgw5ZxqA==",
    "refresh_token":""
}
```

No new refresh token will be generated. Only return a `session_id`



### log in with token

```bash
curl -X POST -H "Content-Type: application/json" --data @refresh_token.json http://localhost:8241/eler/api/user/login/token
```

`refresh_token.json`

```json
{
    "refresh_token":"3CxRbTpd...k4="
}
```



Then a login session id will be returned in the `header`. And also response JSON:

```json
{
    "session_id":"M42I1eagnpDgD9NRKq-y2jtfkKQDbcE4q0zeDz0BN1ht8Dnvzp6ojMSEPHY5KiTMy6GdtKzwoFN3oAcgw5ZxqA==",
    "refresh_token":"3CxRbTpd...k4="
}
```



## logout

### mobile logout

```bash
curl -X PUT --cookie "session_id={session_id}" http://localhost:8241/eler/api/user/logout/mobile
```

or 

```bash
curl -X PUT -H "Authorization: Bearer {session_id}" http://localhost:8241/eler/api/user/logout/mobile
```



### web logout

```bash
curl -X PUT --cookie "session_id={session_id}" http://localhost:8241/eler/api/user/logout/web
```

or 

```bash
curl -X PUT -H "Authorization: Bearer {session_id}" http://localhost:8241/eler/api/user/logout/web
```



### forget passwd

#### send email

```bash
curl -X POST -H "Content-Type: application/json" --data @email.json http://localhost:8241/eler/api/user/emailrcode
```

`email.json`

```
{
    "email":"eler@gamil.com"
}
```

you will receive an email which include a verification code



### verify code

```bash
curl -v -X POST --cookie "session_id={session_id}" -H "Content-Type: application/json" --data @verify.json http://localhost:8241/eler/api/user/verifycode
```

or

```bash
curl -v  -X POST -H "Authorization: Bearer {session_id}" -H "Content-Type: application/json" --data @verify.json http://localhost:8241/eler/api/user/verifycode
```

`verify.json`

```json
{
        "verification_code" : "123456"
}
```



#### change password

```bash
curl -X PUT -H "Authorization: Bearer {session_id}" -H "Content-Type: application/json" --data @passwd.json http://localhost:8241/eler/api/user/passwd
```

or 

```bash
curl -X PUT --cookie "session_id={session_id}" -H "Content-Type: application/json" --data @passwd.json http://localhost:8241/eler/api/user/passwd
```

`passwd.json`

````json
{
    "passwd":"1428"
}
````



## kits

### is session expeired

```bash
curl -X PUT -H "Authorization: Bearer {session_id}" http://localhost:8241/eler/api/user/is-session-exist
```



## Code const list

```go
	//error code
	SESSION_NOT_EXIST	 		   = 40000
	SESSION_EXIST 				   = 20000

	VERIFICATION_CODE_SEND_ERROR   = 40001
	VERIFICATION_CODE_NOT_MATCH    = 40002
	ACCOUNT_NOT_EXIST              = 40003
	PASSWORD_NOT_MATCH             = 40004
	CANNOT_SEND_RESET_PASSWD_EMAIL = 40005
	EMAIL_USED                     = 40006
	RESET_PASSWD_FAILED            = 40007
	REFRESH_TOKEN_NOT_MATCH        = 40009
	LOGOUT_FAIL                    = 40018

	//error code
	VERIFICATION_CODE_SEND_OK   = 20001
	VERIFICATION_CODE_OK        = 20002
	SEND_RESET_PASSWD_EMAIL_SUC = 20003
	LOGIN_SUC                   = 20004
	EMAIL_OK                    = 20005
	RESET_PASSWD_SUC            = 20006
	LOGOUT_SUC                  = 20018
```

