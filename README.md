<h1 align = center>RESOURCE WEBSITE</h1>
A website for all college related resources from notes to question papers under one roof

# resource_website_backend

The backend of this website uses nodejs and express.
We use mongodb for DBMS and multiple validation schema and techniques for authentication

## Installation

Installation requires npm and mogodb (mogodb must be run using mongo daemon)

after cloning into repo enter the repo using

``` bash
cd resource_website
```

then just type command

```bash
cd backend
npm install
```
 this command will automatically install all the JS related requirements for server
 
You also need to have mongodb installed in your system
for that you can just go to [mongodb's official site](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/) and follow the instruction

after that just use command
```bash
sudo mongod
```
in another terminal again go to the resource_website_backend folder and just type command
```bash
export iiit_jwtPrivateKey=<Private key value>
node index.js
```
to start your server at https://3001/api

# resource_website_backend

we use reactjs for frontend
for frontend to run you need backend first as given above.

here is a look at our current progress and design for this site.
If you have any suggestion on improvement feel free to open an issue.

![res_web_frontend](https://user-images.githubusercontent.com/50267986/95130292-f9e67780-0779-11eb-932e-d77ea9b093e1.jpeg)

## Built Using
- <img src="src/logo.svg" width="25">[React](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com/)

## Installation

for installation it's pretty simple after initialising the serve,
just open another terminal window and clone and enter the repo.

after that type command

```bash
cd frontend
npm install
```
to download all the dependencies.

then to start the frontend server just type

```bash
npm start
```
to start our react app.

feel free to ask if you have doubt on bitbyte's official discord server or open an issue.

## Contribution

currently it is a small repository so there are no significant rules for ontribution
first timers can go checkout good first issue label in issues section

after selecting an issue just comment on it so that one of our maintainer can assign that issue to you if available.
make a PR and mention the maintainer to review your changes once reviewed your code will be merged

## Thanks for selecting this repo. We need you!
