Blockly.Blocks['game_trigger_click'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Clicked");
      this.setPreviousStatement(true, "Trigger");
      this.setColour(315);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['game_trigger_click'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'CLICKED';
    return code;
  };