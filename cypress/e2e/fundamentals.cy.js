describe('fundamental test', () => {
  beforeEach(()=>{
    cy.visit('/fundamentals')
  })
  it('contains correct header text', () => {
    cy.getDataTest('fundamentals-header').should('contain.text','Testing Fundamentals')
    cy.get('[data-test="fundamentals-header"]').contains(/Testing Fundamentals/i)
    cy.get('[data-test="fundamentals-header"]').should('contain.text','Testing Fundamentals')
  })
  it('accordion works correctly', () => {
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
  })
  // it.only('accordion works correctly', () => {
  //   cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
  //   cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
  //   cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
  //   cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
  //   cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
  // })
})