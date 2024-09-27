$(document).ready(function(){
    $('.images').slick({
        autoplay:true
    });

    $('.menu-amburguer').click(function(){
        $('nav').slideToggle();
    });

    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules:{
            nome:{
                required:true
            },
            email:{
                required:true,
                email:true
            },
            telefone:{
                required:true
            },
            mensagem:{
                required:true
            },
            veiculoInteresse:{
                required:false
            }
        },
        messages:{
            nome: 'Porfavor, insira o seu nome.',

            email: 'Porfavor, insira o seu E-mail.',

            telefone: 'Porfavor, insira o seu telefone.'
        },
        submitHandler: (function(form){
            console.log(form)
        }),

        invalidHandler: (function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos)
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos preenchidos de forma incorreta.`);
            }
        })

    });

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');
        
        const veiculointeressado = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(veiculointeressado);

        $('html').animate({
            scrollTop: destino.offset().top
        },1000)
    })
})