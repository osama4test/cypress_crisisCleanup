
class dropdown {

    //All the css selectors 

    elements = {

        dropDownSelector: () => cy.get('.leading-snug > .relative > .w-full'),
        ThirdValueInDropdown:()=>Lcy.get('.multiselect-single-label')
        



    }

getSecondItemInDropDown(){

    this.elements.dropDownSelector().click()
    this.elements.ThirdValueInDropdown().contains('Salt Lake Area Windstorm').click()



}


}
export default dropdown