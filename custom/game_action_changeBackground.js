Blockly.Blocks['game_action_changebackground'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Background is")
          .appendField(new Blockly.FieldDropdown([["White","WHITE"], ["Cloud","CLOUD"], ["Forest","FOREST"], ["Rain","RAIN"]]), "value");
      this.setOutput(true, null);
      this.setColour(135);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['game_action_changebackground'] = function(block) {
    var dropdown_value = block.getFieldValue('value');
    // TODO: Assemble JavaScript into code variable.
    var code = `changeBackground('${dropdown_value}')`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };