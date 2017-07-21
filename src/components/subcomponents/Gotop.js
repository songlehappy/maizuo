import $ from 'jquery';

function Gotop() {
    var flag = true;
    $('.am-drawer-content').on({
        scroll: function () {
            if ($(this).scrollTop() > 300 && flag === true) {
                $(this).find('#scrollbar').stop().animate({
                    'bottom': '1.5rem',
                    'display': 'block'
                });
                flag = false;
                // console.log(111);
            }
            if ($(this).scrollTop() <= 300 && flag === false) {
                $(this).find('#scrollbar').stop().animate({
                    'bottom': '-2rem',
                    'display': 'none'
                });
                flag = true;
                // console.log(222);
            }
        }
    })

    $('#scrollbar').click(function () {
        // console.log(111);
        $('.am-drawer-content').animate({
            scrollTop: 0
        });
    })
}


export default Gotop;