Blockly.Blocks["game_rule"] = {
  init: function() {
    this.appendDummyInput().appendField("Rule:");
    this.appendValueInput("action").setCheck(null);
    this.appendDummyInput().appendField("when");
    this.appendStatementInput("trigger_1")
      .setCheck(null)
      .appendField("1");
    this.appendDummyInput().appendField("And");
    this.appendStatementInput("trigger_2")
      .setCheck(null)
      .appendField("2");
    this.setInputsInline(true);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["game_rule"] = function(block) {
  var value_action = Blockly.JavaScript.valueToCode(
    block,
    "action",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var statements_trigger_1 = Blockly.JavaScript.statementToCode(
    block,
    "trigger_1"
  );
  var statements_trigger_2 = Blockly.JavaScript.statementToCode(
    block,
    "trigger_2"
  );
  // TODO: Assemble JavaScript into code variable.

  var code = `{
                if(triggered['${statements_trigger_1.trim()}'] && triggered['${statements_trigger_2.trim()}']) {
                  ${value_action.slice(1, -1).trim()}() 
                  triggered['${statements_trigger_1.trim()}'] = false
                  triggered['${statements_trigger_2.trim()}'] = false
                }
              }*&`;
  return code;
};
