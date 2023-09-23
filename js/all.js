
$(document).ready(function() {
    $('#filterInput').on('input', function() {
        var filterValue = $(this).val().toLowerCase();
        // 收索卡片
        $('#cardContainer .jq-card').each(function() {
            var cardText = $(this).text().toLowerCase();
            if (cardText.includes(filterValue)) {
                $(this).show(); // 符合條件，顯示卡片
            } else {
                $(this).hide(); // 不符合條件，隐藏卡片
            }
        });
    });

    
});

//分頁
$(function(){
    var $li = $('ul.tab-title li');
        $($li. eq(6) .addClass('active').find('a').attr('href')).siblings('.tab-inner').hide();
    
        $li.click(function(){
            $($(this).find('a'). attr ('href')).show().siblings ('.tab-inner').hide();
            $(this).addClass('active'). siblings ('.active').removeClass('active');
        });
    });
