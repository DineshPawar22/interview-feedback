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
