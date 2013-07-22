// ==========================================================================
// Project:   Reorder.TeamRecord
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*globals Reorder */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Reorder.TeamRecord = SC.Record.extend(
/** @scope Reorder.TeamRecord.prototype */ {

  // TODO: Add your own code here.
  ranking: SC.Record.attr(Number, { isRequired: YES }),
  name: SC.Record.attr(String, { isRequired: YES }),
  reason: SC.Record.attr(String, { isRequired: YES })

});; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('reorder');