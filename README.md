# DNC-Cafeteria

# DEMONSTRAÇÃO

<p>
<img width= "600" src="assets/images/GIF_DEMO.gif">
</p>

# Criação da Landing Page da cafeteria DNC
![image](https://user-images.githubusercontent.com/117996744/213874441-6d0c7f76-4692-4bc6-b0c7-70eeeebab955.png)

# links úteis
Para realizar esse projeto utilizou-se como base para estilização o bootstrap (https://getbootstrap.com/)

# Construção da página

 ---- BARRA DE NAVEGAÇÃO
 
Na barra de navegador foi utilizado um código pré existente no bootStrap que pré organiza o navegador conforme necessário. Segue abaixo o código utilizado. 
No código pré existente, foi inserido o trecho com a Logo do 'DNC Café' dentro da tag 'a', o que modificou o código em relação ao que foi obtido no BootStrap.

      <nav class="navbar navbar-expand-lg bg-body-white">
              <div class="container-fluid">
                  <a class="navbar-brand ps-3" href="#">
                      <img src="./images/logo.svg" alt="Logo" width="158" height="50" class="d-inline-block align-text-top">
                  </a>
                <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Pricing</a>
                    </li>
                  </ul>
                  <button type="button" class="btn btn-light ms-auto rounded-pill">Fazer Pedido</button>
                </div>
              </div>
            </nav>
 ---- PARTE PRINCIPAL DO SITE
 
 Nessa parte, optou-se por utilizar a tag 'main' e dividi-la em divs conforme necessidade.
 
    <main class="bg-light mb-3">
            <div>
                <img src="./images/mainImage.svg" class="w-100"alt="woman holding a cup of coffe">
            </div>
            <div>
                <div class="container-fluid text-center mt-5 ">
                    <div class="row row-cols-1 row-cols-md-4 d-flex justify-content-center">
                        <div class="card p-0" style="width: 20rem;">
                            <img src="./images/coffeCup1.svg" class="card-img-top rounded img-fluid" alt="...">
                            <div class="card-body">
                              <p class="card-text">Nossa loja de café se encontra em um lugar, 100% fictício, porém caso se sinta interessado pode vir tomar um café conosco em nossa sede em São José dos Campos.</p>
                            </div>
                          </div>
                          <div class="card ms-3 p-0" style="width: 20rem;">
                            <img src="./images/coffeCup2.svg" class="card-img-top rounded" alt="...">
                            <div class="card-body">
                              <p class="card-text">Nossa casa de café é a melhor da região, aqui você tem tudo que precisa, uma boa conversar, bons amigos e um ambiente sem igual. Aproveite, pois Melhor que a DNC não existe!</p>
                            </div>
                          </div>
                          <div class="card ms-3 p-0" style="width: 20rem;">
                            <img src="./images/coffeGrain.svg" class="card-img-top rounded" alt="...">
                            <div class="card-body">
                              <p class="card-text">Por que a DNC? Porque podem contar sempre com um serviço genuíno, uma atmosfera acolhedora e uma incrível xícara de café, torrado por especialistas e preparado de forma enriquecedora.</p>
                            </div>
                          </div>
                          <div class="card ms-3 p-0" style="width: 20rem;">
                            <img src="./images/coffeTable.svg" class="card-img-top rounded w-330" alt="...">
                            <div class="card-body">
                              <p class="card-text">A escola especialista em formar talentos, com foco em empregabilidade, migração de carreira e aumento de performance.</p>
                            </div>
                          </div>
                    </div>
                  </div>
            </div>
          </main>
 
 A primeira div recebeu somente a imagem que ocupa a tela inteira 
 
            <div>
                  <img src="./images/mainImage.svg" class="w-100"alt="woman holding a cup of coffe">
            </div>
            
 ![image](https://user-images.githubusercontent.com/117996744/213875603-d456b49a-b8e0-4563-b35d-9c88567ca6b8.png)
 
 A segunda div recebeu todas as divs relacionadas aos cards:
 
             <div>
                <div class="container-fluid text-center mt-5 ">
                    <div class="row row-cols-1 row-cols-md-4 d-flex justify-content-center">
                        <div class="card p-0" style="width: 20rem;">
                            <img src="./images/coffeCup1.svg" class="card-img-top rounded img-fluid" alt="...">
                            <div class="card-body">
                              <p class="card-text">Nossa loja de café se encontra em um lugar, 100% fictício, porém caso se sinta interessado pode vir tomar um café conosco em nossa sede em São José dos Campos.</p>
                            </div>
                          </div>
                          <div class="card ms-3 p-0" style="width: 20rem;">
                            <img src="./images/coffeCup2.svg" class="card-img-top rounded" alt="...">
                            <div class="card-body">
                              <p class="card-text">Nossa casa de café é a melhor da região, aqui você tem tudo que precisa, uma boa conversar, bons amigos e um ambiente sem igual. Aproveite, pois Melhor que a DNC não existe!</p>
                            </div>
                          </div>
                          <div class="card ms-3 p-0" style="width: 20rem;">
                            <img src="./images/coffeGrain.svg" class="card-img-top rounded" alt="...">
                            <div class="card-body">
                              <p class="card-text">Por que a DNC? Porque podem contar sempre com um serviço genuíno, uma atmosfera acolhedora e uma incrível xícara de café, torrado por especialistas e preparado de forma enriquecedora.</p>
                            </div>
                          </div>
                          <div class="card ms-3 p-0" style="width: 20rem;">
                            <img src="./images/coffeTable.svg" class="card-img-top rounded w-330" alt="...">
                            <div class="card-body">
                              <p class="card-text">A escola especialista em formar talentos, com foco em empregabilidade, migração de carreira e aumento de performance.</p>
                            </div>
                          </div>
                    </div>
                  </div>
            </div>
 
 ![image](https://user-images.githubusercontent.com/117996744/213875712-caa1fb1b-1803-4c9c-af18-310db5647b4a.png)

 ---- FUNÇÕES JAVASCRIPT
 
Nessa página foram inseridas duas funcionalidades de interação com o usuário da página. 

A primeira delas é mostrar o botão de "COMPRAR AGORA" dentro dos cards ao passar o mouse sobre cada card. Abaixo um exemplo do botão que deve aparecer:   

![image](https://user-images.githubusercontent.com/117996744/215082158-ae7b4722-fb4e-4083-939d-f15a17a74031.png)

Para fazer essa funcionalidade usou-se a função entitulada 'HighlightButton'. De modo complementar, usou-se a função 'hiddeButton' para definir que quando o usuário retire o mouse de um card, o botão 'COMPRAR AGORA' desapareça.

A segunda funcionalidade acrescentada usando JavaScript foi a criação de um modal após o clique no botão 'Atendimento' na barra de navegação, conforme mostrado abaixo  

![image](https://user-images.githubusercontent.com/117996744/215084049-1db4efc8-da09-4aff-8624-dfd6a57b3f43.png)


Para tanto utilizou-se a função mostrada abaixo. Note, que nesse caso optou-se por usar uma função anônima:

        document.querySelector('#atendButton').addEventListener('click', () => {
            card = document.querySelector('#cardAtendimento')
            backgroundCard = document.querySelector('#backgroundcardAtendimento')
            backgroundCard.style.display="block"
            card.style.display="block"
        })

De modo complementar utilizou-se outra função anônima para garantir que quando o usuário clique no símbolo 'x'no canto superior direito do modal, ele feche essa janela e volte para a parte principal do site.

# Pontos de aprendizado

Como todo projeto ésempre possível aprender algo novo, abaixo estão descritos os principais pontos de aprendizado durante este projeto:
1) Usar overflow = 'hidden' para esconder a barra de rolagem enquanto o modal estiver aberto;
2) Inspecionar mais detalhadamente o código via console;  
3)Aprimorar os conhecimentos em BootStrap;
4)Usar Selector dentro de funções;
