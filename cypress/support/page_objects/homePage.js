
export class HomePage{


    //////////////////////////////////////////NEWSLETTER//////////////////////////////////////////

    submitNewsletterSubscriptionField(email){
        cy.get('footer').find('form').then( form => {
            cy.wrap(form).find('#newsletter').type(email)
            cy.wrap(form).submit()        
        })
    }

    assertNewsletterSubscriptionAlert(message){
        cy.get('[role="alert"]').should('contain', message)
    }

    //////////////////////////////////////////HEADER//////////////////////////////////////////////

    navigateToLoginPage(){
        cy.get('[class="header links"]').contains('Sign In').click({force:true})
        cy.url().should('include', Cypress.env('baseUrl') + 'customer/account/login')
    }

    navigateToMyAccountPage(){
        cy.get('.panel.wrapper .customer-welcome').click()
        cy.get('.customer-menu > .header.links').contains('Dashboard').click({force: true})
    }

    navigateToDealerLocatorPage(categotyName, categoryUrl, categoryTitle){
        cy.get('.header.links').should('contain', categotyName).click()
        cy.url().should('include', Cypress.env('baseUrl') + categoryUrl)
        cy.title().should('include', categoryTitle)
    }

    // MAIN MENU
    navigateToMainMenuCategoriesWithoutDropdown(categotyName, categoryUrl, categoryTitle){
        cy.get('.sections.nav-sections').contains(categotyName).click()
        cy.url().should('include', Cypress.env('baseUrl') + categoryUrl)
        cy.title().should('include', categoryTitle)
    }

    navigateToMainMenuDdGearCategory(categotyName, categoryUrl, categoryTitle){
        cy.get('.sections.nav-sections').contains(categotyName).invoke('removeAttr', 'target').click({force: true})
        cy.url().should('include', categoryUrl)
        cy.title().should('include', categoryTitle)
    }

    navigateToProductsMenus(categoryName, categoryUrl, categoryTitle){
        cy.get('.page-navigation').contains('Products').click({force: true})
        cy.contains(categoryName).click({force: true})
        cy.url().should('include', Cypress.env('baseUrl') + categoryUrl)
        cy.title().should('include', categoryTitle)
    }

    navigateToSupportMenus(categoryName, categoryUrl, categoryTitle){
        cy.get('.page-navigation').contains('Support').click({force: true})
        cy.contains(categoryName).click({force: true})
        cy.url().should('include', Cypress.env('baseUrl') + categoryUrl)
        cy.title().should('include', categoryTitle)
    }

    navigateToAboutMenus(categoryName, categoryUrl, categoryTitle){
        cy.get('.page-navigation').contains('About').click({force: true})
        cy.contains(categoryName).click({force: true})
        cy.url().should('include', Cypress.env('baseUrl') + categoryUrl)
        cy.title().should('include', categoryTitle)
    }

    // SEARCH
    navigateToSearchPage(productName, categoryUrl, categoryTitle){
        cy.get('.search-trigger').click()
        cy.get('.block.block-search', { timeout: 10000 }).find('form').then( form => {
            cy.wrap(form).find('#search').type(productName)
            cy.wrap(form).submit()
        })
        cy.url().should('include', categoryUrl)
        cy.title().should('include', categoryTitle)
    }

    //////////////////////// MAIN CONTENT /////////////////////////

    // MAIN BANNER
    navigateToMainBanner(categoryUrl, categoryTitle){
        cy.get('.row-full-width-inner').find('a').eq(0).click()
        cy.url().should('include', Cypress.env('baseUrl') + categoryUrl)
        cy.title().should('include', categoryTitle)
    }

    //PROMOTIONAL BANNERS
    navigateToPromotionalBanners(bannerName, categoryUrl, categoryTitle){
        if(bannerName == 'HOT NEW GEAR'){
            cy.get('.home-promotion-callout-wrapper.container').contains(bannerName).parent().find('a').invoke('removeAttr', 'target').click()
            cy.url().should('include', categoryUrl)
            cy.title().should('include', categoryTitle)
        }else{
            cy.get('.home-promotion-callout-wrapper.container').contains(bannerName).parent().find('a').invoke('removeAttr', 'target').click()
            cy.url().should('include', Cypress.env('baseUrl') + categoryUrl)
            cy.title().should('include', categoryTitle)
        }
    
    }

    //ACCESSORIES BANNER
    navigateToAccessoriesBanner(categoryUrl, categoryTitle){
        cy.get('[title="Accessories"]').click()
        cy.url().should('include', Cypress.env('baseUrl') + categoryUrl)
        cy.title().should('include', categoryTitle)
    }

    // CATEGORY LISTING BANNERS
    navigateToCategoryListingBanners(categoryName, categoryUrl, categoryTitle){
        cy.get('.home-category-listing-wrapper').contains(categoryName).click()
        cy.url().should('include', Cypress.env('baseUrl') + categoryUrl)
        cy.title().should('include', categoryTitle)
    }

    // PRODUCT SPOTLIGHT BLOCK
    navigateToProductSpotlightBlock(categoryUrl, categoryTitle){
        cy.get('.product-spotlight-preview-block').find('a').click()
        cy.url().should('include', Cypress.env('baseUrl') + categoryUrl)
        cy.title().should('include', categoryTitle)
    }

    // HOMEBLOG CATEGORIES
    navigateToHomeBlogCategories(categoryName, categoryUrl, categoryTitle){
        cy.get('.home-blog-listing-wrapper').contains(categoryName).click()
        cy.url().should('include', Cypress.env('baseUrl') + categoryUrl)
        cy.title().should('include', categoryTitle)

    }

    // FINANCING BLOCK
    navigateToFinancingBlock(categoryUrl, categoryTitle){
        cy.get('.homepage-financing-block').find('a').click()
        cy.url().should('include', Cypress.env('baseUrl') + categoryUrl)
        cy.title().should('include', categoryTitle)
    }

    /////////////////////////// FOOTER ///////////////////////////

    // SOCIAL ICONS
    navigateToSocialLinks(socialName, categoryUrl){
        cy.get('.social-icons').find(`[title=${socialName}]`).invoke('removeAttr', 'target').click()
        cy.url().should('contain', categoryUrl)
    }

    // LINKS
    navigateToFooterLinks(linkName, categoryUrl, categoryTitle){
        cy.get('.footer.content').contains(linkName).then($link => {
            if(linkName == 'Gear') {
                cy.wrap($link).click()
                cy.url().should('include', categoryUrl)
            }else{
                cy.wrap($link).click()
                cy.url().should('include', Cypress.env('baseUrl') + categoryUrl)
            }
        })
        cy.title().should('include', categoryTitle)
    }
    
}

export const onHomePage = new HomePage()