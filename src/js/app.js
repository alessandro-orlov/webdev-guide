// for jQuery
var $ = require( "jquery" );

// For handlebars
var Handlebars = require("handlebars");
var template = Handlebars.compile("Name: {{name}}");

// ============================================================ //
// Begin document
$(document).ready(function() {


// ============= Burger menu Open & Close ===================== //
$('.burger-menu').click(function() {
  $('#burger-button').toggleClass('active');
  $('.mobile-menu').toggleClass('visible');
});


// ======= Array with objects for handlebars ================= //
var techStack = [
  {
    'link':'pages/html.html',
    'logo':'html-logo.png',
    'title': 'html',
    'description': 'HTML è il principale linguaggio di pubblicazione di pagine Web'
  },
  {
    'link':'pages/css.html',
    'logo':'css-logo.png',
    'title': 'css',
    'description': 'Cascading Style Sheet - linguaggio di stile a cascata per i documenti web'
  },
  {
    'link':'pages/javascript.html',
    'logo':'javascript-logo.png',
    'title': 'javascript',
    'description': 'JavaScript è il linguaggio di programmazione per lo sviluppo di web applications'
  },
  {
    'link':'pages/jquery.html',
    'logo':'jquery-logo.png',
    'title': 'jQuery',
    'description': 'jQuery è uno dei più popolari framework JavaScript al mondo'
  },
  {
    'link':'pages/mysql.html',
    'logo':'mysql-logo.png',
    'title': 'MySQL',
    'description': 'MySQL - il Database Management System relazionale più diffuso ed usato al mondo'
  },
  {
    'link':'pages/php.html',
    'logo':'php-logo.png',
    'title': 'php',
    'description': 'il più utilizzato linguaggio per lo sviluppo di applicazioni Web server side'
  },
  {
    'link':'pages/laravel.html',
    'logo':'laravel-logo.png',
    'title': 'Laravel',
    'description': 'il framework per “Web Artisans” orientato alla programmazione ad oggetti ed al pattern architetturale MVC '
  }

];

// =========== Print tech cards in index.html ================= //
var source = $('#entry-template').html();
var template = Handlebars.compile(source);

for (var i = 0; i < techStack.length; i++) {

  var tech = techStack[i];

  var html = template(tech);

  $('.stack-selection').append(html);
}

// =========== .page-navigation sub list ====================== //
$('.page-navigation .sub-list').click(function() {

  $(this).find('.plus').toggleClass('visible');
  $(this).find('.minus').toggleClass('visible');
  $(this).find('ul').slideToggle('visible');

});

// =========== Print YEAR in footer =========================== //
var year = new Date().getFullYear();
$('.current-year').append(year);





}) // END document ready
