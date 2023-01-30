$(function(){
    $('.btn-add').click(function(){
        var el = '<div class="anotacao-single"><textarea placeholder="Sua nova anotação..."></textarea></div>'
        $('.container-anotacoes').hide().append(el).fadeIn();
          

        var textArea = $('.anotacao-single').last().find('textarea');


        var date = new Date();
        var hh = date.getHours();
        var mm = date.getMinutes();
    

        var finalTime = hh+":"+mm;
        textArea.html("Nova anotação em: "+finalTime)

        

    })



   
})