Blockly.Blocks['game_rule_mono'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("");
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
    
    var code = `{
        if(await checkTrigger(${statements_trigger_1.trim()})) {
          ${value_action.slice(1, -1).trim()}
          disableTrigger(${statements_trigger_1.trim()})
        }
      }*&`;
return code;
  };