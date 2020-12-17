# resource_website_backend

This is a backend for IIITDMJ's unofficial resource website
We use mongodb for DBMS and multiple validation schema and techniques for authentication

The frontend could be found [here](https://github.com/MananJethwani/resource_website_frontend)

## Installation

Installation requires npm and mogodb (mogodb must be run using mongo daemon)

after cloning into repo enter the repo using

``` bash
cd resource_website_backend
```

then just type command

```bash
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

## Contribution

currently it is a small repository so there are no significant rules for ontribution
first timers can go checkout good first issue label in issues section

after selecting an issue just comment on it so that one of our maintainer can assign that issue to you if available.
make a PR and mention the maintainer to review your changes once reviewed your code will be merged

## Thanks for selecting this repo. We need you!
