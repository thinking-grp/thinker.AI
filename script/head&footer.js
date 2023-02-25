// thinkerAI®
// Power by thinking-group®
// 2023~0000
// https://thinking-grp.github.io/
// https://thinking-grp.github.io/thinker.AI/

document.querySelector('#head').innerHTML = `
  <header>
    <a href="/index.html">
      <img src="image/thinkerai.png">
    </a>
    <div class="header-menu">
      <ul>
        <li>
          <a href="https://www.earthtk.tk">About</a>
        </li>
        <li>
          <a href="https://www.earthtk.tk">Menber</a>
        </li>
        <li>
          <a href="https://www.earthtk.tk">Download</a>
        </li>
        <li>
          <a href="https://www.earthtk.tk">thinkerAIedit</a>
        </li>
      </ul>
    </div>
  </header>
`;
document.querySelector('foot').innerHTML = `
  <footer>
    <div id="year">2023-</div>
  </footer>
  `;

//2023-OOOO year
  date = new Date();
  year = date.getFullYear();
  document.getElementById("year").innerHTML = year;