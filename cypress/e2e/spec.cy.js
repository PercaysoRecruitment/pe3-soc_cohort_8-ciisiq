// describe("Check the page is on", () => {
//   it("visits the news app", () => {
//     cy.visit("https://news-percayso-test.netlify.app/");
//   });
// });

// describe("Check if on the page the are caracter", () => {
//   it('finds the content "News"', () => {
//     cy.visit("https://news-percayso-test.netlify.app/");

//     cy.contains("News");
//   });
// });

describe("Check if on the page the are the input and button", () => {
  it('finds the content "input" and write the word "Panda" and use the button to get the news', () => {
    cy.visit("https://news-percayso-test.netlify.app/");

    cy.get(".input").click().type("panda").should("have.value", "panda");

    cy.contains("Search").click();
  });
});

// describe("Check if the button can be click", () => {
//   it("finds the content button and click", () => {
//     cy.visit("https://news-percayso-test.netlify.app/");

//     cy.contains("Search").click();
//   });
// });
