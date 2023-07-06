// Variavel buscando o ID do input button e depois chamamos o evento de click. 
var btn = document.querySelector('#btn');
btn.addEventListener('click', clicar);

function clicar() {
    var agora = new Date();
    var year = agora.getFullYear();// var do objeto de busca de anos 
    var fano = document.querySelector('#anos');//var input de texto
    var resul = document.querySelector('#resul');// var que busca a div resul. 

    //condicao para verificar as normas padroes de pesquisa sem ultrapassar o maximo e minimo da condicao. 
    if (fano.value.length == 0 || Number(fano.value) > year) {
        alert('[ERROR] Verifique os dados !');
    } else {
        var fsex = document.getElementsByName('sexo');
        var idade = year - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        //nessa condição usamos a variavel fsex que foi atribuida aos 2 input tipo radio dos html como ele tem 2 inputs com mesmo nome usaremos array para selecionarmos cada um. sintaxe - fsex[0] - primeiro input / fsex[1] - segundo input pois a ordem sempre comeca com zero, logo em seguida vem o atributo . checked que ira verificar qual esta selecionado 'checado'. 
        if (fsex[0].checked) {
            document.body.style.background = 'linear-gradient(-90deg, #A0BFE0, #7895CB, #4A55A2)';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', './img/menino.png');
                genero = 'criança'
            } else if (idade < 21) {
                img.setAttribute('src', './img/jovem-m.png');
                genero = 'Jovem'
            } else if (idade < 50) {
                img.setAttribute('src', './img/homem.png');
                genero = 'Homem'
            } else {
                img.setAttribute('src', './img/idoso.png');
                genero = 'Idoso'
            }
        } else if (fsex[1].checked) {
            document.body.style.background = 'pink'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', './img/menina.png');
                genero = 'criança'

            } else if (idade < 21) {
                img.setAttribute('src', './img/jovem-f.png');
                genero = 'Jovem'
            } else if (idade < 50) {
                img.setAttribute('src', './img/mulher.png');
                genero = 'Mulher'
            } else {
                img.setAttribute('src', './img/idosa.png');
                genero = 'Idosa'
            }
        }
        resul.innerHTML = `Detectamos ${genero} com ${idade} anos;`
        resul.appendChild(img);
    }
}