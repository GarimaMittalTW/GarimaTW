var fs = require('fs');
var n=10; var c=-1, nFlag;
var contents;
var splitContent;

function printLines()
{
    var i=0;
            while(i<n && i<splitContent.length)
                {
                        console.log(splitContent[i++]);
                }
}
function printChar()
{
    var i=0; 
    var charContent='';
    var charContentString = contents.toString();
   //console.log("charcontent ",charContentString.length);
    
    while(i<c &&i< charContentString.length)
        {
                charContent=charContent + charContentString[i++];
        }
        console.log(charContent);
}
function readFile(file)
{
    
        if(fs.existsSync("./"+file))
        {
            contents = fs.readFileSync(file, 'utf8');
        }
        else throw{ message:"File do not exist in the current directory!"}
    
    }
function printFile(files)
{
     for(file of files)
    {
        console.log("==> ",file," <==");
        readFile(file);
        if(nFlag!=null)
        {
            if(nFlag==1)
            {
                printLines();
            }
            else
            {
                printChar();    
            }   
        }
        else{
                printLines();
            } 
     }
}

//remove first two items as they are 1. node command 2. file path.
var parseargs=require('minimist')(process.argv.slice(2));
//console.log(parseargs);
var files= parseargs._;
try{
    if(parseargs.n!=null)
    {
       
        if(!isNaN(parseInt(parseargs.n)))
        {
            n=parseargs.n;
            nFlag=1;
        }
        else
        {
            throw  {
                message:"Not a number!"
            };
        }   
    }

if(parseargs.c!=null) 
{
    if(!isNaN(parseInt(parseargs.c)))
    {
        c=parseargs.c;
        nFlag=0;
    }
   else
   {
       throw  {
           message:"Not a number!"
       };
   }
   
}
printFile(files);
}
catch(ex)
{   
    console.log(ex.message);
}
// catch(File)
// {
    
//     console.log("File not found!");
// }

finally{
    return;
}
























