//set does not allow duplicate values, every element must be unique
var nums=new Set()
nums.add(10);
nums.add(20);
nums.add(40);
nums.add(50);
nums.add(70);
nums.add(40);
nums.add(10);
for(let a of nums)
    document.write(a,',')
    document.write('<br><br>',nums.size)