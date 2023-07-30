var app = document.createElement('div');
app.id = 'ot_kite_toke_copier';
app.innerText = 'Kite Token Copier';
app.style = `
position:absolute;
z-index:9999;
right:10px;
bottom:60px;
cursor:pointer;`;
app.onclick = function(){
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  navigator.clipboard.writeText(getCookie('enctoken'));

  app.innerText = 'Copied token';
  setTimeout(()=>
  app.innerText = 'Kite Token Copier',500)
}
document.querySelector('body').appendChild(app);




var app2 = document.createElement('div');
app2.id = 'ot_kite_toke_copier';
app2.innerText = 'Kite User ID Copier';
app2.style = `
position:absolute;
z-index:9999;
right:10px;
bottom:90px;
cursor:pointer;`;
app2.onclick = function(){
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  navigator.clipboard.writeText(getCookie('user_id'));

  app2.innerText = 'Copied user id';
  setTimeout(()=>app2.innerText = 'Kite User ID Copier',500)
}
document.querySelector('body').appendChild(app2);



