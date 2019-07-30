Blockly.Blocks['game_action_visibility'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["Sprite appears","appear"], ["Sprite disappears","disappear"]]), "visibility");
      this.setOutput(true, null);
      this.setColour(135);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };



  Blockly.JavaScript['game_action_visibility'] = function(block) {
    var dropdown_visibility = block.getFieldValue('visibility');
    // TODO: Assemble JavaScript into code variable.
    var code = dropdown_visibility;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };