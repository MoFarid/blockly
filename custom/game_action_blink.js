Blockly.Blocks['game_action_blink'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Sprite blinks");
      this.setOutput(true, null);
      this.setColour(135);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


  Blockly.JavaScript['game_action_blink'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'blink(Btnindex)';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };