function navHTML() {  
  document.querySelector(".nav-bar").innerHTML = ` 
    <ul>
        <li>
            <a href="/">
                <img src="../assets/img/icon.svg" alt="지도홈" />
            </a>
            Map Home
        </li>
        <li>
            <a href="/Vote">
                <img src="../assets/img/icon-1.svg" alt="투표" />
            </a>
            Vote
        </li>
        <li>
            <a href="/Memo">
                <img src="../assets/img/icon-2.svg" alt="메모" />
            </a>
            Memo
        </li>
    </ul>
    `;

}

navHTML();