/* This compile by suryo dwijayanto */
function PreviewAudio(e,t){if(e.files&&e.files[0]&&$(t).length>0){$(t).stop();var i=new FileReader;i.onload=function(e){$(t).attr("src",e.target.result);var i=$(t).get(0).play();void 0!==i&&i.then(e=>{$(t).show()}).catch(e=>{$(t).hide(),alert("File Is Not Valid Media File")})},i.readAsDataURL(e.files[0])}else $(t).attr("src",""),$(t).hide(),alert("File Not Selected")}var mCek=document.getElementById("audioTime"),audio=document.getElementById("audioPreview");audio.addEventListener("timeupdate",function(){var e=1e3*audio.currentTime;mCek.value=e},!1),audio.addEventListener("ended",function(){var e=1e3*audio.currentTime;console.log("ended"),document.getElementById("enma").innerHTML='           {"line": "...", "time":'+e+"}",document.getElementById("msalin").style.display="block"});const form=document.querySelector("form"),xdiv=document.getElementById("dodol"),zbtn=document.getElementById("zbtn"),input=document.getElementById("item");let itemsArray=localStorage.getItem("items")?JSON.parse(localStorage.getItem("items")):[];localStorage.setItem("items",JSON.stringify(itemsArray));const data=JSON.parse(localStorage.getItem("items")),liMaker=e=>{let t=document.createElement("p");t.setAttribute("class","mpre"),t.textContent='           {"line": "'+e+'", "time":'+mCek.value+"},",xdiv.appendChild(t)};function mPreview(){window.open("https://darkcluemusic.github.io/json-to-lrc/")}function mDonate(){window.open("https://paypal.me/iyortml")}function copyDivToClipboard(){var e=document.createRange();e.selectNode(document.getElementById("msaves")),window.getSelection().removeAllRanges(),window.getSelection().addRange(e),document.execCommand("copy"),window.getSelection().removeAllRanges(),alert("JSON Disalin!")}form.addEventListener("submit",function(e){e.preventDefault(),itemsArray.push(input.value),localStorage.setItem("items",JSON.stringify(itemsArray)),liMaker(input.value),input.value=""}),data.forEach(e=>{liMaker(e)}),zbtn.addEventListener("click",function(){for(localStorage.clear();xdiv.firstChild;)xdiv.removeChild(xdiv.firstChild);itemsArray=[]});
