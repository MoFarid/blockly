Blockly.Blocks['game_trigger_mouseover'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Mouseover");
      this.setPreviousStatement(true, "Trigger");
      this.setColour(315);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


  Blockly.JavaScript['game_trigger_mouseover'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'MOUSEOVER';
    return code;
  };