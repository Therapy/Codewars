/*
You are given a node that is the beginning of a linked list. This list always contains a tail and a loop.

Your objective is to determine the length of the loop.

Use the `getNext' method or 'next' property to get the following node.
node.getNext()
node.next

Thanks to shadchnev, I broke all of the methods from the Hash class.
Don't miss dmitry's article in the discussion after you pass the Kata !!
*/

function loop_size(node) {
  let loop = [];
  let first = 0;

  // if we have index of node -> loop found
  while (node && loop.indexOf(node) < 0) {
    loop.push(node);
    node = node.next;
  }
  // index from which the loop begins now in the current node
  first = Math.max(0, loop.indexOf(node));

  return loop.length - first;
}

// another one solution
function loop_size(node){
  let turtle = node;
  let rabbit = node;

  // Find a point in the loop.  Any point will do!
  // Since the rabbit moves faster than the turtle
  // and the kata guarantees a loop, the rabbit will
  // eventually catch up with the turtle.
  do {
    turtle = turtle.getNext();
    rabbit = rabbit.getNext().getNext();
  } while (turtle != rabbit);

  // The turtle and rabbit are now on the same node,
  // but we know that node is in a loop.  So now we
  // keep the turtle motionless and move the rabbit
  // until it finds the turtle again, counting the
  // nodes the rabbit visits in the mean time.
  let count = 0;
  do {
    ++count;
    rabbit = rabbit.getNext();
  } while (turtle != rabbit);

  // voila
  return count;
}
