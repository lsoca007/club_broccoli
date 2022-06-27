import "./burguer.css";
import hambuerguer from "./icons/icons8-menu.svg";

export default function BurguerMenu() {
  return (
    <div class="topnav">
      <div id="myLinks">
        <a href="">Account</a>
        <a href="">Blog</a>
        <a href="">Contact</a>
        <a href="">About</a>
      </div>
      <div className="icon-menu-mobile">
        <i src={hambuerguer}></i>
      </div>
      <a href="javascript:void(0);" class="icon" onclick="menuOpener()"></a>
    </div>
  );
  function menuOpener() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
}
