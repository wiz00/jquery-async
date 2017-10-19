/**
 * jQuery Async - paste compresed version into your <head> tag.
 * @link https://github.com/wiz00/jquery-async
 * @author Aleks Susik
 * @license MIT
 */
 
(function(w){	
	var _$queue = [];
	var $ = function(a){
		_$queue.push(a);
	};
	var _$queueTimer = setInterval(function(){
		if ( typeof jQuery == 'function' ) {
			clearInterval(_$queueTimer);
			for ( var i=0, len = _$queue.length; i<len; i++ ) {
				jQuery(_$queue[i]);
			}
		}
	}, 50);

	if ( typeof w.$ !== 'undefined' ) {
		w.$ = $;
	}
})(window);
