Blockly.Blocks['game_action_rotate'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Sprite Rotates")
          .appendField(new Blockly.FieldAngle(90), "angle");
      this.setOutput(true, null);
      this.setColour(135);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['game_action_rotate'] = function(block) {
    var angle_angle = block.getFieldValue('angle');
    // TODO: Assemble JavaScript into code variable.
    var code = `rotate(${angle_angle},Btnindex)`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };