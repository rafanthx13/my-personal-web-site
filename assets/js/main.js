// jquery


$(function () {
	'use strict';

  // LOADER
  $(window).on("load resize", function () {
    $('#loader-overlay').fadeOut('slow', function () {
      $(this).remove();
    });
  });

  /* Descer slide e mudar menu */
  if($('#home').length) {
		$(window).on('scroll', function(){
			var scrollPos = $(window).scrollTop();
			$('.top-menu ul li a ').each(function () {
				var currLink = $(this);
        var extension = currLink.context.href.slice(-3)
        if(extension != 'pdf' && extension != 'tml') {
          var refElement = $(currLink.attr("href"));
          if (refElement.offset().top - 30 <= scrollPos) {
            $('.top-menu ul li').removeClass("active");
            currLink.closest('li').addClass("active");
          }
        }
			});
		});
	}

  /* Open Top Menu */
  $('.image-hero').on('click', '.menu-btn', function(){
    if($('.top-menu').hasClass('active')){
      $('.top-menu').removeClass('active');
    } else {
      $('.top-menu').addClass('active');
    }

    return false;
  });

  /* Fixed Top Menu on scroll */
  $(window).on('scroll', function(){
    if ($(this).scrollTop() > 100) {
      $('.top-menu').addClass('fixed');
    }
    else {
      $('.top-menu').removeClass('fixed');
    }
  });

});

// vue iterate

var data = {
  projects: [
    {
      name: 'LogPriceApp',
      git: 'https://github.com/rafanthx13/log-price-comparator',
      link: 'https://price-log-app.herokuapp.com/',
      tags: ['WebPage', 'Vue.JS'],
      img_src: 'logPriceApp.webp',
      desc: 'Aplicação Web para acompanhamento e evolução de preços de produtos locais',
    },
    {
      name: 'LogPriceServer',
      git: 'https://github.com/rafanthx13/price-log-re-server',
      link: 'https://library-my-api.herokuapp.com/swagger-ui.html',
      tags: ['Node', 'API REST', 'Express', 'BDD Jest'],
      img_src: 'logPriceServer.webp',
      desc: 'API REST da aplicação LogPriceApp'
    },
    {
      name: 'Portifolio de DataScience',
      git: 'https://github.com/rafanthx13/ds-portifolio',
      link: 'https://github.com/rafanthx13/ds-portifolio',
      tags: ['DataScience', 'Python', 'Kaggle', 'MachineLearning', 'EDA'],
      img_src: 'ds-portifolio.webp',
      desc: 'Projetos de DataScience da Kaggle. Snippests de código e de gráficos '
    },
    {
      name: 'Avaliador de Comentários',
      git: 'https://rafanthx13.github.io/comments-rating-app/',
      link: 'https://rafanthx13.github.io/comments-rating-app/',
      tags: ['WebPage', 'Angular.JS'],
      img_src: 'comments-rating-app.webp',
      desc: 'Avalia comentários como positivos ou negativos através de um modelo de Inteligência Artificial'
    },
    {
      name: 'Servidor do Avaliador de Coment.',
      git: 'https://rafanthx13.github.io/comments-rating-app/',
      link: 'https://rafanthx13.github.io/comments-rating-app/',
      tags: ['Python', 'Flask', 'Pytorch', 'RNN-LSTM'],
      img_src: 'comments-rating-server.webp',
      desc: 'Servidor Flask para prover o acesso ao modelo de Machine Learning para classificar comentários'
    },
    {
      name: 'Gerador de Index de MarkDown',
      git: 'https://github.com/rafanthx13/toc-generator',
      link: 'https://rafanthx13.github.io/md-toc-generator/',
      tags: ['WebPage'],
      img_src: 'toc-generator.png',
      desc: 'Gerador de index (Table Of Contents) para arquivos MarkDown'
    },
    {
      name: 'Library API',
      git: 'https://github.com/rafanthx13/library-api',
      link: 'https://library-my-api.herokuapp.com/swagger-ui.html',
      tags: ['Java', 'API REST', 'Spring', 'TDD: JUnit'],
      img_src: 'swagger-price-server.png',
      desc: 'API REST em simples em Java para um sistema de biblioteca'
    },
    {
      name: 'Movue It',
      git: 'https://github.com/rafanthx13/western-freedom',
      link: 'https://price-log-app.herokuapp.com/',
      tags: ['WebPage', 'Vue/Nuxt', 'TypeScript'],
      img_src: 'movue-it.webp',
      desc: 'Aplicação de teste usando Nuxt e TypeScript'
    },
    {
      name: 'Archive Person App',
      git: 'https://github.com/rafanthx13/western-freedom',
      link: 'https://western-freedom.netlify.app/',
      tags: ['WebPage', 'Vue'],
      img_src: 'western-freedom.webp',
      desc: 'Aplicação para registrar Notícias à Pessoas'
    },
    {
      name: 'Archive Person API',
      git: 'https://github.com/rafanthx13/archive-person-api',
      link: 'https://archive-person-api.herokuapp.com/',
      tags: ['API REST', 'Django', 'Python'],
      img_src: 'django-rest-api.png',
      desc: 'API Rest para aplicação "Archive Person App"'
    },
    {
      name: 'Projetos de Web Pages',
      git: 'https://github.com/rafanthx13/web-page-training',
      link: 'https://rafanthx13.github.io/web-page-training/',
      img_src: 'web-pages-project.png',
      tags: ['WebPage', 'Design', 'CSS'],
      desc: 'Reprodução de Páginas Web. Treinamento de CSS e WebDesign'
    }
  ]
};

new Vue({
  el: '#projects',
  data: data
});
