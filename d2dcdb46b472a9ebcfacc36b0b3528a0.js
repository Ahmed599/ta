var STRAWBERRY = STRAWBERRY || (function(){
	var _args = {};
	return {
		init : function(Args) {
			_args = Args;
		},
		coconut : function() {
			url = parent.document.URL; if (window.innerWidth > 400) { document.write('<div id="300x250"><div id="main" style=" width: 310px; height: 267px;"><iframe id="adframe" src="https://www.topad.net/a/300x250/?r=' + _args[0] + '" style="border-width: 0; width: 310px; height: 267px;"></iframe><iframe id="if2" src="https://www.topad.net/vi/?r=' + _args[0] + '" style="display: none;"></iframe></div></div>')}; document.getElementById("if2").onload = function() {myFunction()}; function myFunction() { var myobj = document.getElementById("if2"); myobj.remove(); } document.getElementById('ta-d2dcdb46b472a9ebcfacc36b0b3528a0').appendChild(document.getElementById('300x250'));
		}
	};
}());
