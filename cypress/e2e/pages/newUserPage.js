class NewUserPage{
    typeName(){
        cy.get(':nth-child(1) > .form-control').type('nombre de Prueba');
    }
    typeLastName(){
        cy.get(':nth-child(2) > .form-control').type('Apellido de Prueba');
    }
    typePostCode(){
        cy.get(':nth-child(3) > .form-control').type('44652');
    }
    fillCurrency(currency) {
        cy.get('#currency').select(currency);
      }
    assertAddAccount(){
       
           // Se verifica que el mensaje de alerta sea el esperado
           cy.on('window:alert', (str) => {
            expect(str).to.equal("Account created successfully with account Number :1016");
          });
      }
    assertAddCustomer(){
            // Se verifica que el mensaje de alerta sea el esperado
            cy.on('window:alert', (str) => {
                // Se verifica que el mensaje de alerta sea el esperado
                expect(str).to.equal('Customer added successfully with customer id :6');
              });
         
      }
      deleteCustomer(){
        // Se elimina el nuevo customer
        cy.get(':nth-child(6) > :nth-child(5) > button').click();
      }
}
export default NewUserPage;
