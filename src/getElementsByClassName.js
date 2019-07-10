const getElementsByClassName = (target) => {
  const result = [];
  const recursion = (node) => {
    if (node.classList && node.classList.contains(target)) {
      result.push(node);
    }
    if (node.childNodes) {
      for (const child of node.childNodes) {
        recursion(child);
      }
    }
  };
  recursion(document.body);
  return result;
};

module.exports = { getElementsByClassName };
