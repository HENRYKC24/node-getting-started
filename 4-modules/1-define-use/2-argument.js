function dynamicArgsFunction() {
  console.log(arguments['0']);
}

dynamicArgsFunction(3, 7, 5, 4);
