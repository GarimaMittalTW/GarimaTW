function printLinesToConsole(fileContent, numberOfLines) {
    let i = 0;
    let splitContent = fileContent.split("\n");
    while (i < numberOfLines && i < splitContent.length) {
        console.log(splitContent[i++]);
    }
}

function printCharToConsole(fileContent, numberOfBytes) {
    let i = 0;
    let charContent = '';
    let charContentString = fileContent.toString();
    while (i < numberOfBytes && i < charContentString.length) {
        charContent = charContent + charContentString[i++];
    }
    console.log(charContent);
}

function readFile(file) {
    let fs = require('fs');
    let fileContent;
    if (fs.existsSync("./" + file)) {
        fileContent = fs.readFileSync(file, 'utf8');
    }
    else {
        throw {
            message: "File do not exist in the current directory!"
        }
    }
    return fileContent;
}
function printFile(files, limit, nflag) {
    for (file of files) {
        console.log("==> ", file, " <==");
        let fileContent = readFile(file);
        if (nflag != null) {
            if (nFlag == 1) {
                printLinesToConsole(fileContent, limit);
            }
            else
                printCharToConsole(fileContent, limit);
        }
        else
            printLinesToConsole();

    }
}

//remove first two items as they are 1. node command 2. file path.

let parseargs = require('minimist')(process.argv.slice(2));
var files = parseargs._;
console.log(parseargs);
let nFlag = 1;
try {
    let numberOfLines = 10;
    let numberOfBytes = -1;
    if(parseargs.n != null && parseargs.c != null){
        console.log("head: can't combine line and byte counts");
    }
    else if (parseargs.n != null) {
        if (!isNaN(parseInt(parseargs.n))) {
            numberOfLines = parseargs.n;
            nFlag = 1;
            printFile(files, numberOfLines, nFlag);
        }
        else {
            throw {
                message: "head: illegal byte count -- "
            };
        }
    }

    else if (parseargs.c != null) {
        if (!isNaN(parseInt(parseargs.c))) {
            numberOfBytes = parseargs.c;
            nFlag = 0;
            printFile(files, numberOfBytes, nFlag);
        }
        else {
            throw {
                message: "head: illegal byte count -- "
            };
        }
    }
    else {
        printFile(files, numberOfLines, nFlag);
    }
}
catch (ex) {
    console.log(ex.message);
}
finally {
    return;
}
























