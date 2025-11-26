/***** Fetching components *****/
const minibarComponent = document.querySelector(".minibar_container");
const navbarComponent = document.querySelector(".navbar_container");
const pricing1Component = document.querySelector(".pricing1_container");
const purchase1Component = document.querySelector(".purchase1_container");
const serviceComponent = document.querySelector(".service_container");
const testimonial1Component = document.querySelector(".testimonial1_container");
const partnerComponent = document.querySelector(".partner_container");
const footerComponent = document.querySelector(".footer_container");

let arrayOfComponents = [
    {
        id: 1,
        componentName: minibarComponent,
        componentPath: "minibar"
    },
    {
        id: 2,
        componentName: navbarComponent,
        componentPath: "navbar"
    },
    {
        id: 3,
        componentName: pricing1Component,
        componentPath: "pricing1"
    },
    {
        id: 4,
        componentName: purchase1Component,
        componentPath: "purchase1"
    },
    {
        id: 5,
        componentName: serviceComponent,
        componentPath: "service"
    },
    {
        id: 6,
        componentName: testimonial1Component,
        componentPath: "testimonial1"
    },
    {
        id: 7,
        componentName: partnerComponent,
        componentPath: "partner"
    },
    {
        id: 8,
        componentName: footerComponent,
        componentPath: "footer"
    },
];

const functionOfComponents = (array) => {
    array.forEach((component) => {

        const { componentPath, componentName } = component;

        fetch(`../../components/${componentPath}.html`)
            .then(res => {
                return res.text();
            })
            .then(data => {
                componentName.innerHTML = data;
            });
    });
};

functionOfComponents(arrayOfComponents);
