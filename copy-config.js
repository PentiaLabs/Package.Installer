var gulp = require("gulp")
var path = require("path");
var fs = require("fs");
var cwd = require("cwd");

var node_module_RootPath = path.dirname(fs.realpathSync(__filename))
var node_solution_config = path.join(node_module_RootPath, "/solution-config.json");
var node_solution_packages = path.join(node_module_RootPath, "/solution-packages.json");

gulp.src([node_solution_config, node_solution_packages]).pipe(gulp.dest("../../", { overwrite: false }))