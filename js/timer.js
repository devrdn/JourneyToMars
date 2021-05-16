  EndDate = new Date();
  EndDate= new Date(2021, 5, 15, 17, 0);
  function timer() {
    today = new Date();
    today = Math.floor((EndDate - today) / 1000);
    tsec = today % 60;
    today = Math.floor(today / 60);
    if (tsec < 10) tsec = '0' + tsec;
    tmin = today % 60;
    today = Math.floor(today / 60);
    if (tmin < 10) tmin = '0' + tmin;
    thour = today % 24;
    today = Math.floor(today / 24);
    timestr = today + " days " + thour + " hours " + tmin + " minutes " + tsec + " seconds";
    document.getElementById('timer').innerHTML = timestr;
    window.setTimeout("timer()", 1000);
  }
