function printCallStack(n, from) {
  if (n<=1) {
    return 1
  };
  return printCallStack(n-1) + printCallStack(n-1);
}

console.log(printCallStack(5));