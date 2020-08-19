(function(){
    //define 2 objects
    var doc = document.documentElement;
    var w = window;
    /*
    define four variables: currScroll, prevScroll, curDirection, prevDirection
    */
    var curScroll = prevScroll = w.scrollY || doc.scrollTop;
    var curDirection = prevDirection = 0; //user hasnt scrolled yet

    /*
    how it works:
    --------------

    create a scroll event listener

    create a function to check scroll position on each scroll event,
    compare curScroll and prevScroll values to find the scroll direction
    scroll up - 1, scroll down - 2, initial - 0

    then set the direction value to curDirection

    compare curDirection and prevDirection

    if they are different, call another function to show or hide the header

    example:
    step 1: user scrolls down: curDirection 2 , prevDirection 0 > hide header
    step 2: user scrolls down again: curDirection 2, prevDirection 2 > do nothing(already hidden)
    step 3: user scrolls up: curDirection 1, prevDirection 2 > show the header
    */

    var header = document.getElementById('site-header');

    var checkScroll = function() {
      curScroll = w.scrollY || doc.scrollTop;
      if(curScroll > prevScroll) {
        //scrolled down
        curDirection = 2;
      }  
      else {
        //scrolled up
        curDirection = 1;
      }

      if(curDirection !== prevDirection) {
        toggleHeader();
      }
      prevDirection = curDirection;
      prevScroll = curScroll;
    };

    var toggleHeader = function() {
        if(curDirection === 2){
          header.classList.add('hide');
        }

        else if(curDirection === 1){
          header.classList.remove('hide');
        }
    };

    window.addEventListener('scroll', checkScroll);

})();

