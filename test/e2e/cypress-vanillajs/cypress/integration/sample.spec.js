/// <reference types="Cypress" />

describe("My First passing Test", function() {
  it("Does not do much!", function() {
    expect(true).to.equal(true);
  });
});

// describe("My First failing Test", function() {
//     it("Does not do much!", function() {
//         expect(true).to.equal(false);
//     });
// });

describe("My Second smart passing Test", function() {
  it("finds the content type", function() {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should("include", "/commands/actions");

    cy.screenshot("commands-actions-loaded", {
      capture: "viewport"
    });

    // Get an input, type into it and verify that the value has been updated
    cy.get(".action-email")
      .type("fake@email.com")
      .should("have.value", "fake@email.com");
  });
});
