import{E as o}from"./moment-820a4055.js";let a,e=0;function i(n){n=="ajax"&&e++,a=o.service({lock:!0,fullscreen:!0,text:"Loading",background:"rgba(0, 0, 0, 0.7)"})}function r(){a&&setTimeout(()=>{e==0&&a.close()},500)}export{r as e,i as s};