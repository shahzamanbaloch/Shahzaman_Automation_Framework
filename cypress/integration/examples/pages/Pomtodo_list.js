class Pomtodo_list {

    main_title_verfied() {
        const verifyPageTitle = cy.get("a[title='Return to the home page']")
        verifyPageTitle.contains('NBS Todo list').should('be.visible')
        const verifyTodoFormHeading = cy.get('h1')
        verifyTodoFormHeading.contains('Todo list').should('be.visible')
        return this
    }

    btn_check_disability() {

        const CreatetodoButtoninactive = cy.get("button[type='submit']")
        CreatetodoButtoninactive.should('be.disabled');
        return this
    }

    btn_check_visibilty() {
        const CreateTodoButtonActive = cy.get("button[type='submit']")
        CreateTodoButtonActive.should('not.be.disabled').click();
        return this
    }

    date_select() {

        const datePickerIconButton = cy.get('.mat-datepicker-toggle-default-icon')
        datePickerIconButton.should('not.be.disabled').click()
        const calendar = cy.get('[aria-label="January 29, 2021"] > .mat-calendar-body-cell-content')
        calendar.click()
        cy.wait(3000)
        return this
    }

    todo_list_input() {

        const toDoListInputField = cy.get('#content')
        toDoListInputField.click()
        toDoListInputField.clear()
        toDoListInputField.type('Testcasedesign');
        return this
    }

    todo_delete_list_input() {
        const toDoDeleteListInput = cy.get('#content')
        toDoDeleteListInput.click()
        toDoDeleteListInput.clear()
        toDoDeleteListInput.type('DeleteTestcasedesign')
        return this
    }

    todo_one_hundred_input() {
        const OneHundredTwoCharacters = cy.get('#content')
        OneHundredTwoCharacters.click()
        OneHundredTwoCharacters.clear()
        OneHundredTwoCharacters.type('Testcasedesignsdsdsfdsfdsfsffdsfdsfjdfjdsfdsfjdsjfdskjfjdfdfdsfdsfsdjfsjfskfsdfsjdfkjdsfdsjfdskjfdskjf')
        return this
    }

    todo_negative_input() {
        const OneHundredSixtySixCharacters = cy.get('#content')
        OneHundredSixtySixCharacters.click()
        OneHundredSixtySixCharacters.clear()
        OneHundredSixtySixCharacters.type('11111111Testcasedesignsdsdsfdsfdsfsffdsfdsfjdfjdsfdsfjdsjfdskjfjdfdfdsfdsfsdjfsjfskfsdfsjdfkjdsfdsjfdskjfdskjfhsahdhdshfdshfdhfdhfdhfdhfdhfdhdhfdhfdhfhdfhdfdhfhfdhfdf')

        const oneHundredSixtysixTodo = cy.get('11111111Testcasedesignsdsdsfdsfdsfsffdsfdsfjdfjdsfdsfjdsjfdskjfjdfdfdsfdsfsdjfsjfskfsdfsjdfkjdsfdsjfdskjfdskjfhsahdhdshfdshfdhfdhfdhfdhfdhfdhdhfdhfdhfhdfhdfdhfhfdhfdf')
        oneHundredSixtysixTodo.should('not.exist');
        return this
    }

    todo_postive_input() {
        const todoPositiveTestcase = cy.get('#content')
        todoPositiveTestcase.click()
        todoPositiveTestcase.clear()
        todoPositiveTestcase.type('Testexecution');
        return this
    }

    todo_underscore_input() {
        const todunderScore = cy.get('#content')
        todunderScore.click()
        todunderScore.clear()
        todunderScore.type('.@@')
        return this
    }

    todo_zero_input() {
        const toDoZero = cy.get('#content')
        toDoZero.click()
        toDoZero.clear()
        toDoZero.type('0-')
        return this
    }

    todo_postive_two_input() {
        const todoPositiveTwo = cy.get('#content')
        todoPositiveTwo.click()
        todoPositiveTwo.clear()
        todoPositiveTwo.type('Testexecution2')
        return this
    }

    logo_NBS() {
        const LogoNbs = cy.get('.logo-wrapper')
        LogoNbs.click()
        cy.clearLocalStorage()
        return this
    }

    check_todo_content() {
        const checkTodoContent = cy.get('.mat-row > .cdk-column-content')
        checkTodoContent.contains('Testcasedesign').should('be.visible')
        return this
    }

    check_todo_delete_content() {
        const todoDeletContent = cy.get('.mat-row > .cdk-column-content')
        todoDeletContent.contains('DeleteTestcasedesign').should('be.visible')
        return this
    }

    check_todo_one_hundred_content() {
        const checkTodoHundredContent = cy.get('.mat-row > .cdk-column-content')
        checkTodoHundredContent.contains('Testcasedesignsdsdsfdsfdsfsffdsfdsfjdfjdsfdsfjdsjfdskjfjdfdfdsfdsfsdjfsjfskfsdfsjdfkjdsfdsjfdskjfdskjf')
        return this
    }

    check_postive_content() {

        const checkPositiveContent = cy.get('.mat-row > .cdk-column-content')
        checkPositiveContent.contains('Testexecution').should('be.visible')
        return this
    }

    check_postive_second_content() {

        const checkPositiveSecondContent = cy.get(':nth-child(2) > .cdk-column-content')
        checkPositiveSecondContent.contains('Testexecution2').should('be.visible')
    }

    check_underscore_content() {

        const checkUnderscoreContent = cy.get('tbody[role="rowgroup"] > tr:nth-of-type(1) > .cdk-column-content')
        checkUnderscoreContent.contains('.@@').should('be.visible')
        return this
    }

    check_zero_content() {

        const checkZeroContent = cy.get(':nth-child(2) > .cdk-column-content')
        checkZeroContent.contains('0-').should('be.visible')
        return this
    }

    check_create_date() {
        const checkTodoCreateDate = cy.get('.mat-row > .cdk-column-created')
        checkTodoCreateDate.contains('Jan 25, 2021').should('be.visible')
        return this
    }

    check_end_date() {
        const checkEndDate = cy.get('.mat-row > .cdk-column-due')
        checkEndDate.contains('Jan 29, 2021')
        return this
    }

    check_three_dots() {
        const checkThreeDots = cy.get(':nth-child(1) > .align-right > .mat-focus-indicator > .mat-button-wrapper > .mat-icon')
        checkThreeDots.should('be.visible').click()
        cy.get(':nth-child(2) > .mat-icon').should('not.be.disabled').click()
        cy.clearLocalStorage()
        return this
    }

    check_deletebtn() {
        const deleteButton = cy.get("button[class='mat-focus-indicator mat-menu-trigger mat-icon-button mat-button-base']")
        deleteButton.should('not.be.disabled').click()
        cy.get('div[class="cdk-overlay-container"] button:nth-child(2)').should('not.be.disabled').click()
        cy.clearLocalStorage()
        return this
    }

    checkbox_btn() {
        const checkBoxButton = cy.get('tbody > :nth-child(1) > .cdk-column-done')
        checkBoxButton.click()
        cy.wait(500)
        cy.get('tbody[role="rowgroup"] > tr:nth-of-type(1) > .cdk-column-done').click()
        cy.get("button[class='mat-focus-indicator mat-flat-button mat-button-base mat-accent']").click()
        cy.clearLocalStorage()
        return this
    }
}

export default Pomtodo_list;