describe('Login to Fidibo with email', () => {
  it('should login with email and password successfully', () => {
    cy.visit('https://fidibo.com/login')

    const email = Cypress.env('email')
    const password = Cypress.env('password')

    cy.contains('با ایمیل', { timeout: 10000 }).should('be.visible').click()

    cy.get('input[type="email"]').should('be.visible').type(email)
    cy.get('button').contains('ورود').click({ force: true })

    cy.get('button.login-box-submit.active', { timeout: 15000 }).should('be.visible')
    cy.get('input[type="password"]', { timeout: 15000 }).should('be.visible')
    cy.get('input[type="password"]').type(password, { log: false })
    cy.get('button.login-box-submit.active').click({ force: true })

    cy.url().should('not.include', '/login')
    cy.contains('حساب من', { timeout: 10000 }).should('exist')
  })
})
