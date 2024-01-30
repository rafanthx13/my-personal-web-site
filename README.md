# Meu Portifólio

[https://rafaelmassis.com.br/](https://rafaelmassis.com.br/)

## Updates

06/04/2022

+ Verificar o hover no menu e outros efeitos [x]
+ Aumentar tamanho do ícone do menu [x]
+ Adicionar img-hover em todos os projetos (só está em 2) [x]
+ Remover fundo de imagens que deveriam ser trasnparentes [x]

05/04/2022

+ Inserção do gulp e comandos npm para gerar CSS [x]
+ Download de certificado
+ Botões abaixo do Hero
+ Seção de Status
+ Hover em imagem para ir para outro link
+ Adiçâo de imagem nas trajetórias (experiência/educação)
+ Troca de imagem principal

LONG

+ Adicionar Fonte Personalizada
+ Adicionar em outras línguas
+ Adicionar outras rede sociais

## Como fazer Deploy

Executar os 2 últimos scripts de package.json, e se atentar ao css importado

Hostinger > Hospedagem > Gerencair arquivos (Beta)

Insira HTML; remova a pasta assets e coloque uma nova; antes de deletar tudo, faz um backup e deixe em old-versions

Colocar como ZIP toda a psta exceto node_modules e outro zip se tiver

### Mudar barra de menu

comprimento horizoontal das 3 barras

````css
header .menu-btn span, header .menu-btn span:after, header .menu-btn span:before {
    position: absolute;
    width: 14px
};
````

Barra supeior
original: top: -5px; => -7px (aumenta dist entre barra 1 e 2)

````css
header .menu-btn span:after, header .menu-btn span:before {
    content: "";
    top: -5px;
    left: 0;
}
````

Barra inferiror

`````css
header .menu-btn span:after {
    top: auto;
    bottom: -7px;
}
````
