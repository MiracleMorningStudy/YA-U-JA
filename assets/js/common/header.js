function headerHTML() {  
  document.querySelector(".header").innerHTML = `
    <div class="header-bar">
        <h1>
            <a href="">YA-U-JA!</a>
        </h1>
        <div class="menu-list">
            <ul>
                <li>
                    <a href="/"></a>
                </li>
                <li>
                    <a href="/Vote"></a>
                </li>
                <li>
                    <a href="/Memo"></a>
                </li>
            </ul>
        </div>
    </div>
  `;

}

headerHTML();
