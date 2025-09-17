
export class ProductListPage{

    navigateToProductPage(productName){
        cy.get('[class="products list items product-items"]').find('[class="item product product-item"]').then( product => {
            cy.wrap(product).contains(productName).click()
        })
    }

    checkFilters(){
        let countText1, countText2;
        cy.get('.wp-filters').contains('Filter').click()
        cy.get('#layered-filter-block').contains('Tools').click({force: true})
        cy.get('#layered-filter-block > .collection-count > span', { timeout: 10000 })
        .should('be.visible')
        .invoke('text')
        .then(parseInt)
        .then((count1) => {
            countText1 = count1;
            cy.log(countText1)
        })
        cy.contains('View Results').click()
        cy.get('#layer-product-list').find('span').invoke('text').then(parseInt).then((count2) => {
            countText2 = count2;
            cy.log(countText2)
        })

        cy.then(function () {
            expect(countText1, 'compare counts').to.be.equal(countText2)
          })

        cy.get('.products.list.items.product-items > li').should('be.visible')
    }

    checkShowInStockProductsOnly(){
        cy.get('#inStockOnly').check({force: true})
        cy.url().should('include', 'quantity_and_stock_status=1')
    }

    checkAddToWishList(){
        cy.wait(500)
        cy.get('.action.toggle.primary').eq(0).click()
        cy.get('.action.towishlist',  { timeout: 10000 }).eq(0).should('be.visible').click()        
    }

    checkPageNavigation(page){
        cy.get('.items.pages-items').contains(page).click()
        cy.url().should('include', `?p=${page}`)
        cy.get('.products.list.items.product-items > li').should('be.visible')
        cy.get('.items.pages-items').find('.item.current').should('contain', 2)
    }
}

export const onProductListPage = new ProductListPage()