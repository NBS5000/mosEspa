function convert(url){
    const urlRegex = new RegExp("(.*?(?:jpg|png|jpeg))|.*","gim");
    const x = urlRegex.exec(url);
    return x[0];
}