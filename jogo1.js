$(document).ready(function(){

    $('h1').fadeOut('10000000').fadeIn('200000').fadeOut('10000000').fadeIn('200000')


    $("#answer").submit(function(e){
        e.preventDefault();


        const resultado ={
            selecionado : $("input:checked")[0],
            certo: $("[data-resultado='true")[0],
        }

        if(resultado.selecionado == resultado.certo){
            $(resultado.selecionado).parent().css("background", "green")
            window.alert('Acertoooouu')
        }else{
            $(resultado.selecionado).parent().css("background", "red")
            window.alert('Errrrouuuu!')
        }
    })

    $("#answer2").submit(function(e){
        e.preventDefault();


        const resultado ={
            selecionado : $("input:checked")[1],
            certo: $("[data-resultado='true")[1],
        }

        if(resultado.selecionado == resultado.certo){
            $(resultado.selecionado).parent().css("background", "green")
            window.alert('Acertoooouu')
        }else{
            $(resultado.selecionado).parent().css("background", "red")
            window.alert('Errrrouuuu!')
        }
    })

    $("#answer3").submit(function(e){
        e.preventDefault();


        const resultado ={
            selecionado : $("input:checked")[2],
            certo: $("[data-resultado='true")[2],
        }

        if(resultado.selecionado == resultado.certo){
            $(resultado.selecionado).parent().css("background", "green")
            window.alert('Acertoooouu')
        }else{
            $(resultado.selecionado).parent().css("background", "red")
            window.alert('Errrrouuuu!')
            $(resultado.certo).parent().addClass("resultado_certo")
        }

        $("input[type=submit]").prop("disabled", true);
    })
});