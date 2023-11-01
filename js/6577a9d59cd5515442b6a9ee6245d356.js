var boom = document.querySelectorAll('.topad-ad728x90');
document.getElementsByClassName("topad").offsetWidth = 734;
document.getElementsByClassName("topad").offsetHeight = 94;
if (window.innerWidth > 1024) {
    const nonDisplayedIframe = document.createElement('iframe');
    nonDisplayedIframe.style.display = 'none';
    nonDisplayedIframe.setAttribute('src', "https://www.topad.net/vi/?r=" + psec);
    document.body.appendChild(nonDisplayedIframe);
    nonDisplayedIframe.addEventListener('load', () => {
        nonDisplayedIframe.remove();
        [].forEach.call(boom, function(bom){
        const adIframe = document.createElement('iframe');
        adIframe.setAttribute('src', "https://www.topad.net/a/728x90/?r=" + psec);
        adIframe.style.border = 'none';
        adIframe.width = 734;
        adIframe.height = 94;
        bom.appendChild(adIframe);
    });
  });
}
