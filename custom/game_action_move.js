Blockly.Blocks["game_action_move"] = {
  init: function() {
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ["Move Left", "moveLeft"],
        ["Move Right", "moveRight"],
        ["Move Up", "moveUp"],
        ["Move Down", "moveDown"]
      ]),
      "direction"
    );
    this.setOutput(true, null);
    this.setColour(135);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["game_action_move"] = function(block) {
  var dropdown_direction = block.getFieldValue("direction");
  var code = dropdown_direction+'()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
