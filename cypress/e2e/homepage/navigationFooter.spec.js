///<reference types="cypress"/>

const { onHomePage } = require("../../support/page_objects/homePage")


describe('Footer Navigation', () => {
   beforeEach('open application', () => {
      cy.openHomePage()
   })

   // SOCIAL ICONS NAVIGATION
   it('navigate To Instagram', () => {
      onHomePage.navigateToSocialLinks(
         'Instagram',
         'https://www.instagram.com/danieldefense/',
      )
   })

   it('navigate To Facebook', () => {
      onHomePage.navigateToSocialLinks(
         'Facebook',
         'https://www.facebook.com/DanielDefense/'
      )
   })

   it('navigate To Twitter', () => {
      onHomePage.navigateToSocialLinks(
         'Twitter',
         'https://twitter.com/danieldefense'
      )
   })

   it('navigate To Youtube', () => {
      onHomePage.navigateToSocialLinks(
         'Youtube',
         'https://www.youtube.com/user/danieldefense'
      )
   })

   // CUSTOMER CENTER LINKS
   it('navigate To Contact Us', () => {
      onHomePage.navigateToFooterLinks(
         'Contact Us',
         'contacts',
         'Contact Us | Daniel Defense'
      )
   })

   it('navigate To Financing', () => {
      onHomePage.navigateToFooterLinks(
         'Financing',
         'daniel-defense-financing',
         'Shooting Sports Financing | Daniel Defense'
      )
   })

   it('navigate To Warranty & Returns', () => {
      onHomePage.navigateToFooterLinks(
         'Warranty & Returns',
         'returns',
         'Returns | Daniel Defense'
      )
   })

   it('navigate To Instructions & Manuals', () => {
      onHomePage.navigateToFooterLinks(
         'Instructions & Manuals',
         'dd-downloads',
         'Downloads | Daniel Defense'
      )
   })

   it('navigate To FAQ', () => {
      onHomePage.navigateToFooterLinks(
         'FAQ',
         'faq',
         'FAQ | Daniel Defense'
      )
   })

   it('navigate To Counterfeit', () => {
      onHomePage.navigateToFooterLinks(
         'Counterfeit',
         'counterfeit-information',
         'Counterfeit | Daniel Defense'
      )
   })

   it('navigate To Promotions', () => {
      onHomePage.navigateToFooterLinks(
         'Promotions',
         'promo',
         'Promotions | Daniel Defense'
      )
   })

   it('navigate To Sticker Request', () => {
      onHomePage.navigateToFooterLinks(
         'Sticker Request',
         'sticker-request',
         'Sticker Request Page | Daniel Defense'
      )
   })

   it('navigate To Firearm Purchase Terms & Conditions', () => {
      onHomePage.navigateToFooterLinks(
         'Firearm Purchase Terms & Conditions',
         'firearm-purchase-terms-and-conditions',
         'Firearm Purchase Terms & Conditions | Daniel Defense'
      )
   })

   it('navigate To Google Terms of Service', () => {
      onHomePage.navigateToFooterLinks(
         'Google Terms of Service',
         'google-terms-of-service',
         'Google Terms of Service | Daniel Defense'
      )
   })

   it('navigate To Gear', () => {
      onHomePage.navigateToFooterLinks(
         'Gear',
         'https://danieldefensestore.com/',
         'Daniel Defense Store'
      )
   })

   //COMPANY LINKS

   it('navigate To Company Values', () => {
      onHomePage.navigateToFooterLinks(
         'Company Values',
         'company-values',
         'Company Values | Daniel Defense'
      )
   })

   it('navigate To Daniel DNA', () => {
      onHomePage.navigateToFooterLinks(
         'Daniel DNA',
         'daniel-dna',
         'Daniel DNA | Daniel Defense'
      )
   })

   it('navigate To History', () => {
      onHomePage.navigateToFooterLinks(
         'History',
         'history',
         'History | Daniel Defense'
      )
   })

   it.skip('navigate To Careers', () => {
      onHomePage.navigateToFooterLinks(
         'Careers',
         'https://workforcenow.adp.com/',
         'Recruitment'
      )
   })

   it('navigate To ISO Certification', () => {
      onHomePage.navigateToFooterLinks(
         'ISO Certification',
         'iso-certification',
         'ISO Certification Request | Daniel Defense'
      )
   })

      // MEDIA CENTER LINKS

      it('navigate To DD Wire - Blog', () => {
         onHomePage.navigateToFooterLinks(
            'DD Wire - Blog',
            'wire',
            'DD Wire | Daniel Defense'
         )
      })

      it('navigate To Press Kits & Media', () => {
         onHomePage.navigateToFooterLinks(
            'Press Kits & Media',
            'press-media',
            'Press Kits & Media | Daniel Defense'
         )
      })

      it('navigate To Catalog Download', () => {
         onHomePage.navigateToFooterLinks(
            'Catalog Download',
            'catalog-request',
            'Catalog Request | Daniel Defense'
         )
      })

      it('navigate To Mobile Wallpapers', () => {
         onHomePage.navigateToFooterLinks(
            'Mobile Wallpapers',
            'mobile-wallpapers',
            'Downloadable Media | Daniel Defense'
         )
      })

      // MILITARY | LAW ENFORCEMENT LINKS

      it('navigate To MILE Program', () => {
         onHomePage.navigateToFooterLinks(
            'MILE Program',
            'mile-program',
            'MILE | Daniel Defense'
         )
      })

      it('navigate To MILE Dealers', () => {
         onHomePage.navigateToFooterLinks(
            'MILE Dealers',
            'mile-dealers',
            'Military and Law Enforcement Authorized Dealers | Daniel Defense'
         )
      })

      it('navigate To Distributors', () => {
         onHomePage.navigateToFooterLinks(
            'Distributors',
            'international-dealers-and-distributors',
            'Distributors and International Dealers | Daniel Defense'
         )
      })

      // PRIVACY & COOKIE POLICY LINK
      it('Navigate To Privacy & Cookie Policy', () => {
         onHomePage.navigateToFooterLinks(
            'Privacy & Cookie Policy',
            'privacy-policy-disclaimers',
            'Privacy Policy/Disclaimers | Daniel Defense'
         )
      })
})