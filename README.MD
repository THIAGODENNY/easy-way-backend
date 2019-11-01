In project folder:

```
npm install
```

To run offline:

```
npm run dev
```

Endpoint:

```
ANY - https://ey7li2szf0.execute-api.us-east-1.amazonaws.com/dev
ANY - https://ey7li2szf0.execute-api.us-east-1.amazonaws.com/dev/{proxy+}
```

```
Misc Endpoint

@get/hello

@get/misc/cid/
@get/misc/cid/:uid
@post/misc/cid

body example:
{
    id: "A00",
    keywords: "fooBar"
}
```

```
Auth Endpoint:

@post/auth/jwt/admin/register
@post/auth/jwt/login

body example:

{
"name": "foo bar",
"email": "foo@bar.com",
"password": "fooBar",
"profile": "fooBar"
}

header token example:

Content-Type = application/json
x-access-token = fooBar123
```
