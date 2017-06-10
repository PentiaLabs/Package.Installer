# Sitecore-package-manager
[![npm version](https://img.shields.io/npm/v/sitecore-package-manager.svg?style=flat-square)](http://npmjs.org/sitecore-package-manager)
[![npm downloads](https://img.shields.io/npm/dm/sitecore-package-manager.svg?style=flat-square)](http://npmjs.org/sitecore-package-manager)
[![Build Status](https://img.shields.io/appveyor/ci/Saturate/sitecore-package-manager.svg?style=flat-square)](https://ci.appveyor.com/project/Saturate/sitecore-package-manager)
[![Dependency Status](https://img.shields.io/david/PentiaLabs/Package.Installer.svg?style=flat-square)](https://david-dm.org/PentiaLabs/Package.Installer)
[![License](https://img.shields.io/npm/l/sitecore-package-manager.svg?style=flat-square)](https://github.com/PentiaLabs/Package.Installer/blob/master/LICENSE)


> The sitecore package manager

```shell
npm install sitecore-package-manager --save
```

## usage 
The module exports a gulp task called install-packages

import in gulpfile.js
```javascript
var package = require('@pentia/sitecore-package-manager')
```

use
```shell
gulp install-packages
```

**Note:** 
The package requires WMF 5.1 this is built in, in windows 10 Anniversary edition. 
For earlier editions of windows use the link below:
https://www.microsoft.com/en-us/download/details.aspx?id=53347


## configuration files
### solution-config.json
Contains the environment specific paths for the packages to be installed to

```
{
    "configs": [{ //is a array of the build configurations and their settings
        "name": "debug", //is the name of the configuration, this should match the name of the build configuration in visual studio
        "rootFolder": "C:\\websites\\pentia.boilerplate.local", 
        "websiteRoot": "C:\\websites\\pentia.boilerplate.local\\Website", //the path to root of the website - this is where the website folder of the package will be copied to
        "websiteDataRoot": "C:\\websites\\pentia.boilerplate.local\\Website\\Data" //the path to the root of the data folder for the website - this is where the data folder of the nuget package will be copied to
    }]
}
```

### solution-packages.json:
Contains the list of packages nessecary for the solution to run.

> All packages needs to be a NuGet Package.
The nuget package needs to have two folders inside it, one called data and one called website. 
The data folder will be copied to the path in the solution-config.json setting called websiteDataRoot
The website folder will be copied to the path in the solution-config.json setting called websiteRoot

```
{
    "credentials": "c:\\buildagent\\creds\\credentials.json", //needs to be set, this i used for having a file with credentials for the endpoints
    "packages": [{
        "packageName": "Sitecore.Full", //name of the package in the feed
        "version": "8.1.160519", //version of the package
        "location": "http://feedserver/nuget/feedname" //feed location, it is using nuget, so this can be a local folder or a http feed.
    }]
}
```

## Creating a package 
In order to create a package the nuget package must contains two folders; one called website, and one called data.
In order to help you create the package, there is a yeoman generator. 
https://github.com/PentiaLabs/generator-sc-package