const style = document.createElement('style');
style.setAttribute('type', 'text/css')

const pushHorizontal = '5%',
bookmarkBackgroundColor = '#000',
bookmarkColor = '#fff',
bookmarkWidth = '45px',
bookmarkHoverWidth = '70px',
bookmarkHeight = '35px'

style.textContent = `
/* Injected by Syles */

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

* {
    font-family: 'Poppins', sans-serif;
}

:root {
    --push-horizontal: 5%;
    --bookmark-background-color: #000;
    --bookmark-color: #fff;
    --bookmark-width: 45px;
    --bookmark-hover-width: 70px;
    --bookmark-height: 35px;
}

.right-bottom {
    position: absolute;
    right: 0;
    bottom: var(--push-horizontal);
}

.left-bottom {
    position: absolute;
    left: 0;
    bottom: var(--push-horizontal);
}

.right-top {
    position: absolute;
    right: 0;
    top: var(--push-horizontal);
}

.left-top {
    position: absolute;
    left: 0;
    top: var(--push-horizontal);
}

.right-bottom .bookmark {
    position: relative;
    display: grid;
    justify-content: end;
    margin-top: 5px;
}

.left-bottom .bookmark {
    position: relative;
    display: grid;
    justify-content: start;
    margin-top: 5px;
}

.right-top .bookmark {
    position: relative;
    display: grid;
    justify-content: end;
    margin-bottom: 5px;
}

.left-top .bookmark {
    position: relative;
    display: grid;
    justify-content: start;
    margin-bottom: 5px;
}

.right-bottom .bookmark .content, .right-top .bookmark .content {
    background: var(--bookmark-background-color);
    border: none;
    display: flex;
    width: var(--bookmark-width);
    height: var(--bookmark-height);
    padding-left: 7px;
    border-radius: 20px 0 0 20px;
    justify-content: flex-start;
    align-items: center;
    transition: 0.3s cubic-bezier(0.25, 0.1, 0.1, 2);
    font-size: 20px;
    position: relative;
}

.left-bottom .bookmark .content, .left-top .bookmark .content {
    background: var(--bookmark-background-color);
    border: none;
    display: flex;
    width: var(--bookmark-width);
    height: var(--bookmark-height);
    padding-right: 7px;
    border-radius: 0 20px 20px 0;
    justify-content: flex-end;
    align-items: center;
    transition: 0.3s cubic-bezier(0.25, 0.1, 0.1, 2);
    font-size: 20px;
    position: relative;
}

 .bookmark .content:hover {
    width: var(--bookmark-hover-width);
}

.right-bottom .content i, .right-top .content i {
    text-align: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
}

.left-bottom .content .arrow, .left-top .content .arrow {
    text-align: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transform: rotate(0.5turn);
    position: relative;
    left: 15px;
    display: flex;
    justify-content: flex-start;
}

.left-bottom .content .logo, .left-top .content .logo {
    display: flex;
    justify-content: flex-end;
    position: relative;
    right: 20px;
}

.left-bottom .content .link, .left-top .content .link {
    position: absolute;
    right: 58px;
    font-size: 18px;
    transform: rotate(0.0turn);
    cursor: pointer;
}

.right-bottom .content .link, .right-top .content .link {
    display: none;
    pointer-events: none;
    visibility: hidden;
}

.settingsPopup {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    
}

.settingsPopup .popup {
    height: 450px;
    width: 420px;
    background-color: #fff;
    border-radius: 20px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.3);
}

.settingsPopup .popup .content {
    display: grid;
    align-content: center;
    height: 100%;
    padding: 0 30px;
    font-size: 20px;
}

.settingsPopup .popup .content .close {
    display: flex;
    justify-content: flex-end;
    font-size: 25px;
    position: absolute;
    right: 30px;
    top: 20px;
    cursor: pointer;
    transition: 0.2s;
}

.settingsPopup .popup .content .close:hover {
    color: #ff5454;
}

.settingsPopup .popup .content .settings {
    margin-top: 40px;
}

.settingsPopup .popup .content .settings form {
    height: 10%;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    margin: 40px 0;
}

.settingsPopup .popup .content .settings form input[type=color] {
    width: 100%;
    height: 30px;
    padding: 0;
    margin: 0;
    outline: transparent;
    border: none;
    background-color: transparent;
    color: transparent;
    cursor: pointer;
}

.settingsPopup .popup .content .settings form input[type=color]::-webkit-color-swatch {
    border-radius: 5px;
}

.settingsPopup .popup .content .settings form.show-link {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.settingsPopup .popup .content .settings form.show-link input[type=checkbox] {
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 3px;
    background-color: #fff;
    outline: 2px solid #000;
    margin-right: 10px;
}

.settingsPopup .popup .content .settings form.show-link input[type=checkbox]:after {
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    content: "\\f00c";
    font-size: 18px;
    color: #000;
    position: relative;
    left: 2px;
    top: 1px;
    display: none;
}

.settingsPopup .popup .content .settings form.show-link input[type=checkbox]:checked:after {
    display: flex;
}

.settingsPopup, .popup {
    display: none;
    pointer-events: none;
    visibility: hidden;
}

.settingsPopup.show, .popup {
    display: block;
    pointer-events: auto;
    visibility: visible;
}
`;

