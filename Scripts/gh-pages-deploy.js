/* eslint-disable no-console */
const exc = require("execa");
const fs = require("fs");
(async () => {
    try {
        await exc("git", ["checkout", "--orphan", "gh-pages"]);
        // eslint-disable-next-line no-console
        console.log("Building started...");
        await exc("npm", ["run", "build"]);
        // Understand if it's dist or build folder
        const folderName = fs.existsSync("dist") ? "dist" : "build";
        await exc("git", ["--work-tree", folderName, "add", "--all"]);
        await exc("git", ["--work-tree", folderName, "commit", "-m", "gh-pages"]);
        console.log("Pushing to gh-pages...");
        await exc("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
        await exc("rm", ["-r", folderName]);
        await exc("git", ["checkout", "-f", "master"]);
        await exc("git", ["branch", "-D", "gh-pages"]);
        console.log("Successfully deployed, check your settings");
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e.message);
        process.exit(1);
    }
})();
