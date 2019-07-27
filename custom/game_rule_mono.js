Blockly.Blocks['game_rule_mono'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Panda");
      this.appendValueInput("action")
          .setCheck(null);
      this.appendStatementInput("trigger_1")
          .setCheck(null)
          .appendField("when");
      this.setInputsInline(true);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['game_rule_mono'] = function(block) {
    var value_action = Blockly.JavaScript.valueToCode(block, 'action', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_trigger_1 = Blockly.JavaScript.statementToCode(block, 'trigger_1');
    var parsed = statements_trigger_1.split("&+")
    // TODO: Assemble JavaScript into code variable.
    var code = `{
        if(triggered['${parsed[0].trim()}']) {
          const actions = () => {
            ${value_action.slice(1, -1).trim()}
            triggered['${parsed[0].trim()}'] = false
          }
          delay(actions, ${parsed[1]})
        }
      }*&`;
return code;
  };