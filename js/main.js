function readmore(z) {
    y="more"+z;
    x="myBtn"+z;
    var moreText = document.getElementById(y);
    var btn=document.getElementById(x);
    if (moreText.style.display=="none") {
      moreText.style.display = "inline";
      btn.innerHTML="बंद करे";
    } else {
      moreText.style.display = "none";
      btn.innerHTML="पढ़ें";
    }
  }