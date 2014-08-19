(function() {
  Discourse.Dialect.inlineBetween({
    start: "[color=",
    stop:  "[/color]",
    rawContents: true,
    emitter: function(contents) {
      var matches = contents.match(/(.+)](.*)/);
      if (matches) {
        return ['span', {style: "color: " + matches[1] + ";"}, matches[2]];
      }
    }
  });
  Discourse.Dialect.inlineBetween({
    start: "[color]",
    stop:  "[/color]",
    rawContents: true,
    emitter: function(contents) {
      var matches = contents.match(/](.*)/);
      if (matches) {
        return ['img', {src: matches[1]}, ""];
      }
    }
  });
  Discourse.Dialect.inlineBetween({
    start: "[color]",
    stop:  "[/color]",
    rawContents: true,
    emitter: function(contents) {
      var matches = contents.match(/](.*)/);
      if (matches) {
        return ['img', {src: matches[1]}, ""];
      }
    }
  });
  Discourse.Dialect.inlineBetween({
    start: "[center]",
    stop:  "[/center]",
    rawContents: true,
    emitter: function(contents) {
      var matches = contents.match(/](.*)/);
      if (matches) {
        return ['div', {style: "text-align: center;"}, matches[1]];
      }
    }
  });
})();
