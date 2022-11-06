# Blog AApp 
This is an api for a blogging  app

---

## Requirements
1. User should be able to register 
2. User should be able to login with Passport using JWT
3. Implement basic auth
4. User should be able to get blogs
5. Users should be able to create blog
6. Users should be able to update and delete blog
7. Test application
---
## Setup
- Install NodeJS, mongodb
- pull this repo
-

---
## Base URL



### User
| field  |  data_type | constraints  |
|---|---|---|
|  id |  string |  required |
|  username |  string |  required |
|  firstname | string  |  optional|
|  lastname  |  string |  optional  |
|  email     | string  |  optional |
|  password |   string |  required  |
|  state  |  string |  required, default: draft, enum: ['draft ', 'publish'] |  
| read_count | reading_time 






### Signup User

- Route: /signup
- Method: POST
- Body: 
```
{
  "email": "anikiyusuf@gmail.com",
  "password": "654321",
  "firstname": "Yusuf",
  "lastname": "Aniki ",
  "username": 'bhad chef",
}
```

- Responses

Success
```
{
    message: 'Signup successful',
    user: {
          "email": "anikiyusuf@gmail.com",
          "password": "654321",
          "firstname": "Yusuf",
           "lastname": "Aniki ",
            "username": 'bhad chef",
    }
}
```
---
### Login User

- Route: /login
- Method: POST
- Body: 
```
{
  "password": "654321",
  "username": 'jbhad chef ",
}
```

- Responses

Success
```
{
    message: 'Login successful',
    token: 'sjlkafjkldsfjsd'
}
```

---
### Create blog

- Route: /orders
- Method: POST
- Header
    - Authorization: secret {token}
- Body: 
```

```

- Responses

Success
```
{
     author:'Jack Hallow',
     title:'Churchill down',
     state: 'draft',
     read_count: 0,
     read_Time:'',
}
```
---
### Get Order

- Route: /orders/:id
- Method: GET
- Header
    - Authorization: Bearer {token}
- Responses

Success
```
{
    author:'Jack Hallow',
    title:'Churchill down',
    state: 'draft',
    read_count: 0,
    read_Time:'',
}
```
---

### Get Orders

- Route: /orders
- Method: GET
- Header:
    - Authorization: Bearer {token}
- Query params: 
    - page (default: 1)
    - per_page (default: 10)
    - order_by (default: created_at)
    - order (options: asc | desc, default: desc)
    - state
    - created_at
- Responses

Success
```
{
    state: 1,
    total_price: 900,
    created_at: Mon Oct 31 2022 08:35:00 GMT+0100,
    items: [{ name: 'chicken pizza', price: 900, size: 'm', quantity: 1}]
}
```
---

...

## Contributor
- Aniki Yusuf 