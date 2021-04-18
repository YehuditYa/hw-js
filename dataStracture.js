function CheckValid(arr){
    let s=new Set();
    let passwordSplitted,count=0;
    arr.forEach(password => {
        passwordSplitted=password.split(' ');
        s=new Set(passwordSplitted);
        if(s.size===passwordSplitted.length)
            count++;
    });
    return count;
}

let arr=['ee dd cc bb a', 'aa dd cc bb aa','aa bb cc dd aaa']
console.log(CheckValid(arr))

let classMap=new Map();
classMap.set(323232323,{firstName:'יהודית',lastName:'יעקובוביץ'});
classMap.set(123456789,{firstName:'רותי',lastName:'כהן'});
classMap.set(987654321,{firstName:'שולי',lastName:'לוי'});
console.log(classMap.size)
classMap.values.forEach(student=>{
    console.log(student.firstName);
})

console.log('end');
