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
    options = defaultFor(options, {});
    var dropdownMenuSelector = defaultFor(options.menuSelector, ".dropdown-module .dropdown-menu a");
    var labelTargetSelector = defaultFor(options.labelTargetSelector, ".dropdown-module .dropdown-selection-wrapper .dropdown-selection");
    var inputTargetSelector = defaultFor(options.inputTargetSelector, ".dropdown-module .dropdown-selection-wrapper input");

    console.log(labelTargetSelector);
    // var labelTargetSelector = options.
    var dropdownDataSelector = options.dataselector || "dropdownval";

    $(dropdownMenuSelector).click(function() {
      var text = $( this ).text();
      console.log(text);
      $(labelTargetSelector).text(text);
      $(inputTargetSelector).val( $( this ).data(dropdownDataSelector) );
      // $(inputTargetSelector).val( $( this ).data( dropdownDataSelector) );
    });
  }
}

function defaultFor(arg, val) { return typeof arg !== 'undefined' ? arg : val; }
