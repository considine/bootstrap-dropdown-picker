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
    var rootModuleSelector = defaultFor(options.rootModuleSelector, '.dropdown-module');
    var dropdownMenuSelector = defaultFor(options.menuSelector, " .dropdown-menu a");
    var labelTargetSelector = defaultFor(options.labelTargetSelector, ".dropdown-selection-wrapper .dropdown-selection");
    var inputTargetSelector = defaultFor(options.inputTargetSelector, ".dropdown-selection-wrapper input");
    var inputTargetName = defaultFor(options.inputTargetName, "input-dropdown");

    console.log(labelTargetSelector);
    // var labelTargetSelector = options.
    var dropdownDataSelector = options.dataselector || "dropdownval";

    $(rootModuleSelector + " " + dropdownMenuSelector).click(function() {
      var text = $( this ).text();
      // $(this).parentsUntil( rootModuleSelector ).remove();



      $( this ).parentsUntil( rootModuleSelector ).parent().find(labelTargetSelector).text(text);
      $( this ).parentsUntil( rootModuleSelector ).parent().find(inputTargetSelector).attr('name', inputTargetName)
      $( this ).parentsUntil( rootModuleSelector ).parent().find(inputTargetSelector).val( $( this ).data(dropdownDataSelector) );
      // $(labelTargetSelector).text(text);
      // $(inputTargetSelector).attr('name', inputTargetName)
      // $(inputTargetSelector).val( $( this ).data(dropdownDataSelector) );
      // $(inputTargetSelector).val( $( this ).data( dropdownDataSelector) );
    });
  }
}

function defaultFor(arg, val) { return typeof arg !== 'undefined' ? arg : val; }
