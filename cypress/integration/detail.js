describe('Detail page', () => {
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
  })

  it('should update the url when a user clicks on the detail page link', () => {
    cy.url()
      .should('eq', 'http://localhost:3000/explore/1')
  })

  it('should contain an image, common name, scientific name, description, and regions where the fungus is found', () => {
    cy.get('main')
      .should('have.descendants', 'img')
      .and('contain', 'Pacific Golden Chantarelle')
      .and('contain', 'Cantharellus formosus')
      .and('have.descendants', 'div[class="fungus-details"]')
      .get('div[class="fungus-details"]')
      .should('contain', 'Chanterelles can be found in shady areas')
      .get('div[class="region"]')
      .should('contain', 'Pacific')
  })

  it('should contain a link that takes the user back to the Explore page', () => {
    cy.get('a:first')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/explore')
      .get('main')
      .should('not.contain', 'Chanterelles can be found in shady areas')
  })

  it('should contain a button to record a mushroom sighting', () => {
    cy.get('main')
      .should('have.descendants', 'button')
  })
})

describe('Network error on Detail page', () => {
  // NOT PASSING
  it.only('should display an error message if there\'s a network failure', () => {
    cy.intercept('https://unidentified-fungus-outdoors.herokuapp.com/api/v1/users/5044', { fixture: 'user.json' }).as('user-data')

    cy.intercept('https://unidentified-fungus-outdoors.herokuapp.com/api/v1/sightings', { fixture: 'sightings.json' }).as('all-sightings')

    cy.intercept('https://unidentified-fungus-outdoors.herokuapp.com/api/v1/fungus/1', { fixture: 'fungus-1.json' }).as('fungus-1')

    cy.intercept('https://unidentified-fungus-outdoors.herokuapp.com/api/v1/fungus/34', { fixture: 'fungus-34.json' }).as('fungus-34')

    cy.intercept('https://unidentified-fungus-outdoors.herokuapp.com/api/v1/fungus/40', { fixture: 'fungus-40.json' }).as('fungus-40')

    cy.intercept('https://unidentified-fungus-outdoors.herokuapp.com/api/v1/fungi/pacific', { fixture: 'regional-fungi.json' }).as('all-fungi')

    cy.intercept('https://unidentified-fungus-outdoors.herokuapp.com/api/v1/fungus/1', { forceNetworkError: true }).as('network-error')

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
      .get('main')
      .should('contain', 'Unable to retrieve fungus details. Please try again later.')
  })
})