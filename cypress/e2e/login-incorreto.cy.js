describe('Página de login', () => {

    beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app');
      cy.get('[data-test="login-button"]').click();
      cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
        statusCode:400, }).as('stubPost')
    })
        it('Deve preencher os campos do login incorretamente e exibir mensagens de erro ao usuário na página', () => {
          cy.get('[data-test="input-loginEmail"]').type('shino');
          cy.get('[data-test="input-loginPassword"]').type('123');
          cy.get('[data-test="submit-button"]').click();
          cy.contains('Por favor, verifique o email digitado').should('be.visible')
          cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible')
         
        })

        it('Deve falhar mesmo que os campos sejam preenchidos corretamente', ()=> {
          cy.login('lucas@email.com', 'Senha123'),
          cy.wait('@stubPost',  { timeout: 10000 }),
          cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible')
        })
  })
