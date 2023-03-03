(function (factory) {
    typeof define === 'function' && define.amd ? define('index', factory) :
    factory();
}((function () { 'use strict';

    window.onload = () => {
      console.log('tutu');
      let header = document.getElementById('search');
      header.style.backgroundColor = "#00FF00";
      console.log('la couleur de la nav#search a été modifié en JS ;)');
    };

})));
