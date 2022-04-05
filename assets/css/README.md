# Como Gerar CSS Otimizado

Esse projeto tem como base o **Tailwind**, usando npm e a junçâo e otimização usando **Gulp**

## Fazer Update no CSS, de DEV para PROD

Enquanto estiver desenvolvendo
ative full-tailwin (vai improtr todas asc classes do arquivo grande)
ative my-style (e programe direto nele)

Depois, apos feito faça os 3 scripts do package.json e desetive os 2 anteriores

## 1. Arquivos

my-style.css = CSS pessoal
components/ = CSS de componentes
tailwind/ todo o CSS do Tailwind
ultimate-style.min.css = CSS usado final

O arquivo `ultimate-style.css` é antes de criar esse procesos do gulp

## 1. Gerando Tailwind

1. Apartir do script a seguir e criado o arquivo ``full-tailwind`` que tem todas as classe no tailwind mas aquilo que você definir em `base-tailwind`

````
"create:tailwind": "tailwind build -i ./assets/css/base-tailwind.css -o ./assets/css/full-tailwind.css",
````

**Em `base-taiwind.css` você pode personalizar colocando classs proprias que agrega várioas classes css e assim reduzir o tamaho das classe no arquivo html. Infelismente eu nâo fiz isso no início do projeto. É uma FORMA DE MASCARAR**

2. Para mandar para produção execute o script seguir: é criado, minificado, limpo e otimizado o css, e fica bem menor, só usando o que foi usado nos arquivos

````
"build:tailwind": "npx tailwindcss build -i ./assets/tailwind/base-tailwind.css -o ./assets/css/clean-tailwind.css --minify NODE_ENV=production"
````
## 2. Build com Gulp

O gulp vai juntar todos os arquivos css que importam e :
+ juntar num unica arquivo
+ minificar
+ criar source map (esse arquivo ajuda na hora de depurarr o css)
+ e vai criar como arquivo final `ùltimate-syle.min.css`

## Gerenciar TailWind e CSS

 "scripts": {
   // Le base-taiwind e gera todo o taiwid completo com o que vem de base-tailwind
    "create:tailwind": "tailwind build -i ./assets/tailwind/base-tailwind.css -o ./assets/css/full-tailwind.css",
  // faz o mesmo que o caso anteiror mas gera minificado
    "build:tailwind": "npx tailwindcss build -i ./assets/tailwind/base-tailwind.css -o ./assets/css/clean-tailwind.css --minify NODE_ENV=production"
  },

## Gulp

https://blog.da2k.com.br/2015/02/21/sourcemaps-debugando-js-e-css-minificados/

Exemplo de gulpfile completo ULTRAAAAAAAAAAAAAA
https://www.schoolofnet.com/forum/topico/gulpfilejs-3015

Por Globalmente
npm install --global gulp-cli

Vai gerar o CSS que queremos

npm install --save-dev gulp gulp-concat gulp-sourcemaps gulp-cssnano gulp-rename

gulp-sourcemaps: Serve para debugar css minificado. Como está minificado, se der um erro, vai msotrar como uma única linha. Ao invez disso você pode ter esse arquivo .map que vai ajudar na hora de debugar ele no  console F12

exemplode gulp https://javascript.hotexamples.com/examples/gulp-cssnano/-/default/javascript-default-function-examples.html

Executar: no temrinal ```gulp`` na raiz do gulp file
