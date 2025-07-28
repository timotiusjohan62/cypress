describe("form test", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });
  it("Test Subscribe Form", () => {
    //happy flow test
    cy.getDataTest("subscribe-form").find("input").as("subscribe-input");
    cy.getDataTest("subscribe-form").contains(/testing forms/i);
    cy.get("@subscribe-input").type("johan@gmail.com");
    cy.contains(/Successfully subbed: johan@gmail.com!/i).should("not.exist");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Successfully subbed: johan@gmail.com!/i).should("exist");
    cy.wait(3000);
    cy.contains(/Successfully subbed: johan@gmail.com!/i).should("not.exist");

    //negative flow invalid email test
    cy.get("@subscribe-input").type("johan@gmail.ca");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Invalid email: johan@gmail.ca/i).should("exist");
    cy.wait(3000);
    cy.contains(/Invalid email: johan@gmail.ca/i).should("not.exist");

    //negative flow fail
    cy.getDataTest("subscribe-button").click();
    cy.contains(/fail!/i).should("exist");
    cy.wait(3000);
    cy.contains(/fail!/i).should("not.exist");
  });
});
