class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .nav {
          width: 100%;
          display: block;
        }

      .nav__list {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
        list-style-type: none;
      }
      
      .nav__item a {
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 500;
      }
      </style>
      <header>
        <nav class='nav'>
          <ul class='nav__list'>
            <li class='nav__item'><a href="https://atividade-03-dwba4.romulmelo.repl.co">Home</a></li>
            <li class='nav__item'><a href="/pages/contact.html">Contato</a></li>
            <li class='nav__item'><a href="/pages/about.html">Sobre</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('header-component', Header);