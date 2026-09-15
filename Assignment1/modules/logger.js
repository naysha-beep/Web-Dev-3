function log(message){
    const timestamp=new Data().toISOString();
    console.log(`[$timestamp]${message}`);
}
modules.exports=log;
