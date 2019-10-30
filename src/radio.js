var ada = window.ada;
var FormStuff = {
  init: function() {
    this.applyConditionalRequired();
    this.bindUIActions();
  },

  bindUIActions: function() {
    ada("input[type='radio'], input[type='checkbox']").on(
      "change",
      this.applyConditionalRequired
    );
  },

  applyConditionalRequired: function() {
    ada(".require-if-active").each(function() {
      var el = ada(this);
      if (ada(el.data("require-pair")).is(":checked")) {
        el.prop("required", true);
      } else {
        el.prop("required", false);
      }
    });
  }
};

FormStuff.init();
