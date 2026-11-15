type StepFn = (val: number) => number | StepFn;

function add(val: number): number | StepFn {

}

export default add

add() // => 0
add(1)(2)() // => 3



// add(n0)(n1)...(nk)() => n0+n1+...+nk