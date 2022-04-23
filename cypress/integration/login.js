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

  it('should show an error message on button click if one or more fields is empty', () => {
    cy.visit('http://localhost:3000')
      .get('form button')
      .click()
      .get('form')
      .should('contain', 'Please fill in both fields.')
  })

  it('should show a different error message on button click if fields are filled but login details are incorrect', () => {
    cy.visit('http://localhost:3000')
      .get('input:first')
      .type('mycophile504')
      .get('input:last')
      .type('fungi')
      .get('button')
      .click()
      .get('form')
      .should('contain', 'Invalid username or password. Please try again.')
  })

  it('should display the dashboard after a successful login', () => {
    cy.visit('http://localhost:3000')
      .get('input:first')
      .type('mycophile5044')
      .get('input:last')
      .type('fungi')
      .get('button')
      .click()
      .get('main')
      .should('contain', 'Dashboard')
      .and('not.contain', 'form')
  })

  it('should update the url after successful login', () => {
    cy.intercept('https://unidentified-fungus-outdoors.herokuapp.com/api/v1/users/5044', { fixture: 'user.json' }).as('user-data')

    cy.intercept('https://unidentified-fungus-outdoors.herokuapp.com/api/v1/sightings', { fixture: 'sightings.json' }).as('all-sightings')

    cy.intercept('https://unidentified-fungus-outdoors.herokuapp.com/api/v1/fungus/1', { fixture: 'fungus-1.json' }).as('fungus-1')

    cy.intercept('https://unidentified-fungus-outdoors.herokuapp.com/api/v1/fungus/34', { fixture: 'fungus-34.json' }).as('fungus-34')

    cy.intercept('https://unidentified-fungus-outdoors.herokuapp.com/api/v1/fungus/40', { fixture: 'fungus-40.json' }).as('fungus-40')

    cy.visit('http://localhost:3000')
      .get('input:first')
      .type('mycophile5044')
      .get('input:last')
      .type('fungi')
      .get('button')
      .click()
      .url('eq', 'http://localhost:3000/dashboard')
  })
})