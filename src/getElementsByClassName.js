const getElementsByClassName = (target) => {
  const result = [];
  function recursion(node) {
    console.log(node.className.includes(target));
    if (node.className === target) {
      result.push(node);
    }
    if (node.childNodes) {
      for (const child of node.childNodes) {
        recursion(child);
      }
    }
  }
  recursion(document.body);
  return result;
};

module.exports = { getElementsByClassName };
