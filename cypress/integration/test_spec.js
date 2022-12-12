/// <reference types="cypress" />
context("Test scenarios", () => {
  beforeEach("visit the page", () => {
    cy.visit("/");
  });
  describe("Progress bar slider", () => {
    it("Change drag and drop slider value to 95", () => {
      cy.get("ul.list-disc")
        .eq(1)
        .find("a[href*=slider]")
        .should("contain.text", "Drag & Drop Sliders")
        .click({ force: true });
      cy.get(".sp__breadcrumb").should("contain", "Drag Drop Range Sliders");
      cy.get("#slider3 > .font-bold").should("have.text", " Default value 15");
      cy.get("input[type=range]").eq(2).invoke("val", "95").trigger("change");
      cy.get("#rangeSuccess")
        .invoke("val", "95")
        .trigger("change")
        .should("have.value", "95");
    });
  });
  describe("Input Forms", () => {
    beforeEach("Change port", () => {
      cy.viewport("samsung-note9");
      cy.wait(1000);
      cy.get("ul.list-disc")
        .eq(0)
        .find("a[href*=input]")
        .should("contain.text", "Input Form Submit")
        .click();
    });
    it("Check accessibility", () => {
      cy.injectAxe();
      cy.checkA11y();
    });
    it("Fill form and verify performance metrics", () => {
      cy.xpath('//input[@id="name"]').type("Test Automation");
      cy.xpath('//input[@id="inputEmail4"]').type("example@yopmail.com");
      cy.xpath('//input[@id="inputPassword4"]').type("test@123");
      cy.xpath('//input[@id="company"]').type("example");
      cy.xpath('//input[@id="websitename"]').type("www.example.com");
      cy.get("[name=country]").select("Australia");
      cy.xpath('//input[@id="inputCity"]').type("Sydney");
      cy.xpath('//input[@id="inputAddress1"]').type("Black town");
      cy.xpath('//input[@id="inputAddress2"]').type("Liverpool");
      cy.xpath('//input[@id="inputState"]').type("New south Wales");
      cy.xpath('//input[@id="inputZip"]').type("2022");
      cy.get(".btn").should("have.text", "Submit").click();
      cy.get(".loginform").should("contain.text", "Thanks");

      cy.lighthouse(
        {
          performance: 20,
          accessibility: 50,
          "best-practices": 50,
          seo: 50,
        },
        {
          formFactor: "desktop",
          screenEmulation: {
            mobile: false,
            disable: false,
          },
        }
      );

      cy.get(".success-msg").should(
        "have.text",
        "Thanks for contacting us, we will get back to you shortly."
      );
    });
  });
});
