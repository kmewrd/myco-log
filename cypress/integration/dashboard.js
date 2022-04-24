describe('Dashboard view', () => {
  beforeEach(() => {
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
  })

  it('should contain a logout button in the header', () => {
    cy.get('header')
      .should('be.visible')
      .and('have.descendants', 'button')
      .get('header button')
      .should('contain', 'LOG OUT')
  })

  it('should return a user to the login page if the logout button is clicked', () => {
    cy.get('header button')
      .click()
      .get('main')
      .should('not.contain', 'Dashboard')
      .and('contain', 'Please sign in.')
  })

  it('should contain a navigation bar', () => {
    cy.get('nav')
      .should('be.visible')
      .and('contain', 'Dashboard')
      .and('contain', 'Explore')
  })

  it('should contain the user\'s region and sighting stats', () => {
    cy.get('main div:first')
      .should('contain', 'Region')
      .and('contain', 'Total sightings')
      .and('contain', 'Sightings this month')
  })

  it('should contain a section with the user\'s sightings', () => {
    cy.get('main div[class="my-sightings"]')
      .should('contain', 'My Sightings')
      .get('div[class="sighting-card"]')
      .should('be.visible')
  })

  it('each sighting card should contain an image, name, date, location, and notes', () => {
    cy.get('div[class="sighting-card"]')
      .should('have.descendants', 'img')
      .and('contain', 'Cinnabar Red Polypore')
      .and('contain', 'Date:')
      .and('contain', 'Location:')
      .and('contain', 'Notes:')
  })

  it('each sighting card should contain a delete button', () => {
    cy.get('div[class="sighting-card"]')
      .should('have.descendants', 'button')
  })
})