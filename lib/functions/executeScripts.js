kaze.executeScripts = function() {
	var aeroScripts = kaze.content.getElementsByTagName('script');

	for(var n = 0; n < aeroScripts.length; n++)
		eval(aeroScripts[n].innerHTML);
};