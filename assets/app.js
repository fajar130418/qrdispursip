let logoData="";
const $=id=>document.getElementById(id);
const qr=new QRCodeStyling({width:420,height:420,type:"canvas",data:"https://s.id/SKMperpus",margin:10,qrOptions:{errorCorrectionLevel:"H"},dotsOptions:{color:"#111827",type:"square"},backgroundOptions:{color:"#fff"},imageOptions:{crossOrigin:"anonymous",margin:8,imageSize:.22,hideBackgroundDots:true}});
qr.append($("qrcode"));
function update(){const size=+$("size").value,margin=+$("margin").value,logo=+$("logoSize").value/100;qr.update({width:size,height:size,data:$("data").value||" ",margin,image:logoData||undefined,qrOptions:{errorCorrectionLevel:"H"},dotsOptions:{color:$("dotsColor").value,type:"square"},backgroundOptions:{color:$("bgColor").value},imageOptions:{crossOrigin:"anonymous",margin:8,imageSize:logo,hideBackgroundDots:true}});$("sizeOut").value=size;$("marginOut").value=margin;$("logoSizeOut").value=+$("logoSize").value;$("dotsHex").textContent=$("dotsColor").value;$("bgHex").textContent=$("bgColor").value}
["data","size","margin","logoSize","dotsColor","bgColor"].forEach(id=>$(id).addEventListener("input",update));
function logoFile(file){if(!file||!["image/png","image/jpeg"].includes(file.type)){alert("Pilih logo PNG atau JPG.");return}const r=new FileReader();r.onload=e=>{logoData=e.target.result;$("logoThumb").src=logoData;$("logoName").textContent=file.name;$("logoPreview").classList.remove("hidden");update()};r.readAsDataURL(file)}
$("logoInput").addEventListener("change",e=>logoFile(e.target.files[0]));
$("removeLogo").addEventListener("click",()=>{logoData="";$("logoInput").value="";$("logoPreview").classList.add("hidden");update()});
const dz=$("dropzone");["dragenter","dragover"].forEach(x=>dz.addEventListener(x,e=>{e.preventDefault();dz.style.borderColor="var(--primary)"}));["dragleave","drop"].forEach(x=>dz.addEventListener(x,e=>{e.preventDefault();dz.style.borderColor=""}));dz.addEventListener("drop",e=>logoFile(e.dataTransfer.files[0]));
$("downloadPng").addEventListener("click",()=>qr.download({name:"qr-dispursip",extension:"png"}));
$("downloadSvg").addEventListener("click",()=>qr.download({name:"qr-dispursip",extension:"svg"}));
$("reset").addEventListener("click",()=>{ $("data").value="https://s.id/SKMperpus";$("size").value=420;$("margin").value=10;$("logoSize").value=22;$("dotsColor").value="#111827";$("bgColor").value="#ffffff";logoData="";$("logoInput").value="";$("logoPreview").classList.add("hidden");update()});
update();