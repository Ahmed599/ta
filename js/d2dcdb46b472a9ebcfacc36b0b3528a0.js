var boom = document.querySelectorAll('.topad-ad300x250');
document.getElementsByClassName("topad").offsetWidth = 310;
document.getElementsByClassName("topad").offsetHeight = 267;
if (window.innerWidth > 400) {
    const nonDisplayedIframe = document.createElement('iframe');
    nonDisplayedIframe.style.display = 'none';
    nonDisplayedIframe.setAttribute('src', "https://www.topad.net/vi/?r=" + psec);
    document.body.appendChild(nonDisplayedIframe);
    nonDisplayedIframe.addEventListener('load', () => {
        nonDisplayedIframe.remove();
        [].forEach.call(boom, function(bom){
        const adIframe = document.createElement('iframe');
        adIframe.setAttribute('src', "https://www.topad.net/a/300x250/?r=" + psec);
        adIframe.style.border = 'none';
        adIframe.width = 310;
        adIframe.height = 267;
        bom.appendChild(adIframe);
    });
  });
}
