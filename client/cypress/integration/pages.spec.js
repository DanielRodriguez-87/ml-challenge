describe("Pages", () => {
  const query = "cama";
  const invalidQuery = "invalidquery";
  const productId = "MLA817640315";
  const invalidProductId = "MLA817640315P";
  const appURL = "http://localhost:3000";

  it("Displays Main Page", () => {
    cy.visit(appURL);
  });

  it("Display Search Page with a valid query", () => {
    cy.visit(appURL);

    cy.get('[data-testid="searchBoxField"]').type(query);
    cy.get('[data-testid="searchBoxFieldButton"]').click();

    cy.get('[data-testid="breadcrumb"]').should("have.length", 1);

    cy.get('[data-testid="productCardContainer"]').should(
      "have.lengthOf.at.least",
      1
    );
  });

  it("Display Search Page with an invalid valid query", () => {
    cy.visit(appURL);

    cy.get('[data-testid="searchBoxField"]').type(invalidQuery);
    cy.get('[data-testid="searchBoxFieldButton"]').click();

    cy.get('[data-testid="breadcrumb"]').should("not.exist");

    cy.get('[data-testid="productCardContainer"]').should("not.exist");

    cy.get('[data-testid="searchNoResults"]').contains(
      "No se encontraron productos"
    );
  });

  it("Display Product Page with a selected product from Search Page", () => {
    cy.visit(appURL);

    cy.get('[data-testid="searchBoxField"]').type(query);
    cy.get('[data-testid="searchBoxFieldButton"]').click();

    cy.get('[data-testid="productCardContainer"]')
      .find('[data-testid="productCardProductTitle"]')
      .first()
      .then(($first) => {
        cy.get('[data-testid="productCardContainer"]').first().click();

        cy.get('[data-testid="productDetailsTitle"]').contains($first.text());
      });
  });

  it("Display Product Page with an invalid product id", () => {
    cy.visit(`${appURL}/items/${invalidProductId}`);

    cy.get('[data-testid="breadcrumb"]').should("not.exist");

    cy.get('[data-testid="productDetailsContainer"]').should("not.exist");

    cy.get('[data-testid="productNoResult"]').contains(
      "Por favor intente de nuevo"
    );
  });
});
