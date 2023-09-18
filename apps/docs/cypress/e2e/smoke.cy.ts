describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
    cy.findByRole("heading", { level: 1 }).should(
      "have.text",
      "NHS.UK Markdown Docs",
    );
    cy.findByText("NHSUK Markdown Docs").should("exist");

    cy.findByRole("link", { name: "Home" }).should("have.attr", "href", "/");

    cy.findByText("Powered by: NHSUK Markdown Docs").should("exist");
    cy.findByText("© Crown copyright").should("exist");
  });
});
