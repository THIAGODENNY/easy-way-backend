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

@get/hello (two-factor-auth here, request a key in @post/misc/email endpoint)
Header example:
    Content-Type = application/json
    x-access-token = fooBar123
    two-auth-key = 12345

Response:
    {
        message: "Hello World from Controller Test Evans with Tests"
    }

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
@post/auth/jwt/register (only patient profile allowed here)
@post/auth/jwt/login

body example:
    {
        "name": "foo bar",
        "email": "foo@bar.com",
        "password": "fooBar",
        "profile": "fooBar",
        "records": "fooBar",
        "cpf": "fooBar",
    }

header token example:
    Content-Type = application/json
    x-access-token = fooBar123

Response:
    {
        "auth": true,
        "token": "eyJabGciOiJIUzIdNfiIsnR5cCI6IkpXVCJ9.eyJpZCI6IjVkYzg0ZmJjNjFlYWZmMDAwNzA4N2NiMCIsImlhdCI6MTU3MzQwODcwMCwiZXhwIjoxNTczNDk1gdAwfQ.xwnmRMhLzoEvssK_-06bsnLLWiIIRepNNmPmSwlwO5o"
    }

```

```
Two-Factor request for key:

@post/misc/email

header token example:

Content-Type = application/json
x-access-token = fooBar123

Response:
    {
    "message": "Email sent to foobar@foorbar.com"
    }
```

```

Header of Endpoints with Two-Factor authentication:
    Content-Type = application/json
    x-access-token = fooBar123
    two-auth-key = 12345
```

```
Records Endpoint:

@get/api/record
return an arraylist of all records

@get/api/record/:id
get record by id

@post/api/record
post an record to the database

@put/api/record/:id
update an record by the json posted

body example:
{
  "status": "vivo",
  "patient": "57493234576",
  "cids": ["a30"],
  "schedules": ["5dbda8baf9fe3d126573b15b"],
  "symptoms": ["dor de cabeça", "tontura"],
  "diagnosis": "passa bem",
  "medicNotes": "tomar remedio de 2 em 2 horas",
  "prescription": ["rivotril"]
}

```