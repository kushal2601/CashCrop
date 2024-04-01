import Header from "@/components/Header";

const res  = (
    <center>
    {/* <header class="profile-icon-left" style="position: fixed;">
        <img src="Crop%20Cash%20Logo.jpg">
    </header> */}
    <header class  = "logo" >
        Cash Crop.
    </header>
    <a href="Profile%20Page.html">
        <header class="profile-icon-right" style={{position: "fixed"}} >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg>
        </header>
    </a>
    {/* <br><br><br> */}

    <main>
        <div class="weather-widget">
            <div class="weather-background"></div>
            <i class="wi wi-day-cloudy"></i>
            <p class="weather-temp">7777777775<span>&deg;C</span></p>
            <p class="weather-description">Clear</p>
            <p class="weather-location">Bengaluru, BLR</p>
        </div>
        {/* <br><br><br> */}
        <div>
            <div class="news-widget">
                <h2 class="news-title">Latest News</h2>
                <ul class="news-list">
                    <li class="news-item">
                        <time class="news-date" datetime="2023-03-14">Mar 14, 2023</time>
                        <h3 class="news-headline">Headline 1</h3>
                        <p class="news-summary">Summary of news article 1...</p>
                    </li>
                    <li class="news-item">
                        <time class="news-date" datetime="2023-03-13">Mar 13, 2023</time>
                        <h3 class="news-headline">Headline 2</h3>
                        <p class="news-summary">Summary of news article 2...</p>
                    </li>
                    <li class="news-item">
                        <time class="news-date" datetime="2023-03-12">Mar 12, 2023</time>
                        <h3 class="news-headline">Headline 3</h3>
                        <p class="news-summary">Summary of news article 3...</p>
                    </li>
                </ul>
            </div>
        </div>
    </main>
    <nav class="menu-bar">
        <ul>
            <li><a href="Home_Page.html"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
                <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
            </svg></a></li>
            <li><a href="Shop%20Page.html"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
            </svg></a></li>
            <li><a href="Reel_Page.html"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-align-bottom" viewBox="0 0 16 16">
                <rect width="4" height="12" x="6" y="1" rx="1"/>
                <path d="M1.5 14a.5.5 0 0 0 0 1zm13 1a.5.5 0 0 0 0-1zm-13 0h13v-1h-13z"/>
            </svg></a></li>
            <li><a href="Bank%20Page.html"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-safe2-fill" viewBox="0 0 16 16">
                <path d="M6.563 8H5.035a3.5 3.5 0 0 1 .662-1.596l1.08 1.08q-.142.24-.214.516m.921-1.223-1.08-1.08A3.5 3.5 0 0 1 8 5.035v1.528q-.277.072-.516.214M9 6.563V5.035a3.5 3.5 0 0 1 1.596.662l-1.08 1.08A2 2 0 0 0 9 6.563m1.223.921 1.08-1.08c.343.458.577 1.003.662 1.596h-1.528a2 2 0 0 0-.214-.516M10.437 9h1.528a3.5 3.5 0 0 1-.662 1.596l-1.08-1.08q.142-.24.214-.516m-.921 1.223 1.08 1.08A3.5 3.5 0 0 1 9 11.965v-1.528q.277-.072.516-.214M8 10.437v1.528a3.5 3.5 0 0 1-1.596-.662l1.08-1.08q.24.142.516.214m-1.223-.921-1.08 1.08A3.5 3.5 0 0 1 5.035 9h1.528q.072.277.214.516M7.5 8.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0"/>
                <path d="M2.5 1A1.5 1.5 0 0 0 1 2.5V3H.5a.5.5 0 0 0 0 1H1v4H.5a.5.5 0 0 0 0 1H1v4H.5a.5.5 0 0 0 0 1H1v.5A1.5 1.5 0 0 0 2.5 16h12a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 14.5 1zm6 3a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9"/>
            </svg></a></li>
            <li><a href="DashBoard.html"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            </svg></a></li>
        </ul>
    </nav>

</center>
);

export default Header;