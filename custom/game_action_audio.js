Blockly.Blocks['game_action_audio'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("panda pops");
      this.setOutput(true, null);
      this.setColour(135);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };



  Blockly.JavaScript['game_action_audio'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'playaudio()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };