describe('My First Test', () => {
  it('Validar pagina de inicio', () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    cy.get('.mainHeading').should("be.visible")
  })

it('Login', () => {
  cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    // Hacer clic en el botón "customer login"
    cy.contains('Customer Login').click()

    // Esperar a que el elemento de opción múltiple esté disponible
    cy.get('#userSelect').then($select => {
      // Obtener todas las opciones disponibles en el elemento de opción múltiple
      const options = $select.find('option').not(':disabled')

      // Elegir un índice aleatorio
      const randomIndex = Cypress._.random(0, options.length - 1)

      // Obtener el valor de la opción aleatoria
      const randomOptionValue = Cypress.$(options[randomIndex]).val()

      // Seleccionar la opción aleatoria
      cy.get('#userSelect').select(randomOptionValue, { force: true })
    })

    cy.contains('Login').click()
    cy.wait(5000)
   
  })
})