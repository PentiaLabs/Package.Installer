var gulp = require("gulp")
var path = require("path");
var fs = require("fs");

var node_module_RootPath = path.dirname(fs.realpathSync(__filename))

var node_solution_config = path.join(node_module_RootPath, "/solution-config.json");
var node_solution_packages = path.join(node_module_RootPath, "/solution-packages.json");

gulp.src([node_solution_config, node_solution_packages]).dest(process.cwd(), { overwrite: false })