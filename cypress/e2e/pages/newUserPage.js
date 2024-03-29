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

}
export default NewUserPage;