const mysql = require('mysql');

const con = mysql.createConnection({
    database: "yourlicenses",
    host: "localhost",
    user: "root",
    password: ""
});

function query(query){
  try {
    con.connect(function(err) {
      con.query(query, function (err, result) {
        console.log(!err ? "Query Successful: " + query : "Error: " + err);
        console.log(result);
        return !err ? result : null;
      });
    });
  } catch (error) {
    console.error('Error:', error.message);
    return null;
  }
}

function insertAccount(account){
  if (account instanceof Account) {
    query(`INSERT INTO account (firstName, lastName, email, address, postalCode, password, provider, authenticationCode) VALUES (\"${account.firstName}\", \"${account.lastName}\", \"${account.email}\", \"${account.address}\", \"${account.postalCode}\", \"${account.password}\", ${account.provider ? 1 : 0}, \"${account.authenticationCode}\");`);
  } else {
    console.error('Invalid account object');
  }
};

function insertLicense(license) {
  if (license instanceof License) {
    query(`INSERT INTO license (softwareID, clientOwnerID, serialNum, expiryDate, enabled) VALUES (${license.softwareID}, ${license.clientOwnerID}, ${license.serialNum ? "\"" + license.serialNum + "\"" : "NULL"}, ${license.expiryDate ? "DATE(\"" + license.expiryDate + "\")" : 'CURRENT_DATE() + 30'}, ${license.enabled});`);
  } else {
    console.error('Invalid license object');
  }
};

function insertSoftware(software) {
  if (software instanceof Software) {
    query(`INSERT INTO software (ownerID, name, genre, description, numDownloads, price, imageLink) VALUES (${software.ownerID}, \"${software.name}\", \"${software.genre}\", \"${software.description}\", ${software.numDownloads}, ${software.price}, \"${software.imageLink}\");`);
  } else {
    console.error('Invalid license object');
  }
};

function alterAccount(account){
  if (account instanceof Account) {
    query(`UPDATE account SET firstName = \"${account.firstName}\", lastName = \"${account.lastName}\", email = \"${account.email}\", address = \"${account.address}\", postalCode = \"${account.postalCode}\", password = \"${account.password}\", provider = ${account.provider ? 1 : 0}, authenticationCode = \"${account.authenticationCode}\" WHERE accountID = ${account.accountID}`);
  } else {
    console.error('Invalid account object');
  }
};

function alterLicense(license) {
  if (license instanceof License) {
    query(`UPDATE license SET serialNum = ${license.serialNum ? "\"" + license.serialNum + "\"" : "NULL"}, expiryDate = ${license.expiryDate ? "DATE(\"" + license.expiryDate + "\")" : 'CURRENT_DATE() + 30'}, enabled = ${license.enabled} WHERE licenseID = ${license.licenseID}`);
  } else {
    console.error('Invalid license object');
  }
};

function alterSoftware(software) {
  if (software instanceof Software) {
    query(`UPDATE software SET name = "${software.name}", genre = "${software.genre}", description = "${software.description}", numDownloads = ${software.numDownloads}, price = ${software.price}, imageLink = "${software.imageLink}" WHERE softwareID = ${software.softwareID}`);
  } else {
    console.error('Invalid software object');
  }
};

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
    constructor(softwareID, clientOwnerID, serialNum, enabled = true, expiryDate = null, purchaseDate = null, licenseID = 0) {
      this.licenseID = licenseID;
      this.softwareID = softwareID;
      this.clientOwnerID = clientOwnerID;
      this.serialNum = serialNum;
      this.enabled = enabled;

      //YYYY-MM-DD
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

module.exports = {Account, License, Software, insertAccount, insertLicense, insertSoftware, alterAccount, alterLicense, alterSoftware, query};