class nav_custom extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
  
      shadow.innerHTML = `
        <style>
        :host {
            position: fixed;      /* 固定位置 */
            top: 0;               /* 靠上對齊 */
            left: 0;              /* 靠左對齊 */
            width: 100%;          /* 滿版寬度 */
            z-index: 1000;        /* 確保浮在上層 */
            background-color: #333;
            color: white;

            display: flex;
            justify-content: space-between;
            align-items: center;
        }
  
        nav {
            display: flex;
            justify-content: space-evenly;
            margin-right: 20px;
        }
        
        a {
            color: white;
            text-decoration: none;
        }
        
        .nav-item {
            padding-left: 3rem;
            color: white;
        }
        .hamburger {
            display: none;
            flex-direction: column;
            cursor: pointer;
        }

        .hamburger div {
            width: 25px;
            height: 3px;
            background-color: white;
            margin: 4px 0;
        }
        @media (max-width: 768px) {
            nav {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background-color: #333;
                flex-direction: column;
            }

            nav.show {
                display: flex;
            }

            .nav-item {
                padding-left: 1rem;
                border-top: 1px solid #555;
            }

            .hamburger {
                display: flex;
                margin-right:20px
            }
        }
        </style>
            <!-- 導覽列 -->
        <div style="display: flex; width: 100%; align-items: center; justify-content: space-between;">
            <div style="padding: 0.5rem 1rem;">
                <a href="/2026/" aria-label="前往 QRACON 2026 年度官網" style="color: white; text-decoration: none; white-space: nowrap;">
                    <h4 style="margin: 0;">QRACON 2026</h4>
                </a>
            </div>

            <!-- 漢堡按鈕 -->
            <div class="hamburger" onclick="toggleMenu()">
                <div></div>
                <div></div>
                <div></div>
            </div>

            <!-- 導覽連結 -->
            <nav id="navbar">
                <div class="nav-item"><a href="index.html"><h4>首頁</h4></a></div>
                <div class="nav-item"><a href="agenda.html"><h4>議程表</h4></a></div>
                <div class="nav-item"><a href="events.html"><h4>活動內容</h4></a></div>
                <div class="nav-item"><a href="posters.html"><h4>海報展</h4></a></div>
                <div class="nav-item"><a href="map.html"><h4>交通方式</h4></a></div>
                <div class="nav-item"><a href="https://sqcs.kktix.cc/events/qracon2025"><h4>購票資訊</h4></a></div>
                <div class="nav-item"><a href="about.html"><h4>主辦單位</h4></a></div>
            </nav>
        </div>
        
      `;
        const hamburger = shadow.querySelector('.hamburger');
        const nav = shadow.getElementById('navbar');

        hamburger.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
    
  }
  
customElements.define('nav-custom', nav_custom);

class footer_custom extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
  
      shadow.innerHTML = `
        <style>
        :host {
            width: 100%;          /* 滿版寬度 */
            background-color: #333;
            color: white;

            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }
        </style>
        <div>
            <h3>QRACON學生量子電腦年會</h3>
        </div>
        <div>
            <a href='https://rfeqserver.myqnapcloud.com' style='color: white;'><h5>Website made by RPTeS</h5></a>
        </div>
      `;
    }
  }
  
  customElements.define('footer-custom', footer_custom);
