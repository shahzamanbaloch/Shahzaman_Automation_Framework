import Pomtodo_list from './pages/Pomtodo_list';
const pomlist = new Pomtodo_list()

describe('NBS Todo list Automation', function () {

    it('TC01 verify page headings and verify Create todo button is disabled', function () {
        cy.visit('http://nbs-todolist-interview-389909.s3-website.eu-west-2.amazonaws.com/');
        pomlist.main_title_verfied()
        pomlist.btn_check_disability()
        pomlist.date_select()
    })

    it('TC02 Positive test case check Button is visible', function () {
        cy.visit('http://nbs-todolist-interview-389909.s3-website.eu-west-2.amazonaws.com/')
        pomlist.main_title_verfied()
        pomlist.todo_list_input()
        pomlist.date_select()
        pomlist.btn_check_visibilty()
        pomlist.check_todo_content()
        pomlist.check_create_date()
        pomlist.check_end_date()
        pomlist.check_three_dots()
    })

    it('TC03 Negative test case select old date', function () {
        cy.visit('http://nbs-todolist-interview-389909.s3-website.eu-west-2.amazonaws.com/')
        pomlist.main_title_verfied()
        pomlist.todo_list_input()
        pomlist.date_select()
        pomlist.btn_check_visibilty()
        pomlist.check_todo_content()
        pomlist.check_three_dots()

    })

    it('TC04 Archive', function () {
        cy.visit('http://nbs-todolist-interview-389909.s3-website.eu-west-2.amazonaws.com/');
        pomlist.main_title_verfied()
        pomlist.todo_list_input()
        pomlist.date_select()
        pomlist.btn_check_visibilty()
        pomlist.check_todo_content()
        pomlist.check_create_date()
        pomlist.check_end_date()
        pomlist.check_three_dots()
    })

    it('TC05 Delete Task', function () {
        cy.visit('http://nbs-todolist-interview-389909.s3-website.eu-west-2.amazonaws.com/')
        pomlist.main_title_verfied()
        pomlist.todo_delete_list_input()
        pomlist.date_select()
        pomlist.btn_check_visibilty()
        pomlist.check_todo_delete_content()
        pomlist.check_create_date()
        pomlist.check_end_date()
        pomlist.check_deletebtn()

    })

    it('TC06 Negative test case Max length:CHARACTERS 102characters', function () {
        cy.visit('http://nbs-todolist-interview-389909.s3-website.eu-west-2.amazonaws.com/')
        pomlist.main_title_verfied()
        pomlist.todo_one_hundred_input()
        pomlist.date_select()
        pomlist.btn_check_visibilty()
        pomlist.check_todo_one_hundred_content()
        pomlist.check_create_date()
        pomlist.check_end_date()
        pomlist.check_three_dots()
    })

    it('TC07 Negative test case Max length:CHARACTERS CHARACTERS 166', function () {
        cy.visit('http://nbs-todolist-interview-389909.s3-website.eu-west-2.amazonaws.com/')
        pomlist.main_title_verfied()
        pomlist.todo_negative_input()
        pomlist.date_select()
        pomlist.btn_check_visibilty()
    })

    it('TC08 Positive test case clear completed task', function () {
        cy.visit('http://nbs-todolist-interview-389909.s3-website.eu-west-2.amazonaws.com/')
        pomlist.main_title_verfied()
        pomlist.todo_postive_input()
        pomlist.date_select()
        pomlist.btn_check_visibilty()
        pomlist.check_postive_content()
        pomlist.check_create_date()
        pomlist.check_end_date()
        pomlist.todo_postive_two_input()
        pomlist.date_select()
        pomlist.btn_check_visibilty()
        pomlist.check_postive_second_content()
        pomlist.check_create_date()
        pomlist.check_end_date()
        pomlist.checkbox_btn()
    })

    it('TC09 Negative test case write .@@ in the todo inputbox', function () {
        cy.visit('http://nbs-todolist-interview-389909.s3-website.eu-west-2.amazonaws.com/')
        pomlist.main_title_verfied()
        pomlist.todo_underscore_input()
        pomlist.date_select()
        pomlist.btn_check_visibilty()
        pomlist.check_underscore_content()
        pomlist.check_create_date()
        pomlist.check_end_date()
        pomlist.todo_zero_input()
        pomlist.date_select()
        pomlist.btn_check_visibilty()
        pomlist.check_zero_content()
        pomlist.check_create_date()
        pomlist.check_end_date()
        pomlist.logo_NBS()
    })

})