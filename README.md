Student form Assignment

![image](https://github.com/rohitchourey0809/yellow-owl-frontend/assets/97465195/067d3886-8a39-4c71-ba04-91998753ae05)


## API Reference

#### Get all items

```http
  GET /students
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /students/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |



Takes two numbers and returns the sum.


## API Reference

#### Get all items

```http
  POST /students
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  POST /students/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## API Reference

#### PUT all items

```http
  PUT /students
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### DELETE item

```http
  DELETE /students/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### SEARCH item

```http
  /search?name=Rohit Chourey&sortField=&sortOrder=desc&page=1&limit=10
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |




for frontend ``` npm start ```

for backend ``` npm run dev ```

Frontend repo
https://github.com/rohitchourey0809/yellow-owl-registrationform

backend repo
https://github.com/rohitchourey0809/Backend-yellow-owl
