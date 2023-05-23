

## Practitioner Profile Management

The project is a web application designed to facilitate practitioner profile management. Users can log in to the application and perform various operations such as adding, editing, or deleting practitioner profiles. Additionally, they can mark practitioners as ICU specialists and view a comprehensive list of practitioners, including their relevant information.


## API Reference

#### Authentication
The API endpoints require authentication using token-based authentication. To authenticate, include the token in the request headers as follows:

```http
  Authorization: <token>
```

#### User Signup

```http
  POST /signup
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email ` | `string` | **Required**. Email |
| `password ` | `string` | **Required**. Password |

#### User Signin

```http
  POST /signin
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email ` | `string` | **Required**. Email |
| `password ` | `string` | **Required**. Password |

#### Get All Practitioners

```http
  GET /practitioner
```

#### Add New Practitioner

```http
  POST /practitioner
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `fullName ` | `string` | **Required**. Full Name |
| `email ` | `string` | **Required**. Email |
| `contact ` | `string` | **Required**. Contact |
| `dob ` | `date` | **Required**. Date Of Birth |
| `workingDays ` | `string` | **Required**. Working Days |
| `startTime ` | `date` | **Required**. Start Time |
| `endTime ` | `date` | **Required**. End Time |
| `address ` | `string` | address |
| `city ` | `string` | city |
| `gender ` | `string` | gender |
| `zipcode ` | `number` | zipcode |
| `status ` | `string` | status |
| `isICUSpecialist ` | `boolean` | Is ICU Specialist |
| `userImg ` | `string` | userImg |
| `allergies ` | `string` | allergies |

#### Update Practitioner

```http
  PUT /practitioner/{practitioner_id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `fullName ` | `string` | **Required**. Full Name |
| `email ` | `string` | **Required**. Email |
| `contact ` | `string` | **Required**. Contact |
| `dob ` | `date` | **Required**. Date Of Birth |
| `workingDays ` | `string` | **Required**. Working Days |
| `startTime ` | `date` | **Required**. Start Time |
| `endTime ` | `date` | **Required**. End Time |
| `address ` | `string` | address |
| `city ` | `string` | city |
| `gender ` | `string` | gender |
| `zipcode ` | `number` | zipcode |
| `status ` | `string` | status |
| `isICUSpecialist ` | `boolean` | Is ICU Specialist |
| `userImg ` | `string` | userImg |
| `allergies ` | `string` | allergies |

#### Delete Practitioner

```http
  DELETE /practitioner/{practitioner_id}
```

## Setup Process

1. Clone the repository from [[repository URL]](https://github.com/bibekmaharjan/practitioner-profile-backend.git).
2. Navigate to the backend directory: **`cd /practitioner-profile-backend`**.
3. Install the dependencies: **`npm install`**.
4. Set up the MySQL database and configure the connection details in the backend code.
5. Set up the Cloudinary account and obtain the required credentials.
6. Configure the Cloudinary credentials in the backend code.
7. Start the backend server: **`npm start`**.