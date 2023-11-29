const mysql = require('mysql');

const con = mysql.createConnection({
    database: "yourlicenses",
    host: "localhost",
    user: "root",
    password: ""
});

function query(query, callback = function(){}){
  try {
    con.connect(function(err) {
      
      con.query(query, function (err, result) {
        console.log(!err ? "Query Successful: " + query : "Error: " + err);
        //console.log(result);

        !err ? callback(result, true) : callback(err, false);
      });
    });
  } catch (error) {
    console.error('Error:', error.message);
    return callback(null, false);
  }
}

function closeconnection(){
  con.end();
}

function insertAccount(account, callback = function(){}){
  if (account instanceof Account) {
    query(`INSERT INTO account (firstName, lastName, email, address, postalCode, password, provider, authenticationCode) VALUES (\"${account.firstName}\", \"${account.lastName}\", \"${account.email}\", \"${account.address}\", \"${account.postalCode}\", \"${account.password}\", ${account.provider ? 1 : 0}, \"${account.authenticationCode}\");`);
    callback(null, true);
  } else {
    console.error('Invalid account object');
    callback(null, false);
  }
};

function insertLicense(license, callback = function(){}) {
  if (license instanceof License) {
    query(`INSERT INTO license (softwareID, clientOwnerID, serialNum, expiryDate, enabled) VALUES (${license.softwareID}, ${license.clientOwnerID}, ${license.serialNum ? "\"" + license.serialNum + "\"" : "NULL"}, ${license.expiryDate ? "DATE(\"" + license.expiryDate + "\")" : 'CURRENT_DATE() + 30'}, ${license.enabled});`);
    callback(null, true);
  } else {
    console.error('Invalid license object');
    callback(null, false);
  }
};

function insertSoftware(software, callback = function(){}) {
  if (software instanceof Software) {
    query(`INSERT INTO software (ownerID, name, genre, description, numDownloads, price, imageLink, imgLinkPr1, imgLinkPr2) VALUES (${software.ownerID}, \"${software.name}\", \"${software.genre}\", \"${software.description}\", ${software.numDownloads}, ${software.price}, \"${software.imageLink}\", "${software.imgLinkPr1}", "${software.imgLinkPr2}");`);
    callback(null, true);
  } else {
    console.error('Invalid software object');
    callback(null, false);
  }
};

function alterAccount(account, callback = function(){}){
  if (account instanceof Account) {
    query(`UPDATE account SET firstName = \"${account.firstName}\", lastName = \"${account.lastName}\", email = \"${account.email}\", address = \"${account.address}\", postalCode = \"${account.postalCode}\", password = \"${account.password}\", provider = ${account.provider ? 1 : 0}, authenticationCode = \"${account.authenticationCode}\" WHERE accountID = ${account.accountID}`);
    callback(null, true);
  } else {
    console.error('Invalid account object');
    callback(null, false);
  }
};

function alterLicense(license, callback = function(){}) {
  if (license instanceof License) {
    query(`UPDATE license SET serialNum = ${license.serialNum ? "\"" + license.serialNum + "\"" : "NULL"}, expiryDate = ${license.expiryDate ? "DATE(\"" + license.expiryDate + "\")" : 'CURRENT_DATE() + 30'}, enabled = ${license.enabled} WHERE licenseID = ${license.licenseID}`);
    callback(null, true);
  } else {
    console.error('Invalid license object');
    callback(null, false);
  }
};

function alterSoftware(software, callback = function(){}) {
  if (software instanceof Software) {
    query(`UPDATE software SET name = "${software.name}", genre = "${software.genre}", description = "${software.description}", numDownloads = ${software.numDownloads}, price = ${software.price}, imageLink = "${software.imageLink}", imgLinkPr1 = "${software.imgLinkPr1}", imgLinkPr2 = "${software.imgLinkPr2}" WHERE softwareID = ${software.softwareID}`);
    callback(null, true);
  } else {
    console.error('Invalid software object');
    callback(null, false);
  }
};

