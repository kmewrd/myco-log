describe('Explore page', () => {
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
  })

  it('should contain a navigation bar', () => {
    cy.get('nav')
      .should('be.visible')
      .and('contain', 'Dashboard')
      .and('contain', 'Explore')
  })

  it('should have a new url', () => {
    cy.url()
      .should('eq', 'http://localhost:3000/explore')
  })

  it('should display a list of regional fungi', () => {
    cy.get('div[class="fungus-list-wrapper"]')
      .should('be.visible')
      .get('div[id="1"]')
      .should('contain', 'Pacific Golden Chantarelle')
      .get('div[id="5"]')
      .should('contain', 'Lion\'s Mane')
  })

  it('each listing should contain an image, common name, scientific name, and link', () => {
    cy.get('div[id="1"]')
      .should('have.descendants', 'img')
      .and('contain', 'Pacific Golden Chantarelle')
      .and('contain', 'Cantharellus formosus')
      .and('have.descendants', 'a')
  })

  it('each listing link should take the user to a detail page for that fungus', () => {
    cy.get('div[id="1"] a')
      .click()
      .get('main')
      .should('contain', 'Pacific Golden Chantarelle')
  })

  it('should contain a search bar', () => {
    cy.get('form')
      .should('have.class', 'search-bar')
      .and('have.descendants', 'button')
      .get('form button')
      .should('contain', 'GO')
  })

  it('should update the input value when a user types into the search bar', () => {
    cy.get('form input')
      .type('red')
      .should('have.value', 'red')
  })

  it('should update the fungi list when a user types in the search bar and clicks GO', () => {
    cy.get('form input')
      .type('red')
      .get('form button')
      .click()
      .get('div[class="explore-wrapper"]')
      .should('contain', 'Showing results for red')
      .get('div[class="fungus-list-wrapper"]')
      .should('not.contain', 'Pacific Golden Chantarelle')
  })

  it('should allow the user to see all fungi by clicking the clear button after a search is completed', () => {
    cy.get('form input')
      .type('red')
      .get('form button')
      .click()
      .get('button:last')
      .should('contain', 'Clear Search')
      .click()
      .get('div[class="fungus-list-wrapper"]')
      .should('contain', 'Pacific Golden Chantarelle')
  })

  it('should show an appropriate message if no results match the search criteria', () => {
    cy.get('form input')
      .type('blue')
      .get('form button')
      .click()
      .get('div[class="explore-wrapper"]')
      .should('contain', 'No results found for blue')
  })
})

describe('Network error on Explore page', () => {
  it('should display an error message if there\'s a network failure', () => {
    cy.intercept('https://unidentified-fungus-outdoors.herokuapp.com/api/v1/users/5044', { fixture: 'user.json' }).as('user-data')

    cy.intercept('https://unidentified-fungus-outdoors.herokuapp.com/api/v1/sightings', { fixture: 'sightings.json' }).as('all-sightings')

    cy.intercept('https://unidentified-fungus-outdoors.herokuapp.com/api/v1/fungus/1', { fixture: 'fungus-1.json' }).as('fungus-1')

    cy.intercept('https://unidentified-fungus-outdoors.herokuapp.com/api/v1/fungus/34', { fixture: 'fungus-34.json' }).as('fungus-34')

    cy.intercept('https://unidentified-fungus-outdoors.herokuapp.com/api/v1/fungus/40', { fixture: 'fungus-40.json' }).as('fungus-40')
    
    cy.intercept('https://unidentified-fungus-outdoors.herokuapp.com/api/v1/fungi/pacific', { forceNetworkError: true }).as('network-error')

    cy.visit('http://localhost:3000')
      .get('input:first')
      .type('mycophile5044')
      .get('input:last')
      .type('fungi')
      .get('button')
      .click()
      .get('nav a:last')
      .click()
      .get('main')
      .should('contain', 'Unable to retrieve regional fungi information. Please try again later.')
  })
})