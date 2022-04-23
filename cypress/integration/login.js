describe('Homepage and login form', () => {
  it('should contain a background image and log in form on page load', () => {
    cy.visit('http://localhost:3000')
      .get('img')
      .should('have.class', 'background-image')
      .and('be.visible')
      .get('form')
      .should('have.class', 'login-form')
      .and('be.visible')
      .and('contain', 'Please sign in.')
  })

  it('should have an input for username, password, and a button to sign in', () => {
    cy.visit('http://localhost:3000')
      .get('form button')
      .should('contain', 'SIGN IN')
      .get('input:first')
      .invoke('attr', 'placeholder')
      .should('contain', 'Username')
      .get('input:last')
      .invoke('attr', 'placeholder')
      .should('contain', 'Password')
  })

  it('should update the input value as a user types', () => {
    cy.visit('http://localhost:3000')
      .get('input:first')
      .type('mycophile5044')
      .should('have.value', 'mycophile5044')
      .get('input:last')
      .type('fungi')
      .should('have.value', 'fungi')
  })
})