const itemsUsed = [
    {
        item: ".text-parallax-a-carousel",
        speed: '0.2',
        top: "parallax-container-b"
    },
    {
        item: ".text-parallax-b-carousel",
        speed: '0.2',
        top: "parallax-container-b"
    },
    {
        background: ".background-bike-2-v1",
        factor: '0.7',
    },
];

window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY || document.body.scrollTop || document.documentElement.scrollTop;
    const xvalue = "center";
    const mapped = itemsUsed.map(function (prop) {
        if (prop.item) {
            return document.querySelector(prop.item).style.top = scrollTop * prop.speed + "px";
        } if (prop.background) {
            return document.querySelector(prop.background).style.backgroundPosition = xvalue + " " + (scrollTop * prop.factor) + "px";
        }

    });
    console.table(mapped);
    console.log(scrollTop);
});

// bootstrap validation
(function () {
    'use strict';
    window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

