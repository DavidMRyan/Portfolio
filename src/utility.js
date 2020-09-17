export default class Utility
{
    /**
     * Smoothly scroll to an element on the page
     * @param {*} elem - The id of the element to scroll to
     */
    static scrollToElement(elem)
    {
        window.scrollTo({
                top: document.getElementById(elem).getBoundingClientRect().top + window.pageYOffset - 20,
                behavior: "smooth"
            }
        );
    }
}