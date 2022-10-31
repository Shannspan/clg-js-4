//maybe header & footer should have there own.js file? Will that fix the error? 
//Yes it does!! Found info about the "text/javascript" type online and placed in HTML head under the main js <script> link. Both the <script> in head (to access the file) and link to id in the HTML body for location.

class Header extends HTMLElement {
  constructor(){
    super();
  }
connectedCallback () {
    this.innerHTML = `
    <header>
    <link href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap" rel="stylesheet">
    A FRINGE OF REEF
    <nav>
    <div class="topnav">
    <a class="navlinks" href="#home">Home</a>
    <a href="#beachcombing">Beachcombing</a>   
    <a href="#marinelife">Marine Life</a>    
    <a href="#contact">Contact</a>
    </div>
    </nav> 
    </header>
    `;
}
}
    customElements.define('header-component', Header);



  
  
    


