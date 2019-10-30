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
Auth Endpoint:

@post/auth/jwt/register
@post/auth/jwt/login
@get/auth/jwt/logout
@get/auth/jwt/me

body example:

{
"name": "foo bar",
"email": "foo@bar.com",
"password": "fooBar"
}

header token example:

x-access-token = fooBar123
```
