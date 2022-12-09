// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
    //your code here
    url = url.replace('http://', '');
    url = url.replace('https://', '');
    url = url.replace('www.', '')
    return url.split('.')[0]

  }

  domainName("https://github.com/carbonfive/raygun")
  domainName("http://www.zombie-bites.com")