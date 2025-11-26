/***** Fetching components *****/
const minibarComponent = document.querySelector(".minibar_container");
const navbarComponent = document.querySelector(".navbar_container");
const chooseComponent = document.querySelector(".choose_container");
const purchase2Component = document.querySelector(".purchase2_container");
const serviceComponent = document.querySelector(".service_container");
const testimonial2Component = document.querySelector(".testimonial2_container");
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
        componentName: chooseComponent,
        componentPath: "choose"
    },
    {
        id: 4,
        componentName: purchase2Component,
        componentPath: "purchase2"
    },
    {
        id: 5,
        componentName: serviceComponent,
        componentPath: "service"
    },
    {
        id: 6,
        componentName: testimonial2Component,
        componentPath: "testimonial2"
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