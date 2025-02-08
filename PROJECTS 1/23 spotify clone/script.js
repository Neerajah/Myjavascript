class App extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return /*#__PURE__*/(
        React.createElement("div", null, /*#__PURE__*/
        React.createElement(Menu, null), /*#__PURE__*/
        React.createElement(MainContent, null)));
  
  
    }}
  
  
  const Menu = () => {
    return /*#__PURE__*/(
      React.createElement("div", { id: "menu-bar", class: "menu-bar" }, /*#__PURE__*/
      React.createElement("span", null, /*#__PURE__*/React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("img", { src: "https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg", alt: "Spotify Logo" }))), /*#__PURE__*/
      React.createElement("nav", { class: "navbar" }, /*#__PURE__*/
      React.createElement("ul", null, /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("a", { class: "active", href: "#" }, /*#__PURE__*/React.createElement("svg", { viewBox: "0 0 512 512", width: "24", height: "24", xmlns: "http://www.w3.org/2000/svg" }, /*#__PURE__*/React.createElement("path", { d: "M448 463.746h-149.333v-149.333h-85.334v149.333h-149.333v-315.428l192-111.746 192 110.984v316.19z", fill: "currentColor" })), "Home")), /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("svg", { viewBox: "0 0 512 512", width: "24", height: "24", xmlns: "http://www.w3.org/2000/svg" }, /*#__PURE__*/React.createElement("path", { d: "M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z", fill: "currentColor", "fill-rule": "evenodd" })), "Search")), /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("svg", { viewBox: "0 0 512 512", width: "24", height: "24", xmlns: "http://www.w3.org/2000/svg" }, /*#__PURE__*/React.createElement("path", { d: "M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z", fill: "currentColor" })), "Your Library")))), /*#__PURE__*/
  
  
  
      React.createElement("nav", { class: "user-collection" }, /*#__PURE__*/
      React.createElement("ul", null, /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("i", { class: "fa fa-plus-square fa-lg", "aria-hidden": "true" }), "Create Playlist")), /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("i", { class: "fa fa-heart fa-lg", "aria-hidden": "true" }), "Liked Songs")), /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("i", { class: "fa fa-podcast fa-lg", "aria-hidden": "true" }), "Your Episodes")))), /*#__PURE__*/
  
  
  
      React.createElement("span", { class: "install-app" }, /*#__PURE__*/React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("i", { class: "fa fa-arrow-circle-down fa-lg", "aria-hidden": "true" }), "Install App"))));
  
  
  };
  
  const MainContent = () => {
    return /*#__PURE__*/(
      React.createElement("div", { class: "main-content" }, /*#__PURE__*/
      React.createElement(Header, null), /*#__PURE__*/
      React.createElement(Body, null)));
  
  
  };
  
  const Header = () => {
    const [profileVisibility, setProfileVisibility] = React.useState('hidden');
    const handleClick = () => {
      if (profileVisibility == 'hidden') {
        setProfileVisibility('visible');
      } else
      {
        setProfileVisibility('hidden');
      }
    };
  
    const [menuBarVisibility, setMenuBarVisibility] = React.useState('visible');
    const handleMenuBar = () => {
      if (menuBarVisibility == 'hidden') {
        setMenuBarVisibility('visible');
        document.getElementById('bar1').style.transform = 'none';
        document.getElementById('bar1').style.transition = 'transform .4s ease';
        document.getElementById('bar2').style.opacity = 1;
        document.getElementById('bar2').style.transition = 'opacity .5s ease';
        document.getElementById('bar3').style.transform = 'none';
        document.getElementById('bar3').style.transition = 'transform .4s ease';
        document.getElementById('menu-bar').style.transition = 'visibility .2s ease-in-out';
      } else
      {
        setMenuBarVisibility('hidden');
        document.getElementById('bar1').style.transform = 'rotate(-45deg) translate(-9px, 6px)';
        document.getElementById('bar1').style.transition = 'transform .4s ease';
        document.getElementById('bar2').style.opacity = 0;
        document.getElementById('bar2').style.transition = 'opacity .5s ease';
        document.getElementById('bar3').style.transform = 'rotate(45deg)translate(-5px, -3px)';
        document.getElementById('bar3').style.transition = 'transform .4s ease';
        document.getElementById('menu-bar').style.transition = 'visibility .2s ease-n-out';
  
      }
      document.getElementById('menu-bar').style.visibility = menuBarVisibility;
    };
    return /*#__PURE__*/(
      React.createElement("header", null, /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { onClick: handleMenuBar, class: "hamburger" }, /*#__PURE__*/
      React.createElement("div", { id: "bar1", class: "bar1" }), /*#__PURE__*/
      React.createElement("div", { id: "bar2", class: "bar2" }), /*#__PURE__*/
      React.createElement("div", { id: "bar3", class: "bar3" })), /*#__PURE__*/
  
      React.createElement("div", { class: "dropdown" }, /*#__PURE__*/
      React.createElement("button", { onClick: handleClick }, /*#__PURE__*/
      React.createElement("i", { class: "fa fa-user-circle fa-lg", "aria-hidden": "true" }), "curious_coder", /*#__PURE__*/
  
      React.createElement("i", { className: `fa fa-caret-${profileVisibility == 'hidden' ? 'down' : 'up'}`, "aria-hidden": "true" })), /*#__PURE__*/
  
      React.createElement("ul", { style: { visibility: `${profileVisibility}` } }, /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#", target: "_blank" }, "Account", /*#__PURE__*/React.createElement("i", { class: "fa fa-external-link", "aria-hidden": "true" }))), /*#__PURE__*/
  
      React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Profile")), /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Log Out")))))));
  
  
  
  
  
  };
  
  const Body = () => {
    const hours = new Date().getHours();
    const greeting = hours < 12 ? "Morning" : hours < 17 ? "Afternoon" : "Evening";
  
    return /*#__PURE__*/(
      React.createElement("main", null, /*#__PURE__*/
      React.createElement("div", { class: "greeting" }, /*#__PURE__*/
      React.createElement("h2", null, "Good ", greeting)), /*#__PURE__*/
  
  
      React.createElement("div", { class: "recent-activity" }, /*#__PURE__*/
      React.createElement("div", { class: "activity-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://seed-mix-image.spotifycdn.com/v6/img/pop/4AK6F7OLvEQ5QYCBNiQWHq/en/default", alt: "Pop Mix playlist cover photo" })), /*#__PURE__*/
  
      React.createElement("p", null, "Pop Mix")), /*#__PURE__*/
  
      React.createElement("div", { class: "activity-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://i.scdn.co/image/ab67656300005f1f854bce22cb0e6890dba92dd8", alt: "The Athletic Football Tactics Podcast cover photo" })), /*#__PURE__*/
  
      React.createElement("p", null, "The Athletic Football Tactics Podcast")), /*#__PURE__*/
  
      React.createElement("div", { class: "activity-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://i.scdn.co/image/ab67706f00000002b75cdf3f088c129cc350c0f8", alt: "This Is One Direction playlist cover photo" })), /*#__PURE__*/
  
      React.createElement("p", null, "This Is One Direction")), /*#__PURE__*/
  
      React.createElement("div", { class: "activity-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://i.scdn.co/image/ab6761610000e5eb6e9a17ce6d67c02312e3fb89", alt: "Alessia Cara cover photo" })), /*#__PURE__*/
  
      React.createElement("p", null, "Alessia Cara")), /*#__PURE__*/
  
      React.createElement("div", { class: "activity-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb26dbdbdacda5c30dc95e0c2c/3/en/default", alt: "Daily Mix 3 playlist cover photo" })), /*#__PURE__*/
  
      React.createElement("p", null, "Daily Mix 3")), /*#__PURE__*/
  
      React.createElement("div", { class: "activity-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://i.scdn.co/image/ab67706f000000021373358fa4ff03aac54f188e", alt: "All Out 10s playlist cover photo" })), /*#__PURE__*/
  
      React.createElement("p", null, "All Out 10s"))), /*#__PURE__*/
  
  
  
      React.createElement("div", { class: "category" }, /*#__PURE__*/
      React.createElement("div", { class: "title" }, /*#__PURE__*/
      React.createElement("h3", null, "Your Shows"), /*#__PURE__*/
      React.createElement("a", { href: "#" }, "SEE ALL")), /*#__PURE__*/
  
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://i.scdn.co/image/a3313c9ff4f806345e71728b502022782e92cf34", alt: "HTML All The Things podcast cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "HTML All The Things"), /*#__PURE__*/
      React.createElement("p", { class: "author" }, "Show. Matt & Mike")), /*#__PURE__*/
  
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://i.scdn.co/image/ab67656300005f1f854bce22cb0e6890dba92dd8", alt: "The Athletic Football Podcast cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "The Athletic Football Podcast"), /*#__PURE__*/
      React.createElement("p", { class: "author" }, "Show. The Athletic")), /*#__PURE__*/
  
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://i.scdn.co/image/ab67656300005f1fcf5b0c37fe67ebbcdceb930b", alt: "Headline: Breaking Football News playlist cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "Headline: Breaking Football News"), /*#__PURE__*/
      React.createElement("p", { class: "author" }, "Show. The Athletic")), /*#__PURE__*/
  
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://i.scdn.co/image/fedc8e1c8b93cc9b8e49e8e101ec9d9b8795d1fe", alt: "Raj Prakash Paul playlist cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "Raj Prakash Paul"), /*#__PURE__*/
      React.createElement("p", { class: "author" }, "Show. Raj Prakash Paul")), /*#__PURE__*/
  
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://i.scdn.co/image/ab67656300005f1f6d655e4364ad1ed1dad7a83d", alt: "The Here We Go Podcast cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "The Here We Go Podcast"), /*#__PURE__*/
      React.createElement("p", { class: "author" }, "Show. Here We Go")))), /*#__PURE__*/
  
  
  
  
      React.createElement("div", { class: "category" }, /*#__PURE__*/
      React.createElement("div", { class: "title" }, /*#__PURE__*/
      React.createElement("h3", null, "Made For curious_coder"), /*#__PURE__*/
      React.createElement("a", { href: "#" }, "SEE ALL")), /*#__PURE__*/
  
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb031619e5eb9ed3b9806b648b/1/en/default", alt: "Daily Mix 1 cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "Daily Mix 1"), /*#__PURE__*/
      React.createElement("p", { class: "author" }, "Ella Mai, Shawn Mendes, Jason Derulo")), /*#__PURE__*/
  
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb6e9a17ce6d67c02312e3fb89/2/en/default", alt: "Daily Mix 2 cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "Daily Mix 2"), /*#__PURE__*/
      React.createElement("p", { class: "author" }, "Alessia Cara, 5 Seconds Of Summer")), /*#__PURE__*/
  
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb26dbdbdacda5c30dc95e0c2c/3/en/default", alt: "Daily Mix 3 cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "Daily Mix 3"), /*#__PURE__*/
      React.createElement("p", { class: "author" }, "Taylor Swift, Fifth Harmony")), /*#__PURE__*/
  
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb7aff8a274fcec288dd534abc/4/en/default", alt: "Daily Mix 4 cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "Daily Mix 4"), /*#__PURE__*/
      React.createElement("p", { class: "author" }, "Jesus Culture, Bethel Music")), /*#__PURE__*/
  
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb70859a2e628fd00e8be3a696/5/en/default", alt: "Daily Mix 5 cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "Daily Mix 5"), /*#__PURE__*/
      React.createElement("p", { class: "author" }, "Benny Joshua, Allen Ganta")))), /*#__PURE__*/
  
  
  
  
      React.createElement("div", { class: "category" }, /*#__PURE__*/
      React.createElement("div", { class: "title" }, /*#__PURE__*/
      React.createElement("h3", null, "Charts"), /*#__PURE__*/
      React.createElement("a", { href: "#" }, "SEE ALL")), /*#__PURE__*/
  
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_in_default.jpg", alt: "Top 50 India playlist cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "Top 50 India")), /*#__PURE__*/
  
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://i.scdn.co/image/ab67706f00000002b545db24c5864981ff896f07", alt: "Hot Hits India playlist cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "Hot Hits India")), /*#__PURE__*/
  
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg", alt: "Top 50 Global playlist cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "Top 50 Global")), /*#__PURE__*/
  
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://i.scdn.co/image/ab67706c0000da84fc156bed23ef2df5814fb190", alt: "Top Albums - Global playlist cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "Top Albums - Global")), /*#__PURE__*/
  
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://charts-images.scdn.co/assets/locale_en/viral/daily/region_global_default.jpg", alt: "Viral 50 - India playlist cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "Viral 50 - India")))), /*#__PURE__*/
  
  
  
  
      React.createElement("div", { class: "category" }, /*#__PURE__*/
      React.createElement("div", { class: "title" }, /*#__PURE__*/
      React.createElement("h3", null, "Best Of Artists"), /*#__PURE__*/
      React.createElement("a", { href: "#" }, "SEE ALL")), /*#__PURE__*/
  
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://i.scdn.co/image/ab67706f000000021230c7f75023a90181e914a0", alt: "This is Alessia Cara playlist cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "This Is Alessia Cara")), /*#__PURE__*/
  
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://i.scdn.co/image/ab67706f00000002a0a577ed169a7792c9363d6c", alt: "This is Hillsong Worship playlist cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "This Is Hillsong Worship")), /*#__PURE__*/
  
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://i.scdn.co/image/ab67706f00000002181896dd694bc09e4a0f13c8", alt: "This is Camila Cabello playlist cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "This Is Camila Cabello")), /*#__PURE__*/
  
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://i.scdn.co/image/ab67706f000000027988283d13d5654287988494", alt: "This is Shawn Mendes playlist cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "This Is Shawn Mendes")), /*#__PURE__*/
  
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://i.scdn.co/image/ab67706f00000002b75cdf3f088c129cc350c0f8", alt: "This is One Direction playlist cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "This Is One Direction")))), /*#__PURE__*/
  
  
  
  
      React.createElement("div", { class: "category final-category" }, /*#__PURE__*/
      React.createElement("div", { class: "title" }, /*#__PURE__*/
      React.createElement("div", { class: "popular-shows" }, /*#__PURE__*/
      React.createElement("p", null, "POPULAR WITH LISTENERS OF"), /*#__PURE__*/
      React.createElement("h3", null, "Headline: Breaking Football News")), /*#__PURE__*/
  
      React.createElement("a", { href: "#" }, "SEE ALL")), /*#__PURE__*/
  
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://i.scdn.co/image/ab67656300005f1f6070c8c3beddfeef90cd9044", alt: "Football Cliches podcast cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "Football Cliches"), /*#__PURE__*/
      React.createElement("p", { class: "author" }, "Show. The Athletic")), /*#__PURE__*/
  
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://i.scdn.co/image/ab67656300005f1fff3db692e1f2dbe7c73951e2", alt: "The Athletic Football Podcast podcast cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "The Athletic Football Podcast"), /*#__PURE__*/
      React.createElement("p", { class: "author" }, "Show. The Athletic")), /*#__PURE__*/
  
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://i.scdn.co/image/ab67656300005f1fea8a7821ffed11a7bfe73c71", alt: "Beyond the Headline podcast cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "Beyond the Headline"), /*#__PURE__*/
      React.createElement("p", { class: "author" }, "Show. The Athletic")), /*#__PURE__*/
  
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://i.scdn.co/image/ab67656300005f1f31a9464d4951d231128babc6", alt: "The Next Big Thing podcast cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "The Next Big Thing"), /*#__PURE__*/
      React.createElement("p", { class: "author" }, "Show. The Athletic")), /*#__PURE__*/
  
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://i.scdn.co/image/bdd990bddb85baa44c320b2ffba328549e184643", alt: "The Scouted Football Podcast podcast cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "The Scouted Football Podcast"), /*#__PURE__*/
      React.createElement("p", { class: "author" }, "Show. Scouted Football"))))));
  
  
  
  
  
  };
  
  ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));