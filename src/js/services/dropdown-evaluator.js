/**
* @author Jack Considine <jackconsidine3@gmail.com>
* @package
* 2017-10-06
* Package for offering display to a bootstrap dropdown menu on selection
*
* Currently works for bootstrap v 3
*/
require("jquery");


module.exports = {
  /**
   * [description]
   * @param  {[type]} options [description]
   * @return {[type]}         [description]
   */
  listenForDropDown : function (options) {
    options = options || {};
    var dropdownMenuSelector = options.menuSelector || ".dropdown-module .dropdown-menu a";
    var labelTargetSelector = options.labelTargetSelector || ".dropdown-selection-wrapper .dropdown-selection";
    var inputTargetSelector = options.inputTargetSelector || ".dropdown-selection-wrapper input";
    // var labelTargetSelector = options.
    var dropdownDataSelector = options.dataselector || "dropdownval";

    $(dropdownMenuSelector).click(function() {
      $(labelTargetSelector).text($( this ).text());
      $(inputTargetSelector).val( $( this ).data(dropdownDataSelector) );
      console.log(inputTargetSelector);
      // $(inputTargetSelector).val( $( this ).data( dropdownDataSelector) );
    });
  }
}
