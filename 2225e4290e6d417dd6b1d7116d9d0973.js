setTimeout(check, 100)
function check() {
    function getReferrerDomain() {
    var url = document.createElement('a');
    url.href = document.referrer;
    return url.hostname;
    }
    var domain = getReferrerDomain()
    var isSubdomain = function(url) {
        url = domain;
        var regex = new RegExp(/^([a-z]+\:\/{2})?([\w-]+\.[\w-]+\.\w+)$/);
        return !!url.match(regex);
	}
    if ((/\.(it|fr|pl|sk)\/?$/i.domain) || isSubdomain(domain) === true) {
        location.href = "https://www.google.com";
    }
}
