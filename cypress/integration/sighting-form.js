describe('Sighting form', () => {
  beforeEach(() => {
    cy.intercept('https://unidentified-fungus-outdoors.herokuapp.com/api/v1/users/5044', { fixture: 'user.json' }).as('user-data')

    cy.intercept('https://unidentified-fungus-outdoors.herokuapp.com/api/v1/sightings', { fixture: 'sightings.json' }).as('all-sightings')

    cy.intercept('https://unidentified-fungus-outdoors.herokuapp.com/api/v1/fungus/1', { fixture: 'fungus-1.json' }).as('fungus-1')

    cy.intercept('https://unidentified-fungus-outdoors.herokuapp.com/api/v1/fungus/34', { fixture: 'fungus-34.json' }).as('fungus-34')

    cy.intercept('https://unidentified-fungus-outdoors.herokuapp.com/api/v1/fungus/40', { fixture: 'fungus-40.json' }).as('fungus-40')

    cy.intercept('https://unidentified-fungus-outdoors.herokuapp.com/api/v1/fungi/pacific', { fixture: 'regional-fungi.json' }).as('all-fungi')

    cy.visit('http://localhost:3000')
      .get('input:first')
      .type('mycophile5044')
      .get('input:last')
      .type('fungi')
      .get('button')
      .click()
      .get('nav a:last')
      .click()
      .get('div[id="1"] a')
      .click()
      .get('main button')
      .click()
  })

  it('should have a new url', () => {
    cy.url()
      .should('eq', 'http://localhost:3000/explore/1/record-sighting')
  })

  it('should have a field to enter a date, a location, and notes', () => {
    cy.get('input[id="date"]')
      .should('be.visible')
      .get('input[id="location"]')
      .should('be.visible')
      .get('textarea[id="notes"]')
      .should('be.visible')
  })

  it('should update the input value when a user types into a field', () => {
    cy.get('input[id="date"]')
      .type('2022-03-05')
      .should('have.value', '2022-03-05')
      .get('input[id="location"]')
      .type('Memphis, TN')
      .should('have.value', 'Memphis, TN')
      .get('textarea[id="notes"]')
      .type('N/A')
      .should('have.value', 'N/A')
  })

  it('should show an error message on button click if one or more fields is empty', () => {
    cy.get('main button:last')
      .click()
      .get('form')
      .should('contain', 'Please complete all fields.')
  })
})