document.head.appendChild(style);

document.addEventListener('keydown', (event) => {
    console.log(event);
    if (event.ctrlKey == true && event.altKey == true && event.key == 'c') {
        navigator.clipboard.writeText(`   
        <div class="settingsPopup" id="settings">
            <div class="popup">
                <div class="content">
                    <div class="settings">
                        <form class="arrow-color">
                            <label>Arrow Color</label>
                            <input value="#ffffff" type="color" name="arrow-color" id="arrowColor">
                        </form>
                        <form class="logo-color">
                            <label>Logo Color</label>
                            <input value="#0073ff" type="color" name="logo-color" id="logoColor">
                        </form>
                        <form class="link-color">
                            <label>Link Color</label>
                            <input value="#737373" type="color" name="link-color" id="linkColor">
                        </form>
                        <form class="show-link">
                            <label>Show Link</label>
                            <input type="checkbox" name="show-link" id="showLink" checked>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="bookmarks left-bottom" id="bookmarks">
            <div class="bookmark">
                <div class="content">
                    <i class="arrow fa-solid fa-angle-left" id="arrow"></i>
                    <i class="logo fa-brands fa-github" id="logo" desc="Onieone"></i>
                    <i class="link fa-solid fa-arrow-up-right-from-square" id="link" onclick="urlOpen('https:/' + '/github.com/Onieone')"></i>
                </div>
            </div>
        </div> 
        `)
        setTimeout(() => {
           alert('Basic code template copied!') 
        }, 100);
    }  
}) 

/* Script */

const arrow = document.querySelectorAll(".arrow");
const logos = document.querySelectorAll(".logo");
const link = document.querySelectorAll(".link");
const arrowColor = document.getElementById("arrowColor")
const logoColor = document.getElementById("logoColor")
const linkColor = document.getElementById("linkColor");
const showLink = document.getElementById("showLink")
const closeSettings = document.getElementById("closeSettings")

arrowColor.addEventListener("input", () => {
    arrow.forEach(arrow => {
       arrow.style.color = arrowColor.value; 
    });
  });

logoColor.addEventListener("input", () => {
    logos.forEach(logo => {
        logo.style.color = logoColor.value;
    });
});

linkColor.addEventListener("input", () => {
  link.forEach(link => {
      link.style.color = linkColor.value;
  });
});

showLink.addEventListener("input", () => {
    if (showLink.checked == true) {
        link.forEach(link => {
            link.style = `display: flex; visibility: visible; pointer-events: auto; color: ${linkColor.value}`
        })
    } else {
        link.forEach(link => {
            link.style = `display: none; visibility: hidden; pointer-events: none;`
        })
    }
})

closeSettings.addEventListener("click", () => {
    const settings = document.getElementById('settings')
    settings.classList.remove('show')
})

function loadColors() { 
    arrow.forEach(arrow => {
       arrow.style.color = arrowColor.value; 
    });
    logos.forEach(logo => {
        logo.style.color = logoColor.value;
    });
    link.forEach(link => {
      link.style.color = linkColor.value;;
    });
    
}

function checkCheckbox() {
    const bookmarks = document.getElementById('bookmarks')
    if (showLink.checked == true, bookmarks.classList[1].slice(0, 6) != `right-`) {
        link.forEach(link => {
            link.style = `display: flex; visibility: visible; pointer-events: auto; color: ${linkColor.value}`
        })
    } else if (showLink.checked == false){
        link.forEach(link => {
            link.style = `display: none; visibility: hidden; pointer-events: none;`
        })
    }
}

function showSettings() {
    const settings = document.getElementById('settings')
    settings.classList.add('show')
}

function url(url) {
    window.open(url, "_self")
    
    logos.forEach(logo => {
        logo.addEventListener('mouseover', () => {
            logo.style.cursor = 'pointer'
        })
    })
}

function urlOpen(url) {
    window.open(url, "_blank")
    
    logos.forEach(logo => {
        logo.addEventListener('mouseover', () => {
            logo.style.cursor = 'pointer'
        })
    })
}

setInterval(() => {
    if (showLink.checked == false && bookmarks.getAttribute('class').slice(10) == 'right-bottom' || bookmarks.getAttribute('class').slice(10) == 'right-top') {
        checkCheckbox()
    } else if (showLink.checked == true) {
        checkCheckbox()
    }
}, 1, false);


window.onload = (() => {
    loadColors()
    checkCheckbox()
})