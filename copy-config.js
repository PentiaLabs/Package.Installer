var gulp = require("gulp")
var path = require("path");
var fs = require("fs");
var cwd = require("cwd");

var node_module_RootPath = path.dirname(fs.realpathSync(__filename))
var node_solution_config = path.join(node_module_RootPath, "/solution-config.json");
var node_solution_packages = path.join(node_module_RootPath, "/solution-packages.json");

var dest_solution_packages = path.join(node_module_RootPath, "../../../solution-packages.json")
var dest_solution_config = path.join(node_module_RootPath, "../../../solution-config.json")

try {fs.accessSync(dest_solution_config, fs.F_OK);
    console.log("Solution-config.json found, not copying")
} catch (e) {
    gulp.src(node_solution_config).pipe(gulp.dest("../../.."))
}

try {fs.accessSync(dest_solution_packages, fs.F_OK);
    console.log("solution-packages.json found, not copying")
} catch (e) {
     gulp.src(node_solution_packages).pipe(gulp.dest("../../.."))
}