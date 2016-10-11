# Sitecore-package-manager
This package helps with handling run time dependecies in Sitecore, by getting them from a NuGet feed.

The package requires WMF 5.1 this is built in, in windows 10 Anniversary edition. 
For earlier editions of windows use the link below:
https://www.microsoft.com/en-us/download/details.aspx?id=53347

## Creating a package 
In order to create a package the nuget package must contains two folders; one called website, and one called data.
In order to help you create the package, there is a yeoman generator. 
https://github.com/PentiaLabs/generator-sc-package

## configuration files
### solution-config.json:
Contains the environment specific paths for the packages to be installed to

- **configs**: is a array of the build configurations and their settings
- **name**:is the name of the configuration, this should match the name of the build configuration in visual studio
- **websiteRoot**: the path to root of the website - this is where the website folder of the package will be copied to
- **websiteDataRoot**: the path to the root of the data folder for the website - this is where the data folder of the nuget package will be copied to


### solution-packages.json:
Contains the list of packages nessecary for the solution to run.

> All packages needs to be a NuGet Package.
The nuget package needs to have two folders inside it, one called data and one called website. 
The data folder will be copied to the path in the solution-config.json setting called websiteDataRoot
The website folder will be copied to the path in the solution-config.json setting called websiteRoot

- **packageName**: Name of the nuget package in the feed

- **version**: the specific version of the package to be installed

- **location**: the location where the file is located, can be a file share, or http feed.