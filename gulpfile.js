/*jslint node: true */
"use strict";

var gulp = require("gulp");
var nopt = require("nopt");
var path = require("path");
var requireDir = require("require-dir");
var build = require("./build.js");
var powershell = require("./modules/powershell");
var tasks = path.join(__dirname, "gulp-tasks");
var tasks = requireDir(tasks);

var args = nopt({
  "env"     : [String, null]
});

build.setEnvironment(args.env);

gulp.task("install-packages", function (callback) {
  this.logEvent("builder", "Installing packages");
  var psFile = path.join(path.dirname(fs.realpathSync(__filename)), "../powershell-scripts/Install-packages.ps1");
  var packagesConfig = path.join(path.dirname(fs.realpathSync(__filename)), "../solution-packages.json");
  powershell.runAsync(psFile, " -packagesFileLocation '" + packagesConfig + "'" + " -webRootPath " + config.websiteRoot + " -dataRootPath " + config.websiteDataRoot, callback);
});

gulp.task("default", function () {
	console.log("You need to specifiy a task.");
});

