/* Calcul de votre progression sur la page
   et modification de la longueur de la scroll bar */
function scroll_bar() {
    var t = document.querySelector('#scroll-bar'),
        h = document.body.clientHeight,
        hn = window.innerHeight,
        p = window.scrollY,
        result = p / (h - hn) * 100;

    t.style.width = result + '%';
}

/* Appel de la fonction lors d'un mouvement sur la page
(scroll, mollette de la souris, flèches de direction, etc.) */
window.addEventListener('scroll', scroll_bar);


/* document.body.clientHeight, => Renvoie la hauteur intérieure d'un élément en pixels. Celle-ci comprend les marges intérieures éventuelles (padding),
mais ni la barre de défilement horizontale, ni les bordures ,ni les marges extérieures (margin).*/

/* window.innerHeight, => Récupère la hauteur (en pixels) de la partie visible de la fenêtre de navigation
en incluant, si elle est affichée, la barre de défilement horizontale.*/

/* window.scrollY, => retourne le nombre de pixels la page actuellement défilés verticalement. Dans les navigateurs modernes,
cette valeur est précise au sous-pixel près. Ainsi, la valeur retournée n'est pas forcement un entier.*/
