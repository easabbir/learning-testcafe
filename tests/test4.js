import { Selector } from 'testcafe';

fixture ('Getting Started for test3.js file')
.page('https://trytestingthis.netlify.app/'); 

test('2nd test', async t => {
    
    const dropdown = Selector('#option');

    const dropDownOptions = dropdown.find('option');


    await t
        .maximizeWindow()
        .click(dropdown)
        .click(dropDownOptions.withText('Option 3'))
        .wait(1000)
        .expect(dropdown.value).eql('option 3') 
       
        .setFilesToUpload('#myfile', '../tests/upload/sabbir.txt')
        .wait(5000)
        
        
        //.resizeWindow(800, 600)
        .wait(2000)
        //.resizeWindow(2000, 4000)
        .wait(2000)
        
        .maximizeWindow()
        .wait(2000)
        
        .scrollBy(0, 500)
        .wait(1000)
        .scrollBy(0, -500)
        .wait(1000)
        .scrollBy(0, 800)
        .wait(1000)

        .expect(Selector('body > div.navbar > a:nth-child(1)').innerText).eql('Contact')
        
        // .expect(Selector('body > div.navbar > a:nth-child(2)').innerText).eql('Home')
        // .wait(1000)
        
        .navigateTo('https://www.google.com')
        .wait(2000);
})




// fixture('Getting Started for test4.js')
// .page('https://trytestingthis.netlify.app/');

// test('3rd test', async t => {
//     const dropdown = Selector('#option');
//     const dropDownOptions = dropdown.find('option');

//     await t
//         .click(dropdown)
//         .click(dropDownOptions.withText('Option 2'))
//         .wait(1000)
        
// });

















