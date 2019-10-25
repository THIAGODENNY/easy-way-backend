In project folder:

```
npm install
```

To run offline:

```
npm run dev
```

To deploy in Cloud:

```
serverless deploy
```

Endpoint:

```
ANY - https://ey7li2szf0.execute-api.us-east-1.amazonaws.com/dev
ANY - https://ey7li2szf0.execute-api.us-east-1.amazonaws.com/dev/{proxy+}
```

```
Auth Endpoint:

/auth/jwt/register
/auth/jwt/login
/auth/jwt/logout
/auth/jwt/me

body example:

{
"name": "foo bar",
"email": "foo@bar.com",
"password": "fooBar"
}

header token example:

x-access-token = fooBar123
```