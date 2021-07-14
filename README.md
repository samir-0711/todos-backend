# todos-backend
![todos-backend](https://socialify.git.ci/samir-0711/todos-backend/image?forks=1&issues=1&language=1&owner=1&pulls=1&stargazers=1&theme=Dark)

Todo Application Backend APIs
# A. User APIs

## 1. sign-up

* **URL**

  `/api/v1/auth/sign-up`

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**

  **Required:**
 
   `username=[String]`
   
   `password=[String]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id : 6074fb9d7e8466001570e7db, username: "samir784", createdAt: "2021-03-19T19:29:33.231Z", updatedAt: "2021-03-19T19:29:33.231Z" }`
 
* **Error Response:**

  * **Code:** 409 Resource Already Exists <br />
    **Content:** `{ error : "Username already exist" }`

  OR

  * **Code:** 401 Missing Credentials <br />
    **Content:** `{ error : "Username or Password is Missing" }`

* **Sample Call:**

```javascript
    axios.post(
    "https://todo-samir.herokuapp.com/api/v1/auth/sign-up",
    {
      "username": "samir784",
      "password": "748547854"
    });
  ```
  
## 2. sign-in

* **URL**

  `/api/v1/auth/sign-in`

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**

  **Required:**
 
   `username=[String]`
   
   `password=[String]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id : 6074fb9d7e8466001570e7db, username: "samir784", createdAt: "2021-03-19T19:29:33.231Z", updatedAt: "2021-03-19T19:29:33.231Z" }`
 
* **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:** `{ error : "Invalid Username or Password!" }`

  OR

  * **Code:** 401 Missing Credentials <br />
    **Content:** `{ error : "Username or Password is Missing" }`

* **Sample Call:**

```javascript
    axios.post(
    "https://todo-samir.herokuapp.com/api/v1/auth/sign-in
    {
      "username": "samir784",
      "password": "748547854"
    });
  ```

# todos-frontend
![todos-frontend](https://socialify.git.ci/samir-0711/todos-frontend/image?forks=1&issues=1&language=1&owner=1&pulls=1&stargazers=1&theme=Dark)

## Basic structure of the project repository 📂

```terminal
|
|- public             # Any files within this directory will not be processed by Webpack but copied directly to the build folder.
|- src:               # Contains all source code for the React application.
    |
    |- components     # Contains all the components used within the app.
       |- Auth.js     # Responsible for handling SignIn & SignOut.
       |- Todos.js    # Responsible for handling todos.
    |- App.js
    |- index.js
```

## Screenshot
[Todo Frontend Repo](https://github.com/samir-0711/todos-frontend)

![image](https://user-images.githubusercontent.com/68433936/125142496-85d86600-e135-11eb-9101-5ef10a644439.png)
![image](https://user-images.githubusercontent.com/68433936/125142576-b3bdaa80-e135-11eb-9b9b-f3449c9a1771.png)

