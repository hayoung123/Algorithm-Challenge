# Reverse String


## 1st Soltion : reverse()

**reverse() : reverse and array in place** 
bulit in javascript method 

1. str -> array  
2. reverse()
3. join  
4. return
   
```
function reverse(str){
    <!-- const arr = str.split('');
    arr.reverse();
    return arr.join('') -->
    
    return str.split('').reverse().join('')
}
```
<br/>

## 2nd Solution: using string +

<br/>

```
function reverse(str) {
  let reversed = "";
  for(let character of str){
    reversed = character + reversed;
  }
}
```

<br/>

## 3rd Solution : reduce()


<br/>

```
function reverse(str) {
  str.split("").reduce((reversed, character) => {
    return character + reversed;
  }, "");
}
```