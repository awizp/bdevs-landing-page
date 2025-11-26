/***** Fetching components *****/
const minibarComponent = document.querySelector(".minibar_container");
const navbarComponent = document.querySelector(".navbar_container");
const purchase2Component = document.querySelector(".purchase2_container");
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
        componentName: purchase2Component,
        componentPath: "purchase2"
    },
    {
        id: 4,
        componentName: partnerComponent,
        componentPath: "partner"
    },
    {
        id: 5,
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
