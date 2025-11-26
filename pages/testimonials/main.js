/***** Fetching components *****/
const minibarComponent = document.querySelector(".minibar_container");
const navbarComponent = document.querySelector(".navbar_container");
const testimonial1Component = document.querySelector(".testimonial1_container");
const testimonial2Component = document.querySelector(".testimonial2_container");
const testimonial3Component = document.querySelector(".testimonial3_container");
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
        componentName: testimonial1Component,
        componentPath: "testimonial1"
    },
    {
        id: 4,
        componentName: testimonial2Component,
        componentPath: "testimonial2"
    },
    {
        id: 5,
        componentName: testimonial3Component,
        componentPath: "testimonial3"
    },
    {
        id: 6,
        componentName: partnerComponent,
        componentPath: "partner"
    },
    {
        id: 7,
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
