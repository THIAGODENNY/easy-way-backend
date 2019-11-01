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

x-access-token = fooBar123
```