function getAccountById(accountId, callback = function(){}) {
  query(`SELECT * FROM account WHERE accountID = ${accountId}`, function(result, success) {
    if (success) {
      const account = result.length > 0 ? new Account(result[0].firstName, result[0].lastName, result[0].email, result[0].address, result[0].postalCode, result[0].password, result[0].provider, result[0].accountID, result[0].authenticationCode) : null;
      callback(account, true);
    } else {
      callback(null, false);
    }
  });
}

function getLicenseById(licenseId, callback = function(){}) {
  query(`SELECT * FROM license WHERE licenseID = ${licenseId}`, function(result, success) {
    if (success) {
      const license = result.length > 0 ? new License(result[0].softwareID, result[0].clientOwnerID, result[0].serialNum, result[0].enabled, result[0].expiryDate, result[0].purchaseDate, result[0].licenseID) : null;
      callback(license, true);
    } else {
      callback(null, false);
    }
  });
}

function getSoftwareById(softwareId, callback = function(){}) {
  query(`SELECT * FROM software WHERE softwareID = ${softwareId}`, function(result, success) {
    if (success) {
      const software = result.length > 0 ? new Software(result[0].ownerID, result[0].name, result[0].genre, result[0].description, result[0].numDownloads, result[0].price, result[0].imageLink, result[0].softwareID) : null;
      callback(software, true);
    } else {
      callback(null, false);
    }
  });
}

function getLicensesFromSoftwareId(softwareId, callback = function(){}) {
  query(`SELECT * FROM license WHERE softwareID = ${softwareId}`, function(result, success) {
    if (success) {
      const licenses = result.length > 0 ? result.map(licenseData => new License(licenseData.softwareID, licenseData.clientOwnerID, licenseData.serialNum, licenseData.enabled, licenseData.expiryDate, licenseData.purchaseDate, licenseData.licenseID)) : null;
      callback(licenses, true);
    } else {
      callback(null, false);
    }
  });
}

function getSoftwaresFromOwnerId(ownerId, callback = function(){}) {
  query(`SELECT * FROM software WHERE ownerID = ${ownerId}`, function(result, success) {
    if (success) {
      const softwares = result.length > 0 ? result.map(softwareData => new Software(softwareData.ownerID, softwareData.name, softwareData.genre, softwareData.description, softwareData.numDownloads, softwareData.price, softwareData.imageLink, softwareData.softwareID)) : null;
      callback(softwares, true);
    } else {
      callback(null, false);
    }
  });
}

function getLicensesFromClientId(clientId, callback = function(){}) {
  query(`SELECT * FROM license WHERE clientOwnerID = ${clientId}`, function(result, success) {
    if (success) {
      const licenses = result.length > 0 ? result.map(licenseData => new License(licenseData.softwareID, licenseData.clientOwnerID, licenseData.serialNum, licenseData.enabled, licenseData.expiryDate, licenseData.purchaseDate, licenseData.licenseID)) : null;
      callback(licenses, true);
    } else {
      callback(null, false);
    }
  });
}

function getAccountFromEmail(email, callback = function(){}) {
  query(`SELECT * FROM account WHERE email = "${email}"`, function(result, success) {
    if (success) {
      const account = result.length > 0 ? new Account(result[0].firstName, result[0].lastName, result[0].email, result[0].address, result[0].postalCode, result[0].password, result[0].provider, result[0].accountID, result[0].authenticationCode) : null;
      callback(account, true);
    } else {
      callback(null, false);
    }
  });
}

