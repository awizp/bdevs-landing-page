/***** Fetching components *****/
const navbarComponent = document.querySelector(".navbar_container");
const featuresComponent = document.querySelector(".features_container");
const purchase3Component = document.querySelector(".purchase3_container");
const serviceComponent = document.querySelector(".service_container");
const testimonial1Component = document.querySelector(".testimonial1_container");
const partnerComponent = document.querySelector(".partner_container");
const footerComponent = document.querySelector(".footer_container");

let arrayOfComponents = [
    {
        id: 1,
        componentName: navbarComponent,
        componentPath: "navbar"
    },
    {
        id: 2,
        componentName: featuresComponent,
        componentPath: "features"
    },
    {
        id: 3,
        componentName: purchase3Component,
        componentPath: "purchase3"
    },
    {
        id: 4,
        componentName: testimonial1Component,
        componentPath: "testimonial1"
    },
    {
        id: 5,
        componentName: partnerComponent,
        componentPath: "partner"
    },
    {
        id: 6,
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