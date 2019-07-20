Blockly.Blocks['game_trigger_keypress'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldTextInput("X"), "key")
          .appendField("pressed");
      this.setPreviousStatement(true, "Trigger");
      this.setColour(315);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['game_trigger_keypress'] = function(block) {
    var text_key = block.getFieldValue('key');
    // TODO: Assemble JavaScript into code variable.
    var code = `${text_key}_PRESSED`;
    return code;
  };