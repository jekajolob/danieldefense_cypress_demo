///<reference types="cypress"/>

const { onHomePage } = require("../../support/page_objects/homePage")


describe('Check Navigation On Main Content', () => {
    beforeEach('open application', () => {
        cy.openHomePage()
     })

     it('navigate To Main Banner Categoty page', () => {
      onHomePage.navigateToMainBanner(
         'rifles/ar-10-rifles.html', // Category URL
         'Daniel Defense AR10 Semi Automatic Rifles | Daniel Defense') // Category Title
   })

   it('navigate To DDM4 V7 VS. DD4 RIII Banner', () => {
      onHomePage.navigateToPromotionalBanners(
       'DDM4 V7 VS. DD4 RIII', 
       'wire/ddm4-v7-versus-dd4-riii', 
       'The DDM4® V7® vs DD4™ RIII™ | Daniel Defense')
   })

   it('navigate To HOT NEW GEAR Banner', () => {
      onHomePage.navigateToPromotionalBanners(
         'HOT NEW GEAR', 
         'new', 
         'Daniel Defense Store | New Daniel Defense Apparel, Headwear & Accessories')
      })

   it('navigate To Accessories Banner', () => {
      onHomePage.navigateToAccessoriesBanner(
         'accessories', 
         'Accessories | Daniel Defense')
   })

   it('navigate To Sport Shooter Banner', () => {
      onHomePage.navigateToCategoryListingBanners(
       'Sport Shooter', 
       'usage/sport-shooter', 
       'Firearms for Hunting, Competition and Target Shooting | Daniel Defense')
   })

   it('navigate To Personal Defense Banner', () => {
      onHomePage.navigateToCategoryListingBanners(
       'Personal Defense', 
       'usage/personal-defense', 
       'Firearms Recommended for Personal and Home Defense | Daniel Defense')
   })

   it('navigate To Professional Arms Banner', () => {
      onHomePage.navigateToCategoryListingBanners(
       'Professional Arms', 
       'usage/professional-arms', 
       'Firearms for Military, Law Enforcement and Trainers | Daniel Defense')
   })

   it('navigate To Product Spotlight Block', () => {
      onHomePage.navigateToProductSpotlightBlock(
       'dd-magazine-bulk-ar-15-12-pack', 
       'Daniel Defense DD Magazine Bulk AR-15 12-Pack | Daniel Defense')
   })

   // Navigate To Homeblog Block Categories

   it('navigate To American Made blog', () => {
      onHomePage.navigateToHomeBlogCategories(
       'American Made',
       'wire/american_made',
       'American Made | Daniel Defense')
   })

   it('Navigate To Slim is in blog', () => {
    onHomePage.navigateToHomeBlogCategories(
     'Slim is in',
     'wire/slim-is-in',
     'Slim is in | Daniel Defense')
 })

 it('Navigate To DDM4 V7 vs. DD4 RIII - Demystifying The DD Line blog', () => {
    onHomePage.navigateToHomeBlogCategories(
     'DDM4 V7 vs. DD4 RIII - Demystifying The DD Line',
     'wire/ddm4-v7-versus-dd4-riii',
     'The DDM4® V7® vs DD4™ RIII™ | Daniel Defense')
 })

 it('Navigate To Which Rail is Right For You? blog', () => {
    onHomePage.navigateToHomeBlogCategories(
     'Which Rail is Right For You?',
     'wire/which-rail-is-right-for-you',
     'Picking the Right Rail for You | Daniel Defense')
 })

     it('Navigate To Financing Block', () => {
        onHomePage.navigateToFinancingBlock(
         'daniel-defense-financing',
         'Shooting Sports Financing | Daniel Defense')
     })

})