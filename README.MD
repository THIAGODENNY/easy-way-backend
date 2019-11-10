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


