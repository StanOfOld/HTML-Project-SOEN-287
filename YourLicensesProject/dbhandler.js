const mysql = require('mysql');

const con = mysql.createConnection({
    database: "yourlicenses",
    host: "localhost",
    user: "root",
    password: ""
});

function insertAccount(account){

    if (account instanceof Account) {
        
        try {
          const query = `
            INSERT INTO account 
              (firstName, lastName, email, address, postalCode, password, provider, authenticationCode) 
            VALUES (\"${account.firstName}\", \"${account.lastName}\", \"${account.email}\", \"${account.address}\", \"${account.postalCode}\", \"${account.password}\", ${account.provider ? 1 : 0}, \"${account.authenticationCode}\");
          `;
    
          con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
            con.query(query, function (err, result) {
              if (err) throw err;
              console.log("1 record inserted into account");
            });
          });
        } catch (error) {
          console.error('Error adding account to the database:', error.message);
        }
      } else {
        console.error('Invalid account object');
      }
}

function insertLicense(license) {};

function insertSoftware(license) {};

function selectQuery(query) {return null;};

class Account {
    constructor(firstName, lastName, email, address, postalCode, password, provider = false, accountID = 0, authenticationCode = null) {
      this.accountID = accountID;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.address = address;
      this.postalCode = postalCode;
      this.password = password;
      this.provider = provider;
      this.authenticationCode = authenticationCode;
    }
}
  
class License {
    constructor(softwareID, clientOwnerID, serialNum, expiryDate = null, purchaseDate = null, licenseID = 0) {
      this.licenseID = licenseID;
      this.softwareID = softwareID;
      this.clientOwnerID = clientOwnerID;
      this.serialNum = serialNum;
      this.purchaseDate = purchaseDate;
      this.expiryDate = expiryDate;
    }
}
  
class Software {
    constructor(ownerID, name, genre, description, numDownloads, price, imageLink = null, softwareID = 0) {
      this.softwareID = softwareID;
      this.ownerID = ownerID;
      this.name = name;
      this.genre = genre;
      this.description = description;
      this.numDownloads = numDownloads;
      this.price = price;
      this.imageLink = imageLink;
    }
}

module.exports = {Account, License, Software, insertAccount, insertLicense, insertSoftware, selectQuery};