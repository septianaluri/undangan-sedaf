function bukaUndangan(){

  document.querySelector(".cover").style.display = "none";
  document.getElementById("main").style.display = "block";

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

}

/* countdown */
let target = new Date("Dec 12, 2026 08:00:00").getTime();

setInterval(function(){

  let now = new Date().getTime();
  let jarak = target - now;

  let hari = Math.floor(jarak / (1000*60*60*24));
  let jam = Math.floor((jarak%(1000*60*60*24))/(1000*60*60));
  let menit = Math.floor((jarak%(1000*60*60))/(1000*60));
  let detik = Math.floor((jarak%(1000*60))/1000);

  document.getElementById("countdown").innerHTML =
  hari + " Hari<br>" +
  jam + " Jam " +
  menit + " Menit " +
  detik + " Detik";

},1000);