function getTopDownloadedSoftware(callback = function(){}) {
  const qury = 'SELECT * FROM software ORDER BY numDownloads DESC LIMIT 9';

  query(qury, function(result, success) {
    if (success) {
      const softwareList = result.length > 0 ? result.map(softwareData => new Software(softwareData.ownerID, softwareData.name, softwareData.genre, softwareData.description, softwareData.numDownloads, softwareData.price, softwareData.imageLink, softwareData.imgLinkPr1, softwareData.imgLinkPr2, softwareData.softwareID)) : null;
      callback(softwareList, true);
    } else {
      callback(null, false);
    }
  });
}

function disableLicenseByLicenseId(licenseId) {
  query(`UPDATE license SET enabled = false WHERE licenseID = ${licenseId}`);
}

function enableLicenseByLicenseId(licenseId) {
  query(`UPDATE license SET enabled = true WHERE licenseID = ${licenseId}`);
}

function getSoftwareList(pageNumber, itemsPerPage, genre = null, searchQuery = null, callback = function() {}) {
  let queryBase = `SELECT * FROM software`;
  let countQueryBase = `SELECT COUNT(*) as totalCount FROM software`;

  // Add genre and search conditions if provided
  let conditions = [];

  if (genre !== null && genre !== "null") {
    conditions.push(`genre = "${genre}"`);
  }

  if (searchQuery !== null && searchQuery.trim() !== "") {
    conditions.push(`(name LIKE "%${searchQuery}%" OR description LIKE "%${searchQuery}%")`);
  }

  if (conditions.length > 0) {
    const whereClause = conditions.join(" AND ");
    queryBase += ` WHERE ${whereClause}`;
    countQueryBase += ` WHERE ${whereClause}`;
  }

  // Add pagination conditions
  const offset = (pageNumber - 1) * itemsPerPage;
  queryBase += ` LIMIT ${itemsPerPage} OFFSET ${offset}`;

  query(queryBase, function(result, success) {
    if (success) {
      // Fetch count for the specified conditions
      query(countQueryBase, function(countResult, countSuccess) {
        if (countSuccess) {
          const softwareList = result.length > 0 ? result.map(softwareData => new Software(softwareData.ownerID, softwareData.name, softwareData.genre, softwareData.description, softwareData.numDownloads, softwareData.price, softwareData.imageLink, softwareData.imgLinkPr1, softwareData.imgLinkPr2, softwareData.softwareID)) : null;
          const totalCount = countResult[0].totalCount;
          const totalPages = Math.ceil(totalCount / itemsPerPage);
          //console.log(softwareList);
          callback({ softwareList, totalPages }, true);
        } else {
          callback(null, false);
        }
      });
    } else {
      callback(null, false);
    }
  });
}

function getAccounts(callback = function(){}){
  query(`SELECT * FROM account;`, function(result, success) {
    if (success) {
      const accountList = result.length > 0 ? result.map(accountData => new Account(accountData.firstName, accountData.lastName, accountData.email, accountData.address, accountData.postalCode, accountData.password, accountData.provider, accountData.accountID, accountData.authenticationCode)) : null;
      callback(accountList, true);
    } else {
      callback(null, false);
    }
  });
}



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
  constructor(ownerID, name, genre, description, numDownloads, price, imageLink = null, imgLinkPr1 = null, imgLinkPr2 = null, softwareID = 0) {
    this.softwareID = softwareID;
    this.ownerID = ownerID;
    this.name = name;
    this.genre = genre;
    this.description = description;
    this.numDownloads = numDownloads;
    this.price = price;
    this.imageLink = imageLink;
    this.imgLinkPr1 = imgLinkPr1;
    this.imgLinkPr2 = imgLinkPr2;
  }
}

module.exports = {Account, License, Software, insertAccount, insertLicense, insertSoftware, alterAccount, alterLicense, alterSoftware, query, getAccountById, getLicenseById, getSoftwareById, getLicensesFromSoftwareId, getSoftwaresFromOwnerId, getLicensesFromClientId, getAccountFromEmail, disableLicenseByLicenseId, enableLicenseByLicenseId, getSoftwareList, getAccounts, closeconnection, getTopDownloadedSoftware};