var fs = require('fs');
var n=10; var c=-1, nFlag;
var contents;
var splitContent;

function printLines()
{
    var i=0;
                while(i<n)
                {
                        console.log(splitContent[i++]);
                }
}
function printChar()
{
    var i=0; 
    var charContent='';
    var charContentString = contents.toString();
    while(i<c)
        {
                charContent=charContent + charContentString[i++];
        }
        console.log(charContent);
}
function readFile(files)
{
    
        if(contents = fs.readFileSync(file, 'utf8')==null)
        throw new ErrorEvent( 
            { TypeError:File
          });
        else
            splitContent = contents.split("\n");
    
    
}
function printFile(files)
{
    
    for(file of files)
    {
        console.log("==> ",file," <==");
        readFile(files);
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
//console.log(parseInt(parseargs.n)!=NaN);
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
            throw new ErrorEvent( 
                { TypeError:NaN
              });
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
       throw  new ErrorEvent( new
          {  TypeError:NaN
        });
   }
   
}
printFile(files);
}
catch(ErrorEvent)
{
    console.log("in Catch block",ErrorEvent.TypeError);
    console.log(ErrorEvent );
    
    if(ErrorEvent.error == NaN)
        console.log("Not a Number!");
    if(ErrorEvent instanceof TypeError.File)
        console.log("File Not Found!");   
}
// catch(File)
// {
    
//     console.log("File not found!");
// }

finally{
    return;
}
























