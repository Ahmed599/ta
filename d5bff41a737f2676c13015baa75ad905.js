var WATERMELON = WATERMELON || (function(){
	var _args = {};
	return {
		init : function(Args) {
			_args = Args;
		},
		banana : function() {
			url = parent.document.URL; if (window.innerWidth > 1024) { document.write('<div id="160x600"><div id="main" style=" width: 175px; height: 617px;"><iframe id="adframe" src="https://www.topad.net/a/160x600/?r=' + _args[0] + '" style="border-width: 0; width: 175px; height: 617px;"></iframe><iframe id="if2" src="https://www.topad.net/vi/?r=' + _args[0] + '" style="display: none;"></iframe></div></div>')}; document.getElementById("if2").onload = function() {myFunction()}; function myFunction() { var myobj = document.getElementById("if2"); myobj.remove(); } document.getElementById('ta-d5bff41a737f2676c13015baa75ad905').appendChild(document.getElementById('160x600'));
		}
	};
}());
