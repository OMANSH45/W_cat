let fs=require("fs");
let path=require("path");

let inputArr=process.argv.slice(2);

let optionsArr=[];
let filesArr=[];
for(let i=0;i<inputArr.length;i++){
    let firstChar=inputArr[i].charAt(0);
    if(firstChar=="-"){
        optionsArr.push(inputArr[i]);

    }else{
        filesArr.push(inputArr[i]);
    }
}

for(let i=0;i<filesArr.length;i++){
    if(fs.existsSync(filesArr[i])==false){
        console.log("File doesn't exist");
        return;
    }
}

let completecontent="";
    for(let i=0;i<filesArr.length;i++){
        let content=fs.readFileSync(filesArr[i]);
        completecontent+=content+"\r\n";
    }

if(optionsArr.length==0){
    console.log(completecontent);
}else if(optionsArr[0]=="-s"){
    fn1();

    if(optionsArr[1]=="-n"){
            fn2();     
        }else if(optionsArr[1]=="-b"){
            fn3();
    }
}
    else if(optionsArr[0]=="-n"){
        fn2();
        if(optionsArr.includes("-s")){
            fn1();     
        }
    }  

    else if(optionsArr[0]=="-b"){
        fn3();
        if(optionsArr.includes("-s")){
            fn1();     
        }
        
    }

function fn1(){
    let contentArr=completecontent.split("\r\n");
        for(let i=1;i<contentArr.length;i++){
            if(contentArr[i]==""&&contentArr[i-1]==""){
                contentArr[i]=null;
            }else if(contentArr[i]==""&&contentArr[i-1]==null){
                contentArr[i]=null;
            }
        }
        let tempArr=[];
        for(let i=0;i<contentArr.length;i++){
            if(contentArr[i]!=null){
                tempArr.push(contentArr[i]);
            }
        }
        console.log(tempArr.join("\n"));

}
function fn2(){
    let contentArr=completecontent.split("\r\n");
            let count=0;
            for(let i=0;i<contentArr.length;i++){
                count++;
                console.log(count+"."+" "+contentArr[i]);
            }
}
function fn3(){
    let contentArr=completecontent.split("\r\n");
        let counter=0;
        for(let i=0;i<contentArr.length;i++){
            if(contentArr[i]!=""){
                counter++;
            console.log(counter+"."+" "+contentArr[i]);
            }else{
                console.log();
            }
        }

}
    








