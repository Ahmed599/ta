var APPLE = APPLE || (function(){
	var _args = {};
	return {
		init : function(Args) {
			_args = Args;
		},
		fig : function() {
			url = parent.document.URL; if (window.innerWidth > 728) { document.write('<div id="728x90"><div id="main" style=" width: 728px; height: 90px;"><iframe id="adframe" src="https://www.topad.net/a/728x90/?r=' + _args[0] + '" style="border-width: 0; width: 728px; height: 90px;"></iframe><iframe id="if2" src="https://www.topad.net/vi/?r=' + _args[0] + '" style="display: none;"></iframe></div>')}; document.getElementById("if2").onload = function() {myFunction()}; function myFunction() { var myobj = document.getElementById("if2"); myobj.remove(); } document.getElementById('ta-6577a9d59cd5515442b6a9ee6245d356').appendChild(document.getElementById('728x90'));
		}
	};
}());
