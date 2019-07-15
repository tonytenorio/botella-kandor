// Add Your Scripts here
(function() {

    const $redBox = $('.capaRoja');

    function move(dir){

        const tl = new TimelineMax();

        switch(dir){
            case "up":
            tl.to($redBox,0.45,{
                y:"-=100"
            });

            break;

            case "down":
            tl.to($redBox,0.45,{
                y:"+=100"
            });

            break;
            
            case "left":
            tl.to($redBox,0.45,{
                x:"-=100"
            });

            break;
            
            case "right":
            tl.to($redBox,0.45,{
                x:"+=100"
            });

            break;
            
            default:
            tl.to($redBox,0.45,{
                x:"0",
                y:"0"
            });

            break;
        }

    }

    $(document).on('keypress',function(e) {

        const keyCode = e.keyCode;
        
        switch(keyCode){
            case 119:
                move("up");
            break;

            case 115:
                move("down");
            break;
            
            case 100:
                move("right");
            break;
            
            case 97:
                move("left");
            break;
            
            default:
                move("res");
            break;
        }

    });


    $('button').on('click',function(){
        const dir = $(this).data('dir');

        move(dir);
    });

})();