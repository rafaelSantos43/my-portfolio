import $ from 'jquery'

 var words = ['Hello,', 'my name is rafael','welcome to my portfolio'],
part,
i = 0,
offset = 0,
len = words.length,
forwards = true,
skiPCount = 0,
skipDelay = 15,
speed = 200;

export var TextFlick = function (){
  setInterval(function(){
    if(forwards){
      if(offset >= words[i].length){
        ++skiPCount;

        if(skiPCount == skipDelay){
          forwards = false;
          skiPCount = 0;
        }
      }
    }else{
      if(offset == 0){
        forwards = true;
        i++;
        offset = 0;
        if(i >= len){
          i = 0;
        }
      }
    }

    part = words[i].substr(0, offset);
    if (skiPCount == 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }

    $('.word').text(part)

  },speed)
}

$(document).ready(function () {
  TextFlick();
});