# LiveScript是coffee的变体 大部分语法和Coffee相同
indexFunc = ->
   border = new Array 51
      .join "-"
   console
      ..log border
      ..log \HelloFriends
      ..log "Date: #{new Date!}"
      ..log!
      ..log border
indexFunc!