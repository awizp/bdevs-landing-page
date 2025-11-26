/***** Fetching components *****/
const minibarComponent = document.querySelector(".minibar_container");
const navbarComponent = document.querySelector(".navbar_container");
const featuresComponent = document.querySelector(".features_container");
const pricing1Component = document.querySelector(".pricing1_container");
const pricing2Component = document.querySelector(".pricing2_container");
const purchase2Component = document.querySelector(".purchase2_container");
const faqComponent = document.querySelector(".faq_container");
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
        componentName: featuresComponent,
        componentPath: "features"
    },
    {
        id: 4,
        componentName: pricing1Component,
        componentPath: "pricing1"
    },
    {
        id: 5,
        componentName: pricing2Component,
        componentPath: "pricing2"
    },
    {
        id: 6,
        componentName: purchase2Component,
        componentPath: "purchase2"
    },
    {
        id: 7,
        componentName: faqComponent,
        componentPath: "faq"
    },
    {
        id: 8,
        componentName: testimonial2Component,
        componentPath: "testimonial2"
    },
    {
        id: 9,
        componentName: partnerComponent,
        componentPath: "partner"
    },
    {
        id: 10,
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
