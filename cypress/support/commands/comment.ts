/* eslint-disable no-unused-vars */

export const addComment = (text: string) => {
    cy.getByTestId('AddCommentForm.Input').type(text);
    cy.getByTestId('AddCommentForm.Button').click();
};

export const removeComment = (commentId: string) =>
    cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/comments/${commentId}`,
        headers: { authorization: 'blank' },
    });

declare global {
    namespace Cypress {
        interface Chainable {
            addComment(text: string): Chainable<void>;
            removeComment(commentId: string): Chainable<void>;
        }
    }
}

export {};
