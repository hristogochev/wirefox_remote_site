// Modals

const downloadsModal = document.querySelector("#downloads-modal");
const downloadStartedModal = document.querySelector("#download-started-modal");
const howToUseModal = document.querySelector("#how-to-use-modal");
const creditsModal = document.querySelector("#credits-modal");

// Modals closing

const downloadsClose = document.querySelector("#downloads-close");
const downloadStartedClose = document.querySelector("#download-started-close");
const howToUseClose = document.querySelector("#how-to-use-close");
const creditsClose = document.querySelector("#credits-close")

downloadsClose.addEventListener("click", () => {
    downloadsModal.close();
});
downloadStartedClose.addEventListener("click", () => {
    downloadStartedModal.close();
});
howToUseClose.addEventListener("click", () => {
    howToUseModal.close();
});
creditsClose.addEventListener("click", () => {
    creditsModal.close();
});

// PC nav

const downloadsButtonNav = document.querySelector("#downloadsButtonNav");
const howToUseButtonNav = document.querySelector("#howToUseButtonNav");
const creditsButtonNav = document.querySelector("#creditsButtonNav");

downloadsButtonNav.addEventListener("click", () => {
    downloadsModal.showModal();
});
howToUseButtonNav.addEventListener("click", () => {
    howToUseModal.showModal();
});
creditsButtonNav.addEventListener("click", () => {
    creditsModal.showModal();
});

// Mobile nav

const navMenu = document.querySelector("#navMenu");
const openNavMenuButton = document.querySelector("#openNavMenuButton");
const closeNavMenuButton = document.querySelector("#closeNavMenuButton");

openNavMenuButton.addEventListener("click", () => {
    navMenu.classList.add("expanded");
});
closeNavMenuButton.addEventListener("click", () => {
    navMenu.classList.remove("expanded");
});

const downloadsButtonNavMobile = document.querySelector("#downloadsButtonNavMobile");
const howToUseButtonNavMobile = document.querySelector("#howToUseButtonNavMobile");
const creditsButtonNavMobile = document.querySelector("#creditsButtonNavMobile");

downloadsButtonNavMobile.addEventListener("click", () => {
    downloadsModal.showModal();
    navMenu.classList.remove("expanded");
});
howToUseButtonNavMobile.addEventListener("click", () => {
    howToUseModal.showModal();
    navMenu.classList.remove("expanded");
});
creditsButtonNavMobile.addEventListener("click", () => {
    creditsModal.showModal();
    navMenu.classList.remove("expanded");
});

// Download buttons

const downloadsButton = document.querySelector("#downloadsButton");
const androidDownloadButton = document.querySelector("#android-download");
const windowsDownloadButton = document.querySelector("#windows-download");
const linuxDownloadButton = document.querySelector("#linux-download");

downloadsButton.addEventListener("click", () => {
    downloadsModal.showModal();
});
androidDownloadButton.addEventListener("click", () => {
    downloadsModal.close();
});
windowsDownloadButton.addEventListener("click", () => {
    downloadsModal.close();
    downloadStartedModal.showModal();
});
linuxDownloadButton.addEventListener("click", () => {
    downloadsModal.close();
    downloadStartedModal.showModal();
});

// Open link if everything is ok
window.addEventListener("load", function () {
    console.log("Everything is loaded");
    const url_string = window.location.href; //window.location.href
    const url = new URL(url_string);
    const download = url.searchParams.get("download");
    if (download === "windows") {
        downloadStartedModal.showModal();
        document.location.href = "https://wirefox.app";
    }else if(download==="linux"){
        downloadStartedModal.showModal();
        document.location.href = "https://wirefox.app";
    }
});
