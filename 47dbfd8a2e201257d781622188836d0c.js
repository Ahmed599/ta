var PINEAPPLE = PINEAPPLE || (function(){
	var _args = {};
	return {
		init : function(Args) {
			_args = Args;
		},
		plum : function() {
			url = parent.document.URL; if (window.innerWidth > 985) { document.write('<div id="970x250"><div id="main" style=" width: 985px; height: 267px;"><iframe id="adframe" src="https://www.topad.net/a/970x250/?r=' + _args[0] + '" style="border-width: 0; width: 985px; height: 267px;"></iframe><iframe id="if2" src="https://www.topad.net/vi/?r=' + _args[0] + '" style="display: none;"></iframe></div></div>')}; document.getElementById("if2").onload = function() {myFunction()}; function myFunction() { var myobj = document.getElementById("if2"); myobj.remove(); } document.getElementById('ta-47dbfd8a2e201257d781622188836d0c').appendChild(document.getElementById('970x250'));
		}
	};
}());
