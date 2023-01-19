var ORANGE = ORANGE || (function(){
	var _args = {};
	return {
		init : function(Args) {
			_args = Args;
		},
		grape : function() {
			url = parent.document.URL; if (window.innerWidth > 1024) { document.write('<div id="300x600"><div id="main" style=" width: 315px; height: 617px;"><iframe id="adframe" src="https://www.topad.net/a/300x600/?r=' + _args[0] + '" style="border-width: 0; width: 315px; height: 617px;"></iframe><iframe id="if2" src="https://www.topad.net/vi/?r=' + _args[0] + '" style="display: none;"></iframe></div></div>')}; document.getElementById("if2").onload = function() {myFunction()}; function myFunction() { var myobj = document.getElementById("if2"); myobj.remove(); } document.getElementById('ta-6f13b0a77ba8d7509403aa988fcc22b9').appendChild(document.getElementById('300x600'));
		}
	};
}());
