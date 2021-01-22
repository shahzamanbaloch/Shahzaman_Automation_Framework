class Pomtodo_list {

    main_title_verfied() {
        cy.get("a[title='Return to the home page']").contains(' NBS Todo list').should('be.visible');
        cy.get('h1').contains('Todo list').should('be.visible');
    }

    btn_check_disability() {
        cy.get("button[type='submit']").should('be.disabled');

    }

    btn_check_visibilty() {
        cy.get("button[type='submit']").should('not.be.disabled');
        cy.get("button[type='submit']").click();
    }

    date_select() {
        cy.get('.mat-datepicker-toggle-default-icon').click();
        cy.get('[aria-label="January 29, 2021"] > .mat-calendar-body-cell-content').click();
    }

    todo_list_input() {
        cy.get('#content').click().type('Testcasedesign');
    }

    todo_delete_list_input() {
        cy.get('#content').click().type('DeleteTestcasedesign')
    }

    todo_one_hundred_input() {
        cy.get('#content').click().type('Testcasedesignsdsdsfdsfdsfsffdsfdsfjdfjdsfdsfjdsjfdskjfjdfdfdsfdsfsdjfsjfskfsdfsjdfkjdsfdsjfdskjfdskjf')
    }

    todo_negative_input() {
        cy.get('#content').click().type('11111111Testcasedesignsdsdsfdsfdsfsffdsfdsfjdfjdsfdsfjdsjfdskjfjdfdfdsfdsfsdjfsjfskfsdfsjdfkjdsfdsjfdskjfdskjfhsahdhdshfdshfdhfdhfdhfdhfdhfdhdhfdhfdhfhdfhdfdhfhfdhfdf')
    }

    todo_postive_input() {
        cy.get('#content').click().type('Testexecution');
    }

    todo_underscore_input() {
        cy.get('#content').click().type('.@@')
    }

    todo_zero_input() {
        cy.get('#content').click().type('0-')
    }


    todo_postive_two_input() {
        cy.get('#content').click().type('Testexecution2')
    }

    check_todo_content() {
        cy.get('.mat-row > .cdk-column-content').contains('Testcasedesign')
    }

    check_todo_delete_content() {
        cy.get('.mat-row > .cdk-column-content').contains('DeleteTestcasedesign')
    }

    check_todo_one_hundred_content() {
        cy.get('.mat-row > .cdk-column-content').contains('Testcasedesignsdsdsfdsfdsfsffdsfdsfjdfjdsfdsfjdsjfdskjfjdfdfdsfdsfsdjfsjfskfsdfsjdfkjdsfdsjfdskjfdskjf')
    }

    check_postive_content() {

        cy.get('.mat-row > .cdk-column-content').contains('Testexecution')
    }

    check_postive_second_content() {

        cy.get(':nth-child(2) > .cdk-column-content').contains('Testexecution2')
    }

    check_underscore_content() {

        cy.get('.mat-row > .cdk-column-content').contains('.@@')
    }

    check_zero_content() {

        cy.get(':nth-child(2) > .cdk-column-content').contains('0-')
    }

    check_create_date() {
        cy.get('.mat-row > .cdk-column-created').contains('Jan 22, 2021');
    }

    check_end_date() {
        cy.get('.mat-row > .cdk-column-due').contains('Jan 29, 2021');
    }

    check_three_dots() {
        cy.get(':nth-child(1) > .align-right > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
        cy.get(':nth-child(2) > .mat-icon').should('not.be.disabled').click()
        cy.clearLocalStorage()
    }

    check_deletebtn() {
        cy.get("button[class='mat-focus-indicator mat-menu-trigger mat-icon-button mat-button-base']").click()
        cy.wait(8000)
        cy.get('div[class="cdk-overlay-container"] button:nth-child(2)').should('not.be.disabled').click()
        cy.clearLocalStorage()
        cy.reload()
    }

    checkbox_btn() {
        cy.get('#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-inner-container').click()
        cy.get('#mat-checkbox-5 > .mat-checkbox-layout > .mat-checkbox-inner-container').click()
        cy.get("button[class='mat-focus-indicator mat-flat-button mat-button-base mat-accent']").click()
        cy.clearLocalStorage()
    }


}


export default Pomtodo_list;