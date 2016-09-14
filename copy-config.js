var gulp = require("gulp")
var path = require("path");
var fs = require("fs");
var cwd = require("cwd");
var fileExists = require("file-exists");

var node_module_RootPath = path.dirname(fs.realpathSync(__filename))
var node_solution_config = path.join(node_module_RootPath, "/solution-config.json");
var node_solution_packages = path.join(node_module_RootPath, "/solution-packages.json");

var dest_solution_packages = path.join(node_module_RootPath, "../../solution-packages.json")
var dest_solution_config = path.join(node_module_RootPath, "../../solution-config.json")

if(!fileExists(dest_solution_config))
{
    gulp.src(node_solution_config).pipe(gulp.dest("../.."))
}

if(!fileExists(dest_solution_packages))
{
    gulp.src(node_solution_packages).pipe(gulp.dest("../.."))
}