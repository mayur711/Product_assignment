<!-- # Product_assignmentPROJECT ASSIGNMENT
PROBLEM STATEMENT: Create an AWS Lambda function using node.js that interacts with an Amazon RDS MySQL database to perform basic operations. This involves inserting and retrieving records from a database table. Take suitable assumptions.
Description:  This project is developed using serverless framework in Node.js along with AWS and MySQL. In this project we are maintaining a database to store product details which are available in a shop. On that we are performing various CRUD Operations like product registration, product details update, getting all products data, getting particular product data and removing any product from database. 
1.	Pre-Requisite to run this Project:
a.	Install Node version 20.17.0 (https://nodejs.org/en/download/prebuilt-installer)
b.	Install NPM 10.8.2 (gets automatically installed with Node, but if not then need to install manually)
c.	Install serverless using command npm i -g serverless@3.38.0 in cmd.
d.	Install AWS CLI (https://awscli.amazonaws.com/AWSCLIV2.msi)

2.	Project Configuration Setup
a.	Login to AWS console and get your access key and secret key for CLI.
b.	Use aws configure command to configure aws key in your system. 
c.	Once done, open the code in Visual Studio editor and run command npm i
This will install required packages/dependencies into node_modules folder as mentioned in package.json file. 
d.	We need to create a RDS instance, so in AWS RDS console create a DB instance and configure as below:
i.	Engine type; MySQL
ii.	DB cluster identifier: product
iii.	Templates: Free tier
iv.	Master username: admin
v.	Master password: Password123
vi.	DB Instance class: db.t3.micro
vii.	VPC: default
viii.	Subnet: default
e.	Switch to MySQL Workbench and establish new connection using above configured data such as hostname, username, password and port number. 
f.	Once connection established, create a new schema in MySQL workbench and name it as product.
g.	For storing DB connection parameters, we are using AWS Parameter Store.
So, in paramstore, create below parameters and store their values against given key below:


	/dev/dbName : product
	/dev/dbHost : product.c7e3.us-west-2.rds.amazonaws.com(please change this according to your instance)
	/dev/dbPassword : Password123
	/dev/dbPort :3306
	/dev/dbUser :admin

3.	Steps to Run the Project 
a.	In Visual Studio Code terminal run command `serverless deploy` which will deploy our project to AWS and return us the endpoints to test. 
b.	Once deployed, you will get endpoints similar as below: 
i.	POST - https://5jh78xpcfd.execute-api.us-west-2.amazonaws.com/dev/products
ii.	GET - https://5jh78xpcfd.execute-api.us-west-2.amazonaws.com/dev/products
iii.	GET - https://5jh78xpcfd.execute-api.us-west-2.amazonaws.com/dev/products/{productId}
iv.	DELETE - https://5jh78xpcfd.execute-api.us-west-2.amazonaws.com/dev/products/{productId}
v.	PUT - https://5jh78xpcfd.execute-api.us-west-2.amazonaws.com/dev/products
c.	If you don’t want to do whole setup and deploy the project, you can use above endpoints and test the API’s which stands against each lambda function. 

4.	Project Flow 
a.	Execution starts from the serverless.yml file
b.	Each lambda defined under functions in serverless.yml file is calling a handler file which is stored inside handler folder.
c.	Inside handle, have applied validation over incoming data. If any validation fails, it will return error with specific message. 
d.	If no error, it will call service file from where it will call repository file and perform the required operations and return the results. 
e.	Under response folder, have response.js file which helps to build all responses: either success or failure with status code
f.	For validation, have used AJV validator which is validating incoming data against the stored schema. Code is stored under validator folder. 

5.	Steps to test each endpoint: 
Open postman application and follow the below steps for testing API’s
i.	GET - https://5jh78xpcfd.execute-api.us-west-2.amazonaws.com/dev/products
This API gives list of all the products which are stored in Database

ii.	GET - https://5jh78xpcfd.execute-api.us-west-2.amazonaws.com/dev/products/{productId}
This will get product details by Product ID (Enter productId as 1 or 2 or 3 or 4 or 5)

iii.	POST - https://5jh78xpcfd.execute-api.us-west-2.amazonaws.com/dev/products
This API is used to register new product in our database whose payload will be : 
{
      "productName": "Watch",
      "productPrice": 500,
      "productColor": "White",
      "productType": "Plastic",
      "productDescription": "Digital Watch"
 }

iv.	PUT - https://5jh78xpcfd.execute-api.us-west-2.amazonaws.com/dev/products
This will help to update any product details and its payload will be:
{
      "productId": 5,
      "productName": "Watch",
      "productPrice": 500,
      "productColor": "White",
      "productType": "Plastic",
      "productDescription": "Digital Watch"
 }
v.	DELETE - https://5jh78xpcfd.execute-api.us-west-2.amazonaws.com/dev/products/{productId}
This will remove the product by productid from database (Enter productId as 1 or 2 or 3 or 4 or 5)

6.	Database screenshot for your reference. 
 
 -->
