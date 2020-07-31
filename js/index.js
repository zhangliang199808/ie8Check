// 轮播图
$('#demo1').slideBox({
    direction: 'left', //left,top
    duration: 0.6, //unit:seconds
    easing: 'swing', //swing,linear
    delay: 3, //unit:seconds
    startIndex: 0,
    hideClickBar: false,
    clickBarRadius: 5, //unit:px
    hideBottomBar: false,
    width: 800,
    height: 480
});

 // 公安要闻js
 $('.news_content_tb1').click(function(e) {
    $('.news_content_tb1').removeClass('news_content_tb1_style')
    $('.news_content_ul').removeClass('display_block')
    $(this).addClass('news_content_tb1_style')
    $('.news_content_ul').eq($(this).index()).addClass('display_block')
})

// 工作督办等通知栏
var noticeBox = document.getElementById('notice')
var noticeTab = document.getElementsByClassName('notice_tab')
for (var a = 0; a < noticeTab.length; a++) {
    (function(){
        var noticeTabItem = noticeTab[a];
        var noticeTitle = noticeTabItem.getElementsByClassName('notice_title1')
        var noticeTitleText = noticeTabItem.getElementsByClassName('notice_title1_span')
        var noticeUl = noticeTabItem.getElementsByClassName('notice_ul')
        for (var b = 0; b < noticeTitle.length; b++) {
            (function() {
                var noticeTitleItem = noticeTitle[b];
                var noticeUlItem = noticeUl[b]
                noticeTitleItem.onclick = function() {
                    eval(console.log(1111))
                    console.log(222)
                    // 删除点击这个部分的所有class
                    for (let c = 0; c < noticeTitle.length; c++) {
                        (function () {
                            noticeTitle[c].classList.remove('notice_title1_border')
                            noticeTitleText[c].classList.remove('notice_title1_color')
                            noticeUl[c].classList.remove('display_block')
                        })();
                    }
                    this.classList.add('notice_title1_border')
                    var noticeItemSpan = this.getElementsByClassName('notice_title1_span')[0]
                    noticeItemSpan.classList.add('notice_title1_color')
                    noticeUlItem.classList.add('display_block')
                }
            })();
        }
    })();
}