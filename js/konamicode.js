/**
  KonamiCode
  ==========
  Checks wether the input matches the sequence stored in (cod).
  Uses an temp circular array (tmp) with the same length of the code we're looking for
  A Pointer (start) marks the start of the circular array.
*/
var KonamiCode = function(callback){
  var api = {};
  var cod = [38,38,40,40,37,39,37,39,66,65]; // key values ↑↑↓↓←→←→BA
  var ptr = cod.length-1; // write pointer
  var start = 0; // read pointer
  var tmp=[]; // circular vector of pressed keys

  api.init = function(){
    for (var i = 0; i < tmp.length; i++)  tmp[i]=-1;
    document.addEventListener('keydown', function(event) {
      if(ptr==cod.length-1) ptr=0; else ptr++; // write header position
      tmp[ptr]=event.which;
      if(ptr==cod.length-1) start=0; else start++;// read header position
      if(tmp[start]>=0){// if the temp array is filled
        match=1; // array compare
        for (var i = 0; i < cod.length; i++) match*=((cod[i]==tmp[(start+i)%(cod.length)]) ? 1 : 0);
        if(match) callback();
      }
      return api;
    })
  }

  /** TODO :
    clear
    add logs
    multiple instances management
  */
  return api;
}
