Blockly.Blocks['game_trigger_wait'] = {
    init: function() {
      this.appendStatementInput("Wait")
          .setCheck(null)
          .appendField("Waiting")
          .appendField(new Blockly.FieldTextInput("5"), "WAIT")
          .appendField("sec after");
      this.setPreviousStatement(true, "Trigger");
      this.setColour(315);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };



  Blockly.JavaScript['game_trigger_wait'] = function(block) {
    var text_wait = block.getFieldValue('WAIT');
    var statements_wait = Blockly.JavaScript.statementToCode(block, 'Wait');
    // TODO: Assemble JavaScript into code variable.
    var code = `${statements_wait}&+${text_wait}`
    return code;
  }