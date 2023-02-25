const sayHello =()=>{
alert("text")
}
const formatInput = (text)=>{
    const lines = text.split('\n').filter(line => line.trim() !== '');
    text = lines.join('\n');
    text = text.replace(/\d\d:\d\d:\d\d\.\d\d\d --> \d\d:\d\d:\d\d\.\d\d\d/g, '');
    text = text.replace('</v>','');
    text = text.replace('<v ','');
    text = text.replace('>',':');
    return text.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
 }

 const getCanInterName = ()=>{
    n = 1000
    let str = formatInput(data).substring(0, n);
    let query = "who is interviewer and candidate in the below text ";
    callChatGPTApi(query,str).then(x=>console.log(x)).catch(y=>alert("alert " + y))
 }