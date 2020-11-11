exports.deepCopy =  obj => {
  return JSON.stringify(JSON.parse(obj))
}

exports.guid = () => { 
  function S4() { 
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1)
  }
  return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4())
}

exports.getRootPath = () => {
  var curPageUrl = window.document.location.href
  var temp = curPageUrl.split("//")
  var rootPath = temp[0] + "//" + temp[1].split("/")[0] + "/" + temp[1].split("/")[1]
  return rootPath
}