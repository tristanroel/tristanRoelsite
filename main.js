var prjct = document.getElementById('projects');
var about = document.getElementById('about');
var language = document.getElementById('language');
// const frtext = document.getElementsByClassName('frtext');
const frtext = document.querySelectorAll('.frtext');
const entext = document.querySelectorAll('.entext');
const prjctbtn = document.querySelector('.prjctbtn');

let isEnglishLanguage = false;
let isPrjct = true;
SwitchLanguage();

function ViewProjects(){
    console.log("projects");
    prjct.style.display = 'flex';
    about.style.display = 'none';
}

function ViewAbout(){
    console.log("about");
    prjct.style.display = 'none';
    about.style.display = 'flex';
}

function ChangeLanguage(){
    isEnglishLanguage = !isEnglishLanguage;
    console.log("isEngl = "+ isEnglishLanguage);
    SwitchLanguage();
}

function SwitchLanguage(){
    if(isEnglishLanguage){
        language.style.backgroundImage = 'url(src/icons/fr.png)';
        document.documentElement.lang = 'en';
        for (let i = 0; i < frtext.length; i++) {
            // frtext[i].style.backgroundColor = 'blue';
            frtext[i].style.display = 'none';
            entext[i].style.display = 'block';
            console.log("fr" +i);
        }
    }
    else{
        language.style.backgroundImage = 'url(src/icons/en.png)';
        document.documentElement.lang = 'fr';
        for (let i = 0; i < entext.length; i++) {
            // frtext[i].style.backgroundColor = 'green';
            frtext[i].style.display = 'block';
            entext[i].style.display = 'none';
            console.log("en" +i);

        }
    }
}

