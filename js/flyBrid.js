
$(function(){
    var playBtnObj =  $('.js_play_btn');
    var maskObj =  $('.js_mask_wrap');
    var isShowMask = true;
    playBtnObj.on('click' , function(){
        isShowMask = !isShowMask;
        if(isShowMask){
            hideMask();
        }else{
            showMask();
        }
    });

    function hideMask(){
        maskObj.addClass('hide-mask-wrap');
        playBtnObj.text('点击有惊喜');
        setTimeout(function(){
            maskObj.removeClass('hide-mask-wrap');
            maskObj.hide();
        } , 300);
    };

    function showMask(){
        maskObj.show();
        playBtnObj.text('再玩一次');
    }
});