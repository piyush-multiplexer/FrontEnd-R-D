InitPlugin=function(){let e,t={email:"abc@def.com",phone:"1234567890",channel:"all"},n={};let l=function(t){switch(t.target.id){case"reset-password-btn":!function(){(e=document.createElement("div")).classList.add("modal");const t=document.createElement("div");let l,a,d,i;t.setAttribute("id","otpSelection"),"all"===n.channel?(l=document.createElement("input"),a=document.createElement("input"),l.type="radio",a.type="radio",l.id="email",a.id="phone",l.name="channel",a.name="channel",l.value=n.email,a.value=n.phone,d=document.createElement("label"),i=document.createElement("label"),d.htmlFor="email",d.innerText="Email",i.htmlFor="phone",i.innerText="Phone"):"email"===n.channel?((l=document.createElement("input")).type="radio",l.id="email",l.name="channel",l.value=n.email,(d=document.createElement("label")).htmlFor="email",d.innerText="Email"):"phone"===n.channel&&((a=document.createElement("input")).type="radio",a.id="phone",a.name="channel",a.value=n.phone,(i=document.createElement("label")).htmlFor="phone",i.innerText="Phone");let o=document.createElement("br"),c=document.createElement("button");c.setAttribute("id","send-otp-btn"),c.setAttribute("class","button button2"),c.innerText="SEND OTP",("email"===n.channel||"all"===n.channel)&&(t.appendChild(l),t.appendChild(d),t.appendChild(o));"phone"!==n.channel&&"all"!==n.channel||(t.appendChild(a),t.appendChild(i),t.appendChild(o));t.appendChild(c),e.appendChild(t),document.body.appendChild(e)}();break;case"send-otp-btn":a("otpSelection"),function(){const t=document.createElement("div");t.setAttribute("id","otpInput");let n=document.createElement("h5"),l=document.querySelector('input[name="channel"]:checked');n.innerHTML=`OTP Sent to your ${l.id} ${l.value}`;let a=document.createElement("input");a.type="text",a.id="otp-value";let d=document.createElement("label");d.htmlFor="otp-value",d.innerText="Enter OTP";let i=document.createElement("br"),o=document.createElement("button");o.setAttribute("id","submit-otp-btn"),o.setAttribute("class","button button2"),o.innerText="SUBMIT OTP",t.appendChild(n),t.appendChild(a),t.appendChild(d),t.appendChild(i),t.appendChild(o),t.appendChild(i),e.appendChild(t),document.body.appendChild(e)}();break;case"submit-otp-btn":a("otpInput"),function(){const t=document.createElement("div");t.setAttribute("id","otpResult");const n=document.getElementById("otp-value").value;let l=document.createElement("h1");l.setAttribute("id","otp-result"),l.innerText=`OTP ${n}`,t.appendChild(l),e.appendChild(t),document.body.appendChild(e)}()}};function a(e){document.getElementById(e).style.visibility="hidden"}return function(e){n=Object.assign(t,e),console.log(n),document.addEventListener("click",l,!1)}}();