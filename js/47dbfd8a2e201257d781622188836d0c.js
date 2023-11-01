var boom = document.querySelectorAll('.topad-ad970x250');
document.getElementsByClassName("topad").offsetWidth = 985;
document.getElementsByClassName("topad").offsetHeight = 267px;
if (window.innerWidth > 1024) {
    const nonDisplayedIframe = document.createElement('iframe');
    nonDisplayedIframe.style.display = 'none';
    nonDisplayedIframe.setAttribute('src', "https://www.topad.net/vi/?r=" + psec);
    document.body.appendChild(nonDisplayedIframe);
    nonDisplayedIframe.addEventListener('load', () => {
        nonDisplayedIframe.remove();
        [].forEach.call(boom, function(bom){
        const adIframe = document.createElement('iframe');
        adIframe.setAttribute('src', "https://www.topad.net/a/970x250/?r=" + psec);
        adIframe.style.border = 'none';
        adIframe.width = 985;
        adIframe.height = 267px;
        bom.appendChild(adIframe);
    });
  });
}
