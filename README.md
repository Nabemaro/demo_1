# Nutrious.io
### Members: Ugochukwu Anuta, Qingyun 'Wynn' He, Lennon Jones, Alex Mao, Ben 'J' Qiu, Toshi Watanabe, Tianqi Yang


### Setup MongoDB
Install home-brew and paste that in a macOS Terminal or Linux shell prompt:

``````
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
``````
``````
brew tap mongodb/brew
``````
``````
brew update
``````
``````
brew install mongodb-community@6.0
``````
``````
brew services start mongodb-community@6.0
``````

Please refer this website if you're using Windows: https://medium.com/@LondonAppBrewery/how-to-download-install-mongodb-on-windows-4ee4b3493514

-------------------------------------------------------------------------------------

Connect to our project database please paste it to your terminal:

``````
mongosh "mongodb+srv://mycluster.s7bglaq.mongodb.net/user" --apiVersion 1 --username nutriousio
``````


-------------------------------------------------------------------------------------

Download Mongo Compress server:
https://www.mongodb.com/try/download/compass

``````
Paste URL: mongodb+srv://nutriousio:cscs@mycluster.s7bglaq.mongodb.net/test
``````

-------------------------------------------------------------------------------------
Install pymongo to upload data to MongoDB from python

``````
pip install pymongo
``````
=======
## To run the Nutrios.io web app
### Use the following script to install necessary packages
```bash
npm i
```
### To deploy the app, run
```bash
npm start
```


### Flask Setup:

``````
pip install --upgrade -r requirements.txt
``````

We'll figure out versions later.
=======

