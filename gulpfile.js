/*jslint node: true */
"use strict";

var gulp = require("gulp");
var nopt = require("nopt");
var path = require("path");
var requireDir = require("require-dir");
var build = require("./build.js");
var powershell = require("./modules/powershell");
var fs = require("fs");

var args = nopt({
  "env"     : [String, null]
});

build.setEnvironment(args.env);

gulp.task("install-packages", function (callback) {
  build.logEvent("builder", "Installing packages");
  var psFile = path.join(path.dirname(fs.realpathSync(__filename)), "/powershell-scripts/Install-packages.ps1");
  var packagesConfig = path.join(process.cwd(), "/solution-packages.json");

  var websiteRoot = build.config.websiteRoot;
  var websiteDataRoot = build.config.websiteDataRoot;

  if(!path.isAbsolute(websiteRoot))
  {
    websiteRoot = path.join(process.cwd(),websiteRoot);
  }

  if(!path.isAbsolute(websiteDataRoot))
  {
    websiteDataRoot = path.join(process.cwd(),websiteDataRoot);
  }

  powershell.runAsync(psFile, " -packagesFileLocation '" + packagesConfig + "'" + " -webRootPath " + websiteRoot + " -dataRootPath " + websiteDataRoot, callback);
});

gulp.task("default", function () {
	console.log("You need to specifiy a task.");
});