function lowerCaseDrivers(drivers) {
    return drivers.map(function (driver) { return driver.toLowerCase(); });
};

function nameToAttributes(drivers) {
    return drivers.map(function (driver) { 
        let names = driver.split(" ")
        let newDriver = {}
        newDriver.firstName = names[0]
        newDriver.lastName = names[1]
        return newDriver
    });
};

function attributesToPhrase(drivers) {
    return drivers.map(function (driver) {
        return `${driver.name} is from ${driver.hometown}`
    });
};