
const [,, operation, num1, num2] = process.argv;
const a=Number(num1);
const b=Number(num2);

switch(operation){
    case "add":
        console.log(`Result: ${a + b}`);
        
        break;
    case "sub":
        console.log(`Result:${a-b}`)
        break;
    case "mul":
        console.log(`Result:${a*b}`)
        break;
    case "div":
        console.log(b!==0?`Result:${a/b}`:`Error by zero division`)
        break;
    default:
        console.log("Invalid operation.USe add,sub,mul,div");
}
