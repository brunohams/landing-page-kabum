$(function ()
{
    /**
     * jQuery validator
     */
    // validate signup form on keyup and submit
    $("form").validate(
    {
        rules:
        {
            email:
            {
                required: true,
                email: true
            },
            topic:
            {
                required: "#newsletter:checked",
                minlength: 2
            },
            agree: "required"
        },
        messages:
        {
            email: "Informe um endereço de e-mail válido"
        }

    });

});


/** Sobrescreve a função do alert */
function alert (prMensagem, prTitulo, prTipo, prFunction)
{

    if (prTitulo === undefined)
    {
        prTitulo = '';
    }

    if (prMensagem === undefined)
    {
        prMensagem = '';
    }

    if (prTipo === undefined)
    {
        prTipo = 'warning';
    }

    if (prFunction === undefined)
    {
        prFunction = function () {};
    }

    swal
    ({
        title: prTitulo,
        text: prMensagem,
        type: prTipo
    }).then(function (e) {
            prFunction(e)
        }
    );

}

/** Sobrescreve a função do confirm */
function confirm (prMensagem, prTitulo, prTipo, prFunction)
{

    /** Se vier com titulo undefinida, define como nula */
    if (prFunction === undefined)
    {
        prFunction = function () {};
    }

    swal
    ({
        title: prTitulo,
        text: prMensagem,
        type: prTipo,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar!'
    }).then(function () {},
        prFunction);
}

