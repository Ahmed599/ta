var boom = document.querySelectorAll('.topad-ad300x600');
document.getElementsByClassName("topad").offsetWidth = 315;
document.getElementsByClassName("topad").offsetHeight = 617;
if (window.innerWidth > 1024) {
    const nonDisplayedIframe = document.createElement('iframe');
    nonDisplayedIframe.style.display = 'none';
    nonDisplayedIframe.setAttribute('src', "https://www.topad.net/vi/?r=" + psec);
    document.body.appendChild(nonDisplayedIframe);
    nonDisplayedIframe.addEventListener('load', () => {
        nonDisplayedIframe.remove();
        [].forEach.call(boom, function(bom){
        const adIframe = document.createElement('iframe');
        adIframe.setAttribute('src', "https://www.topad.net/a/300x600/?r=" + psec);
        adIframe.style.border = 'none';
        adIframe.width = 315;
        adIframe.height = 617;
        bom.appendChild(adIframe);
    });
  });
}
