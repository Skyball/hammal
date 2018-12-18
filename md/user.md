# User API

> ### get account basic info

```bash
curl -X GET -H "Authorization: Bearer {session_id}" http://localhost:8241/eler/api/user/account
```

or

```bash
curl -X GET --cookie "session_id={session_id}" http://localhost:8241/eler/api/user/account
```





> ###update Props

#### 1. user name

```bash
curl -X PUT -H "Authorization: Bearer {session_id}" -H "Content-Type: application/json" --data @props.json http://localhost:8241/eler/api/user/name
```

or 

```bash
curl -X PUT --cookie "session_id={session_id}" -H "Content-Type: application/json" --data @props.json http://localhost:8241/eler/api/user/name
```

props.json:

```
{
    "user_name":"YANG"
}
```



#### 2. signature

```bash
curl -X PUT -H "Authorization: Bearer {session_id}" -H "Content-Type: application/json" --data @props.json http://localhost:8241/eler/api/user/signature
```

or 

```bash
curl -X PUT --cookie "session_id={session_id}" -H "Content-Type: application/json" --data @props.json http://localhost:8241/eler/api/user/signature
```

props.json:

```json
{
    "signature":"better every day!"
}
```



#### 3. avatar

```bash
curl -X PUT --cookie "session_id={session_id}" -F "avatar=@image.png" http://localhost:8241/eler/api/user/avatar
```

or 

```json
curl -X PUT -H "Authorization: Bearer {session_id}" -F "avatar=@image.png" http://localhost:8241/eler/api/user/avatar
```



#### 4. location

```bash
curl -X PUT -H "Authorization: Bearer {session_id}" -H "Content-Type: application/json" --data @props.json http://localhost:8241/eler/api/user/location
```

or 

```bash
curl -X PUT --cookie "session_id={session_id}" -H "Content-Type: application/json" --data @props.json http://localhost:8241/eler/api/user/location
```

props.json:

```json
{
    "user_location":"Xi'an"
}
```



#### 5. reputation

```bash
curl -X PUT -H "Authorization: Bearer {session_id}" -H "Content-Type: application/json" --data @props.json http://localhost:8241/eler/api/user/reputation
```

or 

```bash
curl -X PUT --cookie "session_id={session_id}" -H "Content-Type: application/json" --data @props.json http://localhost:8241/eler/api/user/reputation
```

props.json:

```json
{
    "add": 10
}
```



#### 6. eler coins

```bash
curl -X PUT -H "Authorization: Bearer {session_id}" -H "Content-Type: application/json" --data @props.json http://localhost:8241/eler/api/user/coin
```

or 

```bash
curl -X PUT --cookie "session_id={session_id}" -H "Content-Type: application/json" --data @props.json http://localhost:8241/eler/api/user/coin
```

props.json:

```json
{
    "add": 10
}
```



#### 7. ads

```bash
curl -X PUT -H "Authorization: Bearer {session_id}" -H "Content-Type: application/json" --data @props.json http://localhost:8241/eler/api/user/ads
```

or 

```bash
curl -X PUT --cookie "session_id={session_id}" -H "Content-Type: application/json" --data @props.json http://localhost:8241/eler/api/user/ads
```

props.json:

```json
{
    "remove_ads": true
}
```



#### 8. ads

```bash
curl -X PUT -H "Authorization: Bearer {session_id}" -H "Content-Type: application/json" --data @props.json http://localhost:8241/eler/api/user/ads
```

or 

```bash
curl -X PUT --cookie "session_id={session_id}" -H "Content-Type: application/json" --data @props.json http://localhost:8241/eler/api/user/ads
```

props.json:

```json
{
    "remove_ads": true
}
```



#### 9. subscriber

```bash
curl -X PUT -H "Authorization: Bearer {session_id}" -H "Content-Type: application/json" --data @props.json http://localhost:8241/eler/api/user/subscriber
```

or 

```bash
curl -X PUT --cookie "session_id={session_id}" -H "Content-Type: application/json" --data @props.json http://localhost:8241/eler/api/user/subscriber
```

props.json:

```json
{
    "subscriber": true
}
```





> ### response code

```json
	//error code
	SESSION_NOT_EXIST	 		   = 40000

	REFRESH_TOKEN_NOT_MATCH        = 40009
	UPDATE_REMOVE_ADS_FAIL         = 40010
	UPDATE_AVATAR_FAIL             = 40011
	UPDATE_ELER_COIN_FAIL          = 40012
	UPDATE_LOCATION_FAIL           = 40013
	UPDATE_REPUTATION_FAIL         = 40014
	UPDATE_SIGNATURE_FAIL          = 40015
	UPDATE_SUBSCRIBER_FAIL         = 40016
	UPDATE_USER_NAME_FAIL          = 40017
	LOGOUT_FAIL                    = 40018
	GET_PEOPLE_INFO_FAILED         = 40019
	AVATAR_PARSING_FAILED          = 40020
	AVATAR_UPLOAD_FAILED           = 40021

	//error code
	
	UPDATE_REMOVE_ADS_SUC       = 40010
	UPDATE_AVATAR_SUC           = 20011
	UPDATE_ELER_COIN_SUC        = 20012
	UPDATE_LOCATION_SUC         = 20013
	UPDATE_REPUTATION_SUC       = 20014
	UPDATE_SIGNATURE_SUC        = 20015
	UPDATE_SUBSCRIBER_SUC       = 20016
	UPDATE_USER_NAME_SUC        = 20017
```

