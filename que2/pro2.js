const os = require("os");

try {
    console.log("-------------------------------------------------");
    console.log("OS CPU ARCHITECTURE := " + os.arch());
    console.log("Free Memory of the System := " + os.freemem());
    console.log("Total Memory of the System := " + os.totalmem());
    console.log("User INFO = " + os.userInfo());
    console.log("-------------------------------------------------");

} catch (err) {
    console.log( err);
}