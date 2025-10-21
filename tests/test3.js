import { Selector } from "testcafe";    


fixture ('Getting Started for test3.js file')
.page('https://trytestingthis.netlify.app/'); 

test('2nd test', async t => {
    await t
        .maximizeWindow()
        .typeText('#fname','Ehsanul Alam')
        .typeText('#lname', 'sabbir')
        .doubleClick('body > div.row > div.side.ex1 > button')
        .rightClick('#fname')
        .hover('body > div.row > div.side.ex1 > div.tooltip')
        .wait(2000)
        .dragToElement('#drag1','#div1')
        .wait(2000)
        //.scrollIntoView('body > div.footer')
        .wait(2000)

        //alert handling
        .setNativeDialogHandler(() => true)
        .click('body > div.row > div.side.ex1 > div.pop-up-alert > button')
        .wait(2000)
        

        //screenshot
        .takeScreenshot('screenshot1.png')
    

})

test('Dropdown test', async t => {
    await t
        .maximizeWindow()
        
        // Test dropdown selection
        .click('#option')
        .click('#option > option:nth-child(2)') // Select second option
        .wait(1000)
        
        // Verify dropdown selection
        .expect(Selector('#option > option:nth-child(2)').value).eql('option 1')
        
        // Test another dropdown if available
        .click('#owc')
        .click('#owc > option:nth-child(3)') // Select third option
        .wait(1000)
        
        // Verify second dropdown selection
        // .expect(Selector('#owc').value).eql('option3')
        
        // Test dropdown with text selection
        .click('#option')
       // .click(Selector('#option').withText('option1'))
        .wait(1000)
        
        // Verify text-based selection
       // .expect(Selector('#option').value).eql('option1')
        
        // Take screenshot of dropdown test results
        .takeScreenshot('dropdown-test.png')
})

test('Contact page navigation and assertion', async t => {
    await t
        .maximizeWindow()
        
        // Navigate to contact page
        .click('.button.bar-item')
        .wait(2000)
        
        // Assert the thank you message is present
        .expect(Selector('h2').withText('Thank you for using this Website :)').exists).ok('Thank you message should be visible on contact page')
        
        // Additional assertion to verify exact text content
        .expect(Selector('h2').withText('Thank you for using this Website :)').innerText).eql('Thank you for using this Website :)')
        
        // Take screenshot of contact page
        .takeScreenshot('contact-page.png')
})