Blockly.Blocks['game_trigger_clicked'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Panda is clicked","CLICKED"], ["Background is clicked","BACKCLICKED"], ["Flag is clicked","FLAGCLICKED"]]), "click_type");
    this.setPreviousStatement(true, "Trigger");
    this.setColour(315);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['game_trigger_clicked'] = function(block) {
  var dropdown_click_type = block.getFieldValue('click_type');
  // TODO: Assemble JavaScript into code variable.
  var code = `'${dropdown_click_type}'`;
  return code;